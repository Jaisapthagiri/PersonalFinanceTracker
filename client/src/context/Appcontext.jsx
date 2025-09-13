import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [loadingUser, setLoadingUser] = useState(true);

  const fetchUser = async () => {
    setLoadingUser(true);
    try {
      const { data } = await axios.get("/api/user/is-auth", { withCredentials: true });
      if (data?.success) setUser(data.user);
      else setUser(null);
    } catch (err) {
      setUser(null);
    } finally {
      setLoadingUser(false);
    }
  };

  const registerUser = async (formData) => {
    try {
      const { data } = await axios.post("/api/user/register", formData, { withCredentials: true });
      if (data.success) {
        toast.success("Registered Successfully — please login");
        setUser(null);
        setShowUserLogin(true);
        return true;
      } else {
        toast.error(data.message);
        return false;
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
      return false;
    }
  };

  const loginUser = async (credentials) => {
    try {
      const { data } = await axios.post("/api/user/login", credentials, { withCredentials: true });
      if (data.success) {
        setUser(data.user);
        setShowUserLogin(false);
        toast.success("Login Successful");
        navigate("/");
        return true;
      } else {
        toast.error(data.message);
        return false;
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
      return false;
    }
  };

  const logoutUser = async () => {
    try {
      const { data } = await axios.get("/api/user/logout", { withCredentials: true });
      if (data.success) {
        setUser(null);
        setShowUserLogin(true);
        toast.success("Logged Out");
        return true;
      } else {
        toast.error(data.message || "Logout failed");
        return false;
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
      return false;
    }
  };

  const addTransaction = async (formData) => {
    try {
      const { data } = await axios.post("/api/transaction/create", formData);
      if (data.success) {
        setTransactions((prev) => [...prev, data.transaction]);
        toast.success("Transaction Added");
        return true;
      } else {
        toast.error(data.message);
        return false;
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
      return false;
    }
  };

  const updateTransaction = async (id, formData) => {
    try {
      const { data } = await axios.post("/api/transaction/update", { id, ...formData });
      if (data.success) {
        setTransactions((prev) =>
          prev.map((t) => (t._id === id ? data.transaction : t))
        );
        toast.success("Transaction Updated");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const fetchTransactions = async () => {
    try {
      const { data } = await axios.get("/api/transaction/get");
      if (data.success) {
        setTransactions(data.transactions || []);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const deleteTransaction = async (id) => {
    try {
      const { data } = await axios.post("/api/transaction/delete", { id });
      if (data.success) {
        setTransactions((prev) => prev.filter((t) => t._id !== id));
        toast.success("Transaction Deleted");
        return true;
      } else {
        toast.error(data.message);
        return false;
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
      return false;
    }
  };

  const fetchTransactionById = async (id) => {
    try {
      const { data } = await axios.get(`/api/transaction/${id}`);
      if (data.success) {
        return data.transaction;
      } else {
        toast.error(data.message);
        return null;
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
      return null;
    }
  };

  const fetchTransactionSummary = async () => {
    try {
      const { data } = await axios.get("/api/transaction/summary");
      if (data.success) {
        return data.summary;
      } else {
        toast.error(data.message);
        return { totalIncome: 0, totalExpense: 0, balance: 0, count: 0 };
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
      return { totalIncome: 0, totalExpense: 0, balance: 0, count: 0 };
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if (user) {
      fetchTransactions();
    } else {
      setTransactions([]);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      fetchTransactions();
    }
  }, [user]);

  const value = {
    navigate, axios, user, setUser, loginUser, registerUser, logoutUser,
    transactions, addTransaction, updateTransaction,
    deleteTransaction, fetchTransactions, fetchTransactionById,
    fetchTransactionSummary,
    showUserLogin, setShowUserLogin, loadingUser, setLoadingUser
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
