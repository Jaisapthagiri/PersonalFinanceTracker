import { useParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/Appcontext";

const DeleteTransaction = () => {
  const { id } = useParams();
  const { deleteTransaction, navigate } = useAppContext();

  const handleDelete = async () => {
    const ok = await deleteTransaction(id);
    if (ok) navigate("/transactions");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Delete Transaction</h1>
      <p>Are you sure you want to delete this transaction?</p>
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-4 py-2 rounded mt-4"
      >
        Confirm Delete
      </button>
    </div>
  );
};

export default DeleteTransaction;
