"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [isEnabled, setIsEnabled] = useState(true);

  const increment = () => {
    if (quantity != 20) {
      setQuantity(quantity + 1);
      setIsEnabled(true);
    } else {
      setIsEnabled(false);
    }
  };

  const decrement = () => {
    if (quantity != 1) {
      setQuantity(quantity - 1);
      setIsEnabled(true);
    } else {
      setIsEnabled(false);
    }
  };

  return (
    <div class="flex flex-row justify-center m-5">
      <p class="pr-5">{quantity}</p>
      <button
        class="bg-blue-500 px-2 mr-1 rounded-md w-8 hover:bg-blue-800 disabled:bg-gray-500 text-white"
        onClick={decrement}
        disabled={quantity <= 1}
      >
        -
      </button>
      <button
        class="bg-blue-500 px-2 rounded-md w-8  hover:bg-blue-800 disabled:bg-gray-500 text-white"
        onClick={increment}
        disabled={quantity >= 20}
      >
        +
      </button>
    </div>
  );
}
