const mongoose = require("mongoose");

// Define transaction schema
const transactionSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  vendor: {
    type: String,
    required: true,
  },
});

// Create Transaction model
const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
