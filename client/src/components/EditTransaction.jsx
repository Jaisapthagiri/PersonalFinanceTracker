import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TransactionForm from "./TransactionForm";
import { useAppContext } from "../context/Appcontext";
import Loading from "./Loading";

const EditTransaction = () => {
  const { id } = useParams();
  const { fetchTransactionById } = useAppContext();
  const [transaction, setTransaction] = useState(null);

  const categories = [
    { _id: "1", name: "Personal" },
    { _id: "2", name: "Transport" },
    { _id: "3", name: "Shopping" },
    { _id: "4", name: "Others" },
  ];

  useEffect(() => {
    const load = async () => {
      const res = await fetchTransactionById(id);
      if (res) setTransaction(res);
    };
    load();
  }, [id, fetchTransactionById]);

  if (!transaction)
    return (
      <Loading />
    );

  return (
    <div className="max-w-xl mx-auto bg-white mt-15 rounded-xl shadow p-6 mb-20">
      <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">
        Edit Transaction
      </h1>
      <TransactionForm transaction={transaction} categories={categories} />
    </div>
  );
};

export default EditTransaction;
