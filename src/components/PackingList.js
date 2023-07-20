import { useState } from "react";
import Item from "./Item";

export default function PackingList({ item, onDelete, onToggleItem, onClear }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = item;
  if (sortBy === "description")
    sortedItems = item
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = item
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  function onClearList() {
    if (!item.length)
      return window.alert(`You got ${item.length} item in your list`);
    const permisson = window.confirm("Are you sure to clear your list?");
    if (permisson) onClear([]);
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((i) => (
          <Item
            item={i}
            onDelete={onDelete}
            onToggleItem={onToggleItem}
            key={i.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by alphabetically order</option>
          <option value="packed">Sort by packed order</option>
        </select>
        <button onClick={() => onClearList()}>Clear</button>
      </div>
    </div>
  );
}
