export default function TodoList({ items = [] }) {
  return (
    <div data-testid="TodoList">
      {items.length ? (
        <div>
          {items.map((item) => {
            return (
              <ul key={item}>
                <li>{item}</li>
              </ul>
            );
          })}
        </div>
      ) : (
        <div data-testid="no-items">There are no items in your list.</div>
      )}

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
