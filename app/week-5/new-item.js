"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isEnabled, setIsEnabled] = useState(true);
  const [category, setCategory] = useState("Produce");

  const increment = () => {
    if (quantity != 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity != 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Added item: ${name}, quantity: ${quantity}, category: ${category}`);
    //reset form fields to initial state
    setName("");
    setQuantity(1);
    setCategory("Produce");
    setIsEnabled(true);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center">
      <div className="flex flex-col bg-slate-300 m-5 p-3 rounded-md">
        {/* item name */}
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Item name"
          required
          className="rounded-md p-3 outline-none"
        />
        <div className="flex flex-row">
          {/* quantity counter */}
          <div className="flex flex-row bg-white rounded-md p-3 mt-3 mb-3 mr-10">
            <p className="pr-5">{quantity}</p>
            <button
              type="button"
              className="bg-blue-500 px-2 mr-1 rounded-md w-8 hover:bg-blue-800 disabled:bg-gray-500 text-white"
              onClick={decrement}
              disabled={quantity <= 1}
            >
              -
            </button>
            <button
              type="button"
              className="bg-blue-500 px-2 rounded-md w-8  hover:bg-blue-800 disabled:bg-gray-500 text-white"
              onClick={increment}
              disabled={quantity >= 20}
            >
              +
            </button>
          </div>
          {/* category selection */}
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="rounded-md mt-3 mb-3"
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className=" bg-blue-500 hover:bg-blue-800 rounded-md p-2"
        >
          +
        </button>
      </div>
    </form>
  );
}
