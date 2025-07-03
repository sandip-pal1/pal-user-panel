# pal-user-panel

# PAL User Panel

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Backend-lightgrey?logo=express)
![MySQL](https://img.shields.io/badge/Database-MySQL-blue?logo=mysql)
![EJS](https://img.shields.io/badge/View-Engine-EJS-yellow?logo=ejs)
![Made by Sandip Pal](https://img.shields.io/badge/Made%20by-Sandip%20Pal-blueviolet)

---

**PAL User Panel** is a simple, clean, and functional user management web application built with **Node.js**, **Express.js**, **EJS**, and **MySQL**.

It allows you to:
- ➕ Add new users
- 👁️ View all users
- ✏️ Edit usernames (with password check)
- ❌ Delete users (with username and password verification)
- 📊 View total user count on homepage

> 💡 Ideal for learning CRUD operations with EJS and Express.


---

## 📂 Project Structure


**PAL User Panel** is a simple and clean user management web app built with **Node.js**, **Express.js**, **EJS**, and **MySQL**.  
It allows you to:

- ➕ Add new users
- 👁️ View all users
- ✏️ Edit existing usernames (with password check)
- ❌ Delete users (with username and password verification)
- 📊 See total number of users on the homepage

This project is ideal for learning how to build CRUD apps using Express and EJS.

---

## 🚀 GitHub Repo

🔗 [https://github.com/sandip-pal1/pal-user-panel.git](https://github.com/sandip-pal1/pal-user-panel.git)

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** EJS Templates, HTML, CSS
- **Database:** MySQL
- **Extras:** [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker)

---

## 📁 Folder Structure

pal-user-panel/
├── views/ # EJS template files
│ ├── home.ejs
│ ├── new.ejs
│ ├── edit.ejs
│ ├── delete.ejs
│ └── showusers.ejs
├── public/ # Static assets like style.css
├── index.js # Main server file
├── package.json # Node dependencies
└── README.md # This file



---

## 💻 How to Run This Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/sandip-pal1/pal-user-panel.git
cd pal-user-panel
npm install

Set Up MySQL Database
Make sure MySQL is installed and running.
Create a database named delta_app:
CREATE DATABASE delta_app;


Then create the user table:
CREATE TABLE user (
  id VARCHAR(100) PRIMARY KEY,
  username VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(100)
);


4. Configure Database Connection
Open index.js and update this section with your own MySQL credentials:
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'your_mysql_password'
});


5. Start the Server
node index.js

6. Visit the App
Open your browser and go to:
http://localhost:8080

