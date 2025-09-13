import React, { useState } from "react";
import { useAppContext } from "../context/Appcontext";
import ProtectedRoute from "../components/ProtectedRoute";

const AddTransaction = () => {
  const { addTransaction, navigate } = useAppContext();
  const [form, setForm] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
  });

  const categories = [
    { _id: "1", name: "Personal" },
    { _id: "2", name: "Transport" },
    { _id: "3", name: "Shopping" },
    { _id: "4", name: "Others" },
  ];

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ok = await addTransaction(form);
    if (ok) {
      setForm({ title: "", amount: "", date: "", category: "" });
      navigate("/transactions");
    }
  };

  return (
    <ProtectedRoute>
      <div className="max-w-xl mx-auto mt-15 bg-white rounded-xl shadow p-6 mb-20">
        <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">
          Add Transaction
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
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
                <option key={c._id} value={c.name}>
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
            + Add Transaction
          </button>
        </form>
      </div>
    </ProtectedRoute>
  );
};

export default AddTransaction;
