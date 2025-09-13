import React from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Transaction from "./pages/Transaction";
import Categories from "./pages/Categories";
import Footer from "./components/Footer";

const App = () => {
  return (
    // pt-16 offsets the fixed navbar
    <div className="min-h-screen bg-gray-50 text-gray-700 pt-16 flex flex-col">
      <Navbar />
      <Toaster />

      {/* main content area */}
      <div className="flex-1 px-6 md:px-16 lg:px-24 xl:px-32 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/transactions/*"
            element={
              <ProtectedRoute>
                <Transaction />
              </ProtectedRoute>
            }
          />

          <Route
            path="/categories"
            element={
              <ProtectedRoute>
                <Categories />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
