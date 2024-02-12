import React, { useState, useEffect } from "react";

const Breakdown = () => {
  const [categoryBreakdown, setCategoryBreakdown] = useState([]);

  useEffect(() => {
    // Fetch category breakdown data from backend
    fetch("http://localhost:5000/api/transactions/breakdown")
      .then((response) => response.json())
      .then((data) => {
        setCategoryBreakdown(data);
      })
      .catch((error) =>
        console.error("Error fetching category breakdown:", error)
      );
  }, []);

  return (
    <div>
      <h2>Breakdown</h2>
      <ul>
        {categoryBreakdown.map((category, index) => (
          <li key={index}>
            {category._id}: {category.totalAmount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breakdown;
