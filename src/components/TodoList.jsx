export default function TodoList({ items = [] }) {
  return (
    <div data-testid="TodoList">
      <div>There are no items in your list.</div>
      {items.map((item) => {
        return (
          <ul key={item}>
            <li>{item}</li>
          </ul>
        );
      })}
      {/* {items.map((item) => {
        return (
          <ul key={item.id}>
            <li>{item.content}</li>
          </ul>
        );
      })} */}
    </div>
  );
}
