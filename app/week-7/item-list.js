"use client";
import Item from "./item";
import { useState } from "react";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedList = [...items].sort((a, b) => {
    if (sortBy == "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy == "category") {
      return a.category.localeCompare(b.category);
    }
  });

  const groupByCategory = () => {
    const grouped = items.reduce(
      (acc, item) => {
        const category = item.category;

        //check if category exist
        if (!acc[category]) {
          // if it doesn't - creating an array for that category
          acc[category] = [];
        }

        //adding item to specified category
        acc[category].push(item);

        return acc;
      },
      //initial acc value
      {}
    );

    //returns an array of the different categories sorted alphabetically
    return Object.keys(grouped)
      .sort()
      .map((category) => ({
        category,
        //returning the items (in their own categories) and sort the items alphabetically
        items: grouped[category].sort((a, b) => a.name.localeCompare(b.name)),
      }));
  };

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
        <button
          onClick={() => setSortBy("grouped")}
          className={`${sortBy === "grouped" ? "bg-blue-500" : "bg-slate-500"}
          p-3 rounded-md `}
        >
          Group by Category
        </button>
      </div>
      {/* checking if its grouped by category */}
      {sortBy === "grouped" ? (
        // returning the grouped items
        groupByCategory().map((group) => (
          <div key={group.category}>
            <h2 className="text-2xl m-4 text-white capitalize">
              {group.category}
            </h2>
            <ul>
              {group.items.map((item) => (
                <Item key={item.id} {...item} />
              ))}
            </ul>
          </div>
        ))
      ) : (
        // returning normal style if not grouped
        <ul>
          {sortedList.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </ul>
      )}
    </div>
  );
}
