import { useState, useEffect } from "react";
import { useAppContext } from "../context/Appcontext";

const TransactionForm = ({ transaction, categories = [] }) => {
  const { addTransaction, updateTransaction, navigate } = useAppContext();

  const [form, setForm] = useState({
    title: transaction?.title || "",
    amount: transaction?.amount || "",
    date: transaction?.date?.split("T")[0] || "",
    category: transaction?.category?._id || transaction?.category || "",
  });

  // Prefill when editing
  useEffect(() => {
    if (transaction) {
      setForm({
        title: transaction.title || "",
        amount: transaction.amount || "",
        date: transaction.date ? transaction.date.split("T")[0] : "",
        category: transaction.category?._id || transaction.category || "",
      });
    }
  }, [transaction]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let ok;
    if (transaction) {
      ok = await updateTransaction(transaction._id, form);
    } else {
      ok = await addTransaction(form);
    }
    if (ok) navigate("/transactions");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Enter transaction title"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
      </div>

      {/* Amount */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Amount (₹)
        </label>
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleChange}
          placeholder="Enter amount"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
      </div>

      {/* Date */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Date
        </label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        >
          <option value="">Select Category</option>
          {categories.map((c) => (
            <option key={c._id} value={c._id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="mt-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition-colors"
      >
        {transaction ? "Update Transaction" : "+ Add Transaction"}
      </button>
    </form>
  );
};

export default TransactionForm;
