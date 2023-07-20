import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [item, setItems] = useState([]);

  function handleAddItems(items) {
    setItems((item) => [...item, items]);
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((el) => el.id !== id));
  }
  function handleToggleItems(id) {
    setItems((items) =>
      items.map((el) => (el.id === id ? { ...el, packed: !el.packed } : el))
    );
  }
  return (
    <div className="App">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList
        item={item}
        onDelete={handleDeleteItems}
        onToggleItem={handleToggleItems}
        onClear={setItems}
      />

      <Stats item={item} />
    </div>
  );
}
