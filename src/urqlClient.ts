import {
  createClient,
  dedupExchange,
  cacheExchange,
  fetchExchange,
} from "urql";
import type { AuthConfig } from "@urql/exchange-auth";
import { authExchange } from "@urql/exchange-auth";
import appSyncConfig from "./aws-exports";
import { Auth } from "aws-amplify";
import { makeOperation } from "@urql/core";

interface AuthToken {
  token: string;
}

const getAuth: AuthConfig<AuthToken>["getAuth"] = async () => {
  try {
    const session = await Auth.currentSession();
    const token = session.getIdToken().getJwtToken();
    return {
      token,
    };
  } catch {
    return null;
  }
};

const addAuthToOperation: AuthConfig<AuthToken>["addAuthToOperation"] = ({
  authState,
  operation,
}) => {
  if (!authState || !authState.token) {
    return operation;
  }

  const fetchOptions =
    typeof operation.context.fetchOptions === "function"
      ? operation.context.fetchOptions()
      : operation.context.fetchOptions || {};

  return makeOperation(operation.kind, operation, {
    ...operation.context,
    fetchOptions: {
      ...fetchOptions,
      headers: {
        ...fetchOptions.headers,
        Authorization: authState.token,
      },
    },
  });
};

const didAuthError: AuthConfig<AuthToken>["didAuthError"] = ({ error }) => {
  return error.response.status === 401;
};

const client = createClient({
  url: `${appSyncConfig.aws_appsync_graphqlEndpoint}`,
  suspense: true,
  exchanges: [
    dedupExchange,
    cacheExchange,
    authExchange({
      addAuthToOperation,
      getAuth,
      didAuthError,
    }),
    fetchExchange,
  ],
});

export default client;
