import React from "react";
import { useAppContext } from "../context/Appcontext";

const Home = () => {
  const { navigate } = useAppContext();

  const handleClick = () => {
    navigate("/transactions");
  };

  return (

    <div className="min-h-screen bg-gray-50 flex flex-col overflow-x-hidden mt-10">

      <section className="relative bg-gradient-to-r from-green-500 to-emerald-600 text-white py-16 px-6 lg:px-20 rounded-2xl mx-4 lg:mx-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Track Your <span className="text-yellow-300">Expenses</span> &
              Save Smarter
            </h1>
            <p className="mt-4 text-lg lg:text-xl text-gray-100">
              Manage your personal finances effortlessly with real-time
              insights, reports, and budgeting tools.
            </p>
            <button
              onClick={handleClick}
              className="mt-6 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-xl shadow hover:bg-yellow-300 transition"
            >
              Get Started
            </button>
          </div>

          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
              alt="Finance Tracking"
              className="rounded-2xl shadow-lg w-full h-auto object-cover max-w-full"
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto  py-16 px-6 lg:px-20 grid md:grid-cols-3 gap-10">
        <div className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135673.png"
            alt="Track"
            className="w-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Track Transactions</h3>
          <p className="text-gray-600">
            Easily record your income and expenses with detailed categories.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2331/2331947.png"
            alt="Report"
            className="w-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">View Reports</h3>
          <p className="text-gray-600">
            Get insightful charts and reports to understand your spending.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3313/3313564.png"
            alt="Save Money"
            className="w-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Save Smarter</h3>
          <p className="text-gray-600">
            Set budgets and savings goals to achieve financial freedom.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
            alt="Budget Planning"
            className="rounded-2xl shadow-lg w-full h-auto object-cover max-w-full"
          />
        </div>
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-800">
            Smarter <span className="text-green-600">Budget Planning</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Create personalized budgets and track your progress with ease.
            Our intuitive tools help you plan, adjust, and stay on target.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6 lg:px-20 flex flex-col lg:flex-row-reverse items-center gap-10">
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
            alt="Secure and Private"
            className="rounded-2xl shadow-lg w-full h-auto object-cover max-w-full"
          />
        </div>
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-800">
            Your Data <span className="text-green-600">Secure & Private</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            We prioritize your privacy. All your financial data is encrypted and
            safely stored — you’re always in control.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
