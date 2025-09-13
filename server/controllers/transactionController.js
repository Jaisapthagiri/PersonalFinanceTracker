import Transaction from "../models/Transaction.js";

export const createTransaction = async (req, res) => {
  try {
    const { title, amount, category } = req.body;

    if (!title || !amount || !category) {
      return res.json({ success: false, message: "All fields are required" });
    }

    const newTransaction = await Transaction.create({
      title,
      amount,
      category,
      user: req.user.id // use id, not _id
    });

    res.json({ success: true, transaction: newTransaction });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const getTransactions = async (req, res) => {
  try {
    const allTransactions = await Transaction.find({ user: req.user.id })
      .sort({ date: -1 });

    res.json({ success: true, transactions: allTransactions });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const updateTransaction = async (req, res) => {
  try {
    const { id, title, amount, category } = req.body;

    const updatedTransaction = await Transaction.findOneAndUpdate(
      { _id: id, user: req.user.id },
      { title, amount, category },
      { new: true }
    );

    if (!updatedTransaction) {
      return res.json({ success: false, message: "Transaction not found or not authorized" });
    }

    res.json({ success: true, transaction: updatedTransaction });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.body;

    const deletedTransaction = await Transaction.findOneAndDelete({ _id: id, user: req.user.id });

    if (!deletedTransaction) {
      return res.json({ success: false, message: "Transaction not found or not authorized" });
    }

    res.json({ success: true, message: "Deleted Successfully" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const getTransactionById = async (req, res) => {
  try {
    const { id } = req.params;

    const transaction = await Transaction.findOne({ _id: id, user: req.user.id });

    if (!transaction) {
      return res.json({ success: false, message: "Transaction not found" });
    }

    res.json({ success: true, transaction });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const getTransactionsByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    const transactions = await Transaction.find({ category, user: req.user.id });

    res.json({ success: true, transactions });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const getTransactionsSummary = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user.id });

    let totalIncome = 0;
    let totalExpense = 0;

    transactions.forEach(tx => {
      if (tx.amount > 0) totalIncome += tx.amount;
      else totalExpense += Math.abs(tx.amount);
    });

    const balance = totalIncome - totalExpense;

    res.json({
      success: true,
      summary: { totalIncome, totalExpense, balance, count: transactions.length }
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
