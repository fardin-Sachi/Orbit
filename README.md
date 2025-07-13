# 📚 Orbit - Online Bookstore

Orbit is a full-stack online bookstore web application that allows users to browse, view, and manage book purchases. Built with **React.js**, **Node.js**, **Express.js**, **MongoDB**, and **raw CSS**, it supports user authentication via **OAuth**, shopping cart functionality, and dynamic product views.

> 🔒 Note: Payment integration is not included in this version.

---
<!--
## 🚀 Live Demo

- 🔗 [Visit Orbit (if hosted)](https://your-deployment-link.com)  
  *(Replace with actual deployed link if available)*

--- -->

## 🧰 Tech Stack

- 🖼️ **Frontend**: React.js
- 🛠️ **Backend**: Node.js, Express.js
- 💾 **Database**: MongoDB (MongoDB Atlas)
- 🔐 **Authentication**: OAuth (Google or other provider)

---

## ✨ Features

- 🏠 **Homepage** with featured books
- 🔍 **Product Detail Page** for each book
- 🛒 **Shopping Cart** to manage selected books
- 👤 **User Authentication** using OAuth
- 📦 **Buy Now** functionality (no payment integration yet)
<!-- - 📱 Responsive and clean layout using raw CSS -->

---

## 📁 Project Structure

- /client # React frontend
- /client/public - Public Assets
- /client/src - React pages and components
- /client/src/comp - Reusable components
- /server - Express backend
- /server/index.js - Index
- /server/db_models - Database Schemas
- /server/routes - Admin and User Routes

  
---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/fardin-Sachi/Orbit.git
cd Orbit
```

2. Setup the Backend

```bash
cd server
npm install
npm run dev
```

3. Setup the Frontend
```base
cd ..
cd client
npm install
npm start
```

4. Open in Browser
http://localhost:3000 – Frontend

http://localhost:5000 – Backend API

### 📦 Environment Variables

```bash
MONGODB_URI=your_mongodb_connection_string
OAUTH_CLIENT_ID=your_oauth_client_id
OAUTH_CLIENT_SECRET=your_oauth_client_secret
SESSION_SECRET=your_secret_key
```

### Features

- Allows users to browse and view books.
- Supports user authentication.
- Shopping cart functionality.
- Dynamic product view.

### 📌 Future Improvements
- 💳 Integrate a payment gateway (e.g., Stripe)
- 📝 Add book reviews and ratings
- 📦 Order tracking and order history

### 📄 License
MIT License


Feel free to fork the repo or open an issue.
