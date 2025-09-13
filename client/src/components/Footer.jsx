import React from "react";
import { NavLink } from "react-router-dom";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { text: "Home", url: "/" },
      { text: "Transactions", url: "/transactions" },
      { text: "Categories", url: "/categories" },
    ],
  },
  {
    title: "Resources",
    links: [
      { text: "Blog", url: "#" },
      { text: "Help Center", url: "#" },
      { text: "Privacy Policy", url: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-24 bg-gray-900 text-gray-300 m-2">

      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-green-600">

        <div className="flex flex-col max-w-[400px]">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Finance Tracker
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Track your expenses, plan budgets, and save smarter with ease. Your
            personal finance companion.
          </p>
        </div>

        <div className="flex flex-wrap justify-between w-full md:w-[50%] gap-8">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-green-400 md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul className="text-sm space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <NavLink
                      to={link.url}
                      className="hover:text-green-300 transition-colors"
                    >
                      {link.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col max-w-sm">
          <h3 className="text-green-400 font-semibold mb-4 text-base">
            Stay Updated
          </h3>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            Join our newsletter for updates, tips, and money-saving advice.
          </p>
          <form className="flex w-full">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l-md focus:outline-none text-white  border border-gray-700"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-md font-semibold transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <p className="py-4 text-center text-sm md:text-base text-gray-400 border-t border-green-600">
        © {new Date().getFullYear()} Personal Finance Tracker. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
