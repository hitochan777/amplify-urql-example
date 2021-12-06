import { withAuthenticator } from "@aws-amplify/ui-react";
import { Suspense } from "react";
import TodoList from "./TodoList";

function App() {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <TodoList />
    </Suspense>
  );
}

export default withAuthenticator(App);
