"use client";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const { user } = useUserAuth();

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF])/g,
        ""
      )
      .split(",")[0] // Remove quantity information
      .trim(); // Trim any extra spaces

    setSelectedItemName(cleanedName);
  };

  return (
    <main className="bg-slate-900 flex min-h-screen">
      {user ? (
        <div className="flex">
          <div>
            <h1 className="text-3xl font-bold p-2 text-white">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
          <div>
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      ) : (
        <p className="text-white">
          You need to be signed in to view this page.
        </p>
      )}
    </main>
  );
}
