export default function TodoItem({ item }) {
  const { id, content } = item;
  return (
    <div>
      {id}: {content}
    </div>
  );
}
