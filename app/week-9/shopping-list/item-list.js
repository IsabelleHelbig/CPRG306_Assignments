"use client";
import Item from "./item";
import { useState } from "react";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedList = [...items].sort((a, b) => {
    if (sortBy == "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy == "category") {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div>
      <div className="text-white ml-4 space-x-4">
        <button
          onClick={() => setSortBy("name")}
          className={`${
            sortBy === "name" ? "bg-blue-500" : "bg-slate-500"
          } p-3 rounded-md`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`${sortBy === "category" ? "bg-blue-500" : "bg-slate-500"}
          p-3 rounded-md `}
        >
          Category
        </button>
      </div>
      <ul>
        {sortedList.map((item) => (
          <Item key={item.id} {...item} onSelect={() => onItemSelect(item)} />
        ))}
      </ul>
    </div>
  );
}
