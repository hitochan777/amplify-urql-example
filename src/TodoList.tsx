import { useListTodosQuery } from "./generated/graphql";

const TodoList = () => {
  const [{ data }] = useListTodosQuery();
  return (
    <ol>
      {data?.listTodos?.items.map((item) => (
        <li key={item.id}>
          {item.name} ({item.description})
        </li>
      ))}
    </ol>
  );
};

export default TodoList;
