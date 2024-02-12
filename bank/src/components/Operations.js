import React, { useState } from "react";

const Operations = () => {
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [vendor, setVendor] = useState("");

  const handleAddTransaction = () => {
    const newTransaction = {
      amount: parseInt(amount),
      category,
      vendor,
    };

    fetch("http://localhost:5000/api/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Transaction added:", data);
        // Redirect to Transactions route after adding transaction
        window.location.href = "/";
      })
      .catch((error) => console.error("Error adding transaction:", error));
  };

  return (
    <div>
      <h2>Add Transaction</h2>
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <br />
      <label>
        Category:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      <br />
      <label>
        Vendor:
        <input
          type="text"
          value={vendor}
          onChange={(e) => setVendor(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleAddTransaction}>Add Transaction</button>
    </div>
  );
};

export default Operations;
