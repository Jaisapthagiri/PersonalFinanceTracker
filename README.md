# 💰 Personal Finance Tracker

A full-featured **Personal Finance Tracker** built with the **MERN Stack** and styled using **Tailwind CSS v4**.
Users can manage their finances by adding, editing, deleting, and filtering transactions by category.

---

## 🚀 Features

### User

* Register and login
* Add new transactions (income or expense)
* Edit or delete existing transactions
* Filter transactions by category
* View transaction history

---

## 🛠️ Tech Stack

* **Frontend:** React, Tailwind CSS v4
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Other:** JWT (authentication)

---

## 🎨 Frontend Design (Prebuilt UI)

The frontend uses **prebuilt UI components** for faster development and a consistent, clean interface. These components include forms, buttons, tables, modals, and navigation elements.

**Benefits**

* Rapid development and prototyping
* Clean, modern, and responsive UI
* Consistent design across pages
* Easy customization when needed

---

## ⚙️ Installation & Setup

### 1) Install dependencies

**Frontend**

```bash
cd client
npm install
```

**Backend**

```bash
cd server
npm install
```

### 2) Configure environment variables

Create a `.env` file in the **server** folder:

```bash
MONGO_URI=
JWT_SECRET=
NODE_ENV=development
```

Create a `.env` (or `.env.local`) in the **client** folder:

```bash
VITE_BACKEND_URL=
```

> ⚠️ Make sure to provide valid credentials for MongoDB and JWT.
> Without these, the app will not run properly.

### 3) Run the project

**Frontend**

```bash
cd client
npm run dev
# App runs at http://localhost:5173 by default
```

**Backend**

```bash
cd server
npm run server
```

---

## 📡 REST API Endpoints

### User

```
POST   /api/user/register    → Register User
POST   /api/user/login       → Login User
GET    /api/user/is-auth     → Verify User Auth
POST   /api/user/logout      → Logout User
```

### Transactions

```
POST    /api/transaction/add           → Add Transaction
GET     /api/transaction/list          → Get All Transactions
GET     /api/transaction/category/:id  → Get Transactions by Category
PUT     /api/transaction/edit/:id      → Edit Transaction
DELETE  /api/transaction/delete/:id    → Delete Transaction
```

---

## 📦 Libraries Used

### Frontend

* `react` – UI library
* `react-dom` – DOM rendering
* `tailwindcss` – Utility-first CSS framework
* `@tailwindcss/vite` – Tailwind + Vite integration
* `react-router-dom` – Client-side routing
* `axios` – HTTP requests
* `react-hot-toast` – Notifications
* `lucide-react` – Icons

### Backend

* `express` – Web framework
* `mongoose` – MongoDB ODM
* `dotenv` – Environment variables
* `jsonwebtoken` – JWT auth
* `bcryptjs` – Password hashing
* `cors` – Cross-origin requests
* `cookie-parser` – Parse cookies

---

## 🤝 Contributing

Contributions are welcome!
Fork the repo and open a pull request with your improvements.

---

## 📜 License

This project is licensed under the **MIT License**.

---