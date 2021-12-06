import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `AWSDateTime` scalar type provided by AWS AppSync, represents a valid ***extended*** [ISO 8601 DateTime](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) string. In other words, this scalar type accepts datetime strings of the form `YYYY-MM-DDThh:mm:ss.SSSZ`.  The scalar can also accept "negative years" of the form `-YYYY` which correspond to years before `0000`. For example, "**-2017-01-01T00:00Z**" and "**-9999-01-01T00:00Z**" are both valid datetime strings.  The field after the two digit seconds field is a nanoseconds field. It can accept between 1 and 9 digits. So, for example, "**1970-01-01T12:00:00.2Z**", "**1970-01-01T12:00:00.277Z**" and "**1970-01-01T12:00:00.123456789Z**" are all valid datetime strings.  The seconds and nanoseconds fields are optional (the seconds field must be specified if the nanoseconds field is to be used).  The [time zone offset](https://en.wikipedia.org/wiki/ISO_8601#Time_zone_designators) is compulsory for this scalar. The time zone offset must either be `Z` (representing the UTC time zone) or be in the format `±hh:mm:ss`. The seconds field in the timezone offset will be considered valid even though it is not part of the ISO 8601 standard. */
  AWSDateTime: any;
};

export type CreateTodoInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
};

export type DeleteTodoInput = {
  id: Scalars['ID'];
};

export enum ModelAttributeTypes {
  Null = '_null',
  Binary = 'binary',
  BinarySet = 'binarySet',
  Bool = 'bool',
  List = 'list',
  Map = 'map',
  Number = 'number',
  NumberSet = 'numberSet',
  String = 'string',
  StringSet = 'stringSet'
}

export type ModelBooleanInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
};

export type ModelFloatInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
};

export type ModelIdInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  beginsWith?: InputMaybe<Scalars['ID']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  ge?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  le?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  notContains?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type ModelIntInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
};

export type ModelSizeInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
};

export enum ModelSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type ModelStringInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  beginsWith?: InputMaybe<Scalars['String']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  notContains?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type ModelTodoConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelTodoConditionInput>>>;
  description?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelTodoConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelTodoConditionInput>>>;
};

export type ModelTodoConnection = {
  __typename?: 'ModelTodoConnection';
  items: Array<Todo>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelTodoFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelTodoFilterInput>>>;
  description?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelTodoFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelTodoFilterInput>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo?: Maybe<Todo>;
  deleteTodo?: Maybe<Todo>;
  updateTodo?: Maybe<Todo>;
};


export type MutationCreateTodoArgs = {
  condition?: InputMaybe<ModelTodoConditionInput>;
  input: CreateTodoInput;
};


export type MutationDeleteTodoArgs = {
  condition?: InputMaybe<ModelTodoConditionInput>;
  input: DeleteTodoInput;
};


export type MutationUpdateTodoArgs = {
  condition?: InputMaybe<ModelTodoConditionInput>;
  input: UpdateTodoInput;
};

export type Query = {
  __typename?: 'Query';
  getTodo?: Maybe<Todo>;
  listTodos?: Maybe<ModelTodoConnection>;
};


export type QueryGetTodoArgs = {
  id: Scalars['ID'];
};


export type QueryListTodosArgs = {
  filter?: InputMaybe<ModelTodoFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onCreateTodo?: Maybe<Todo>;
  onDeleteTodo?: Maybe<Todo>;
  onUpdateTodo?: Maybe<Todo>;
};


export type SubscriptionOnCreateTodoArgs = {
  owner?: InputMaybe<Scalars['String']>;
};


export type SubscriptionOnDeleteTodoArgs = {
  owner?: InputMaybe<Scalars['String']>;
};


export type SubscriptionOnUpdateTodoArgs = {
  owner?: InputMaybe<Scalars['String']>;
};

export type Todo = {
  __typename?: 'Todo';
  createdAt: Scalars['AWSDateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  owner?: Maybe<Scalars['String']>;
  updatedAt: Scalars['AWSDateTime'];
};

export type UpdateTodoInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type CreateTodoMutationVariables = Exact<{
  input: CreateTodoInput;
  condition?: InputMaybe<ModelTodoConditionInput>;
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo?: { __typename?: 'Todo', id: string, name: string, description?: string | null | undefined, createdAt: any, updatedAt: any, owner?: string | null | undefined } | null | undefined };

export type UpdateTodoMutationVariables = Exact<{
  input: UpdateTodoInput;
  condition?: InputMaybe<ModelTodoConditionInput>;
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo?: { __typename?: 'Todo', id: string, name: string, description?: string | null | undefined, createdAt: any, updatedAt: any, owner?: string | null | undefined } | null | undefined };

export type DeleteTodoMutationVariables = Exact<{
  input: DeleteTodoInput;
  condition?: InputMaybe<ModelTodoConditionInput>;
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo?: { __typename?: 'Todo', id: string, name: string, description?: string | null | undefined, createdAt: any, updatedAt: any, owner?: string | null | undefined } | null | undefined };

export type GetTodoQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetTodoQuery = { __typename?: 'Query', getTodo?: { __typename?: 'Todo', id: string, name: string, description?: string | null | undefined, createdAt: any, updatedAt: any, owner?: string | null | undefined } | null | undefined };

export type ListTodosQueryVariables = Exact<{
  filter?: InputMaybe<ModelTodoFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;


export type ListTodosQuery = { __typename?: 'Query', listTodos?: { __typename?: 'ModelTodoConnection', nextToken?: string | null | undefined, items: Array<{ __typename?: 'Todo', id: string, name: string, description?: string | null | undefined, createdAt: any, updatedAt: any, owner?: string | null | undefined }> } | null | undefined };

export type OnCreateTodoSubscriptionVariables = Exact<{
  owner?: InputMaybe<Scalars['String']>;
}>;


export type OnCreateTodoSubscription = { __typename?: 'Subscription', onCreateTodo?: { __typename?: 'Todo', id: string, name: string, description?: string | null | undefined, createdAt: any, updatedAt: any, owner?: string | null | undefined } | null | undefined };

export type OnUpdateTodoSubscriptionVariables = Exact<{
  owner?: InputMaybe<Scalars['String']>;
}>;


export type OnUpdateTodoSubscription = { __typename?: 'Subscription', onUpdateTodo?: { __typename?: 'Todo', id: string, name: string, description?: string | null | undefined, createdAt: any, updatedAt: any, owner?: string | null | undefined } | null | undefined };

export type OnDeleteTodoSubscriptionVariables = Exact<{
  owner?: InputMaybe<Scalars['String']>;
}>;


export type OnDeleteTodoSubscription = { __typename?: 'Subscription', onDeleteTodo?: { __typename?: 'Todo', id: string, name: string, description?: string | null | undefined, createdAt: any, updatedAt: any, owner?: string | null | undefined } | null | undefined };


export const CreateTodoDocument = gql`
    mutation CreateTodo($input: CreateTodoInput!, $condition: ModelTodoConditionInput) {
  createTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    owner
  }
}
    `;

export function useCreateTodoMutation() {
  return Urql.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument);
};
export const UpdateTodoDocument = gql`
    mutation UpdateTodo($input: UpdateTodoInput!, $condition: ModelTodoConditionInput) {
  updateTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    owner
  }
}
    `;

export function useUpdateTodoMutation() {
  return Urql.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument);
};
export const DeleteTodoDocument = gql`
    mutation DeleteTodo($input: DeleteTodoInput!, $condition: ModelTodoConditionInput) {
  deleteTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    owner
  }
}
    `;

export function useDeleteTodoMutation() {
  return Urql.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument);
};
export const GetTodoDocument = gql`
    query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    name
    description
    createdAt
    updatedAt
    owner
  }
}
    `;

export function useGetTodoQuery(options: Omit<Urql.UseQueryArgs<GetTodoQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetTodoQuery>({ query: GetTodoDocument, ...options });
};
export const ListTodosDocument = gql`
    query ListTodos($filter: ModelTodoFilterInput, $limit: Int, $nextToken: String) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
    nextToken
  }
}
    `;

export function useListTodosQuery(options: Omit<Urql.UseQueryArgs<ListTodosQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ListTodosQuery>({ query: ListTodosDocument, ...options });
};
export const OnCreateTodoDocument = gql`
    subscription OnCreateTodo($owner: String) {
  onCreateTodo(owner: $owner) {
    id
    name
    description
    createdAt
    updatedAt
    owner
  }
}
    `;

export function useOnCreateTodoSubscription<TData = OnCreateTodoSubscription>(options: Omit<Urql.UseSubscriptionArgs<OnCreateTodoSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandler<OnCreateTodoSubscription, TData>) {
  return Urql.useSubscription<OnCreateTodoSubscription, TData, OnCreateTodoSubscriptionVariables>({ query: OnCreateTodoDocument, ...options }, handler);
};
export const OnUpdateTodoDocument = gql`
    subscription OnUpdateTodo($owner: String) {
  onUpdateTodo(owner: $owner) {
    id
    name
    description
    createdAt
    updatedAt
    owner
  }
}
    `;

export function useOnUpdateTodoSubscription<TData = OnUpdateTodoSubscription>(options: Omit<Urql.UseSubscriptionArgs<OnUpdateTodoSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandler<OnUpdateTodoSubscription, TData>) {
  return Urql.useSubscription<OnUpdateTodoSubscription, TData, OnUpdateTodoSubscriptionVariables>({ query: OnUpdateTodoDocument, ...options }, handler);
};
export const OnDeleteTodoDocument = gql`
    subscription OnDeleteTodo($owner: String) {
  onDeleteTodo(owner: $owner) {
    id
    name
    description
    createdAt
    updatedAt
    owner
  }
}
    `;

export function useOnDeleteTodoSubscription<TData = OnDeleteTodoSubscription>(options: Omit<Urql.UseSubscriptionArgs<OnDeleteTodoSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandler<OnDeleteTodoSubscription, TData>) {
  return Urql.useSubscription<OnDeleteTodoSubscription, TData, OnDeleteTodoSubscriptionVariables>({ query: OnDeleteTodoDocument, ...options }, handler);
};