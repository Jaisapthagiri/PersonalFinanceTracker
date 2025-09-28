import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/Appcontext";

const TransactionList = () => {
  const { transactions, fetchTransactions, deleteTransaction } = useAppContext();

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-6 mt-15 mb-70">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-green-600">Transactions</h2>
        <Link
          to="/transactions/add"
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow transition-colors"
        >
          + Add Transaction
        </Link>
      </div>

      {transactions.length === 0 ? (
        <p className="text-gray-500 text-center py-10">
          No transactions found. Start by adding one!
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-green-50 text-green-700 text-left">
                <th className="px-6 py-3 font-semibold">Title</th>
                <th className="px-6 py-3 font-semibold">Amount</th>
                <th className="px-6 py-3 font-semibold">Date</th>
                <th className="px-6 py-3 font-semibold">Category</th>
                <th className="px-6 py-3 font-semibold text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t, index) => (
                <tr
                  key={t._id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-green-50 transition-colors`}
                >
                  <td className="px-6 py-4 text-gray-700">{t.title}</td>
                  <td className="px-6 py-4 text-gray-700 font-medium">
                    ₹{t.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {new Date(t.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{t.category}</td>
                  <td className="px-6 py-4 text-center">
                    <Link
                      to={`/transactions/${t._id}/edit`}
                      className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm mr-2 transition-colors shadow"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteTransaction(t._id)}
                      className="inline-block bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg text-sm transition-colors shadow"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TransactionList;
