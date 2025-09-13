import React, { useState } from "react";
import { useAppContext } from "../context/Appcontext";
import { Wallet,Filter,IndianRupee,ListChecks,} from "lucide-react"; 

const Categories = () => {
  const { transactions } = useAppContext();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(transactions.map((t) => t.category))];

  const filteredTransactions =
    selectedCategory === "All"
      ? transactions
      : transactions.filter((t) => t.category === selectedCategory);

  const totalAmount = filteredTransactions.reduce(
    (sum, t) => sum + Number(t.amount),
    0
  );

  return (
    <div className="max-w-4xl mx-auto mt-15 mb-18 p-6">

      <div className="flex items-center gap-2 mb-6">
        <Filter className="text-green-600 w-6 h-6" />
        <h2 className="text-3xl font-bold text-gray-800">
          Transactions by Category
        </h2>
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setSelectedCategory(c)}
            className={`px-5 py-2 rounded-full transition-colors shadow-sm ${
              selectedCategory === c
                ? "bg-green-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 mb-8 flex items-center gap-3">
        <IndianRupee className="text-green-600 w-6 h-6" />
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Total Amount</h3>
          <p className="text-2xl font-bold text-green-700">
            ₹{totalAmount.toLocaleString()}
          </p>
        </div>
      </div>

      {filteredTransactions.length === 0 ? (
        <div className="text-center py-10 bg-white shadow rounded-xl">
          <ListChecks className="mx-auto text-gray-400 w-10 h-10 mb-2" />
          <p className="text-gray-500">
            No transactions found for{" "}
            <span className="font-semibold">{selectedCategory}</span>.
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredTransactions.map((t) => (
            <div
              key={t._id}
              className="bg-white shadow rounded-xl p-4 flex justify-between items-center hover:shadow-md transition"
            >
              <div>
                <p className="text-lg font-semibold text-gray-800">
                  {t.title}
                </p>
                <p className="text-sm text-gray-500">
                  Category:{" "}
                  <span className="font-medium text-gray-700">
                    {t.category}
                  </span>{" "}
                  | Date:{" "}
                  <span className="font-medium text-gray-700">
                    {new Date(t.date).toLocaleDateString()}
                  </span>
                </p>
              </div>
              <p className="text-xl font-bold text-green-700">
                ₹{Number(t.amount).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
