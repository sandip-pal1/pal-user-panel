# PAL User Panel


![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Backend-lightgrey?logo=express)
![MySQL](https://img.shields.io/badge/Database-MySQL-blue?logo=mysql)
![EJS](https://img.shields.io/badge/View--Engine-EJS-yellow)
![Made by Sandip Pal](https://img.shields.io/badge/Made%20by-Sandip%20Pal-blueviolet)


Project Description:
PAL User Panel is a simple, clean, and functional user management web application built with Node.js, Express.js, EJS, and MySQL. It allows users to add, view, edit, and delete users. It also displays the total number of users on the homepage. Ideal for learning CRUD operations.
GitHub Repository:
https://github.com/sandip-pal1/pal-user-panel.git
Tech Stack:
- Backend: Node.js, Express.js
- Frontend: EJS Templates, HTML, CSS
- Database: MySQL
- Extras: @faker-js/faker (for dummy data)
  
Project Folder Structure:
pal-user-panel/
├── views/              # EJS templates
│   ├── home.ejs
│   ├── new.ejs
│   ├── edit.ejs
│   ├── delete.ejs
│   └── showusers.ejs
├── public/             # Static assets (CSS)
├── index.js            # Main server file
├── package.json        # Node dependencies
└── README.md           # Project documentation
How to Run This Project Locally:
1. Clone the Repository:
```bash
git clone https://github.com/sandip-pal1/pal-user-panel.git
cd pal-user-panel
npm install
```
2. Set Up MySQL Database:
Make sure MySQL is installed and running.

```sql
CREATE DATABASE delta_app;

USE delta_app;

CREATE TABLE user (
  id VARCHAR(100) PRIMARY KEY,
  username VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(100)
);
```
3. Configure Database Connection:
Open index.js and update your MySQL credentials:

```js
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'your_mysql_password'
});
```
4. Start the Server:
```bash
node index.js
```
5. Visit the App:
Open your browser and go to:
http://localhost:8080
