import express from 'express'
import { createTransaction, updateTransaction, deleteTransaction, getTransactions, getTransactionById, getTransactionsByCategory, getTransactionsSummary } from '../controllers/transactionController.js';
import authUser from '../middlewares/authUser.js';

const transactionRouter = express.Router();

transactionRouter.post('/create', authUser, createTransaction);
transactionRouter.get('/get', authUser, getTransactions);
transactionRouter.post('/update', authUser, updateTransaction);
transactionRouter.post('/delete', authUser, deleteTransaction);
transactionRouter.get('/summary', authUser, getTransactionsSummary);
transactionRouter.get('/:id', authUser, getTransactionById);
transactionRouter.get('/category/:category', authUser, getTransactionsByCategory);

export default transactionRouter;