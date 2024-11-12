"use client";
import { useEffect, useState } from "react";

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || []; //return empty array if no meals found
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async (ingredient) => {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  };

  useEffect(() => {
    loadMealIdeas(ingredient);
  }, [ingredient]);

  return (
    <main className="text-white p-14">
      <h1 className="text-xl font-bold">Meal Ideas</h1>
      {ingredient ? (
        <div>
          {meals.length > 0 ? (
            <div>
              <p>Here are some meal ideas using {ingredient}:</p>
              <ul>
                {meals.map((meal) => (
                  <li className=" bg-slate-800 w-96 my-1 p-1" key={meal.idMeal}>
                    <h2>{meal.strMeal}</h2>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No meal ideas found for {ingredient}</p>
          )}
        </div>
      ) : (
        <p>Select an item to see meal ideas</p>
      )}
    </main>
  );
}
