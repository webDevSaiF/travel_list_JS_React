import { useState } from "react";

export default function Form({ handleAddItems }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    if (description.length === 0) return console.log("No description");
    const newItem = {
      id: Math.round(new Date().getTime()),
      description,
      quantity,
      packed: false
    };

    handleAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form onSubmit={submitHandler} className="add-form">
      <h3>
        What do you need for your trip? <span role="img">🌄</span>
      </h3>
      <div>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num, i) => (
            <option key={i + 1} value={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Items..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </div>
    </form>
  );
}
