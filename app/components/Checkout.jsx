import React, { useState } from "react";
import product from "../libs/product";

const Checkout = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    setQuantity((prevState) => (prevState > 1 ? prevState - 1 : 1)); // Ensure quantity doesn't go below 1
  };

  const increaseQuantity = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const checkout = async () => {
    const data = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
    };

    try {
      const response = await fetch("/api/tokenizer", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const requestData = await response.json();
      window.snap.pay(requestData.token);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const generatePaymentLink = () => {
    alert("Generate Payment Link! 🔥");
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <button
            className="transition-all hover:opacity-75"
            onClick={decreaseQuantity}
          >
            ➖
          </button>

          <input
            type="number"
            id="quantity"
            value={quantity}
            className="h-10 w-16 text-black border-transparent text-center"
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />

          <button
            className="transition-all hover:opacity-75"
            onClick={increaseQuantity}
          >
            ➕
          </button>
        </div>
        <button
          className="rounded bg-indigo-500 p-4 text-sm font-medium transition hover:scale-105"
          onClick={checkout}
        >
          Checkout
        </button>
      </div>
      <button
        className="text-indigo-500 py-4 text-sm font-medium transition hover:scale-105"
        onClick={generatePaymentLink}
      >
        Create Payment Link
      </button>
    </>
  );
};

export default Checkout;
