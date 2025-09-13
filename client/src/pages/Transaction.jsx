import React from "react";
import { Routes, Route } from "react-router-dom";

import AddTransaction from "../components/AddTransaction";
import TransactionList from "../components/TransactionList";
import EditTransaction from "../components/EditTransaction";
import DeleteTransaction from "../components/DeleteTransaction";

const Transaction = () => {
  return (
    <Routes>
      <Route index element={<TransactionList />} />
      <Route path="add" element={<AddTransaction />} />
      <Route path=":id/edit" element={<EditTransaction />} />
      <Route path=":id/delete" element={<DeleteTransaction />} />
    </Routes>
  ); 
};

export default Transaction;
