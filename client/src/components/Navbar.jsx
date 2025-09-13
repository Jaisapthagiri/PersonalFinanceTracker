import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; 
import { useAppContext } from "../context/Appcontext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logoutUser, navigate } = useAppContext();

  const handleLogout = async () => {
    const ok = await logoutUser();
    if (ok) navigate("/");
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/transactions", label: "Transactions" },
    { to: "/categories", label: "Categories" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 lg:px-20 py-4">

        <NavLink to="/" className="text-2xl font-bold text-green-600 tracking-tight">
          💸 FinanceTracker
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-green-600"
                    : "text-gray-700 hover:text-green-600"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden md:flex">
          {!user ? (
            <button
              onClick={() => navigate("/login")}
              className="px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
            >
              Login
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-start px-6 py-4 gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block w-full py-2 text-gray-700 rounded hover:bg-gray-50 ${
                    isActive ? "text-green-600 font-medium" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {!user ? (
              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/login");
                }}
                className="mt-3 w-full px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
              >
                Login
              </button>
            ) : (
              <button
                onClick={() => {
                  setOpen(false);
                  handleLogout();
                }}
                className="mt-3 w-full px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
