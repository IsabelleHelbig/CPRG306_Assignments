export default function Item({ name, quantity, category, onSelect }) {
  return (
    <ul className="p-2 bg-slate-800 m-4 w-96 text-white" onClick={onSelect}>
      <li className="text-xl font-bold">{name}</li>
      <li>
        Buy {quantity} in {category}
      </li>
    </ul>
  );
}
