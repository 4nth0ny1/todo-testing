import TodoItem from "./TodoItem";

export default function TodoList({ data }) {
  return (
    <>
      {data.map((item) => {
        return <TodoItem key={item.id} item={item} />;
      })}
    </>
  );
}
