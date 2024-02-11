const express = require("express");
const router = express();
const Transaction = require("./models/Transaction");

// Retrieve all transactions
router.get("/transactions", async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// Add a transaction
router.post("/transactions", async (req, res) => {
  try {
    const { amount, category, vendor } = req.body;
    const newTransaction = new Transaction({ amount, category, vendor });
    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// Delete a transaction
router.delete("/transactions/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Transaction.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// Get breakdown of sum of transactions per category
router.get("/transactions/breakdown", async (req, res) => {
  try {
    const breakdown = await Transaction.aggregate([
      {
        $group: {
          _id: "$category",
          totalAmount: { $sum: "$amount" },
        },
      },
    ]);
    res.json(breakdown);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
