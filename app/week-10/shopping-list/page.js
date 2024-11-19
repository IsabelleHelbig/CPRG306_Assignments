"use client";
import NewItem from "./new-item";
import ItemList from "./item-list";
import { useState, useEffect } from "react";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = async (item) => {
    const newItemId = await addItem(user.uid, item);
    const newItem = { id: newItemId, ...item };
    setItems((prevItems) => [...prevItems, newItem]);
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

  useEffect(() => {
    if (user?.uid) {
      const loadItems = async () => {
        // Fetch the shopping list items for the current user
        const items = await getItems(user.uid);
        // Update the state with the fetched items
        setItems(items);
      };
      loadItems();
    }
  }, [user?.uid]);

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
