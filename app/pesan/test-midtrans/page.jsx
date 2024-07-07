"use client";
import React, { useEffect, useState } from "react";

const page = () => {
  const [transactions, setTransaction] = useState([]);

  const fetchTransactions = async () => {
    const response = await fetch("/api/transaction");
    const data = await response.json();
    setTransaction(data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  console.log(transactions);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Transaksi</h1>
      <ul className="space-y-2">
        {transactions.map((transaction) => (
          <li
            key={transaction.order_id}
            className="bg-gray-100 p-4 rounded shadow"
          >
            <div className="text-lg font-medium">{transaction.order_id}</div>
            <div className="text-sm">
              {transaction.gross_amount} {transaction.currency}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
