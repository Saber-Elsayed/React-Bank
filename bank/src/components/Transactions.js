import React, { useState, useEffect } from "react";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    // Fetch transactions data from backend
    fetch("http://localhost:5000/api/transactions")
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
        // Calculate balance
        const totalBalance = data.reduce(
          (acc, transaction) => acc + transaction.amount,
          0
        );
        setBalance(totalBalance);
      })
      .catch((error) => console.error("Error fetching transactions:", error));
  }, []);

  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li
            key={index}
            style={{ color: transaction.amount >= 0 ? "green" : "red" }}
          >
            {transaction.vendor} - {transaction.amount}
          </li>
        ))}
      </ul>
      <h3>
        Balance:{" "}
        <span style={{ color: balance >= 500 ? "green" : "red" }}>
          {balance}
        </span>
      </h3>
    </div>
  );
};

export default Transactions;
