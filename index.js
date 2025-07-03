const { faker } = require('@faker-js/faker');
// Get the client
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");


app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended : true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'sandip'
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
     faker.internet.password(),
  ];
};

app.get("/", (req,res) =>{
  let q= "select count(*) from user";
  try{
connection.query(q, (err, result) => {
    if(err)throw err;
    let count = (result[0]["count(*)"]);
    res.render("home.ejs", {count});
});
}catch(err){
    console.log(err);
    res.send("some error");
}
});

app.get("/user" , (req,res) => {
  let q = "select * from user ";
  try{
connection.query(q, (err, users) => {
    if(err)throw err;
    
    res.render("showusers.ejs",{users});
});
}catch(err){
    console.log(err);
    res.send("some error");
}
});

//edit route
app.get("/user/:id/edit", (req,res) => {
  let {id} = req.params;
  let q = `select * from user where id='${id}'`;
  try{
connection.query(q, (err, result) => {
    if(err)throw err;
    let user = result[0];
    res.render("edit.ejs", {user});
});
}catch(err){
    console.log(err);
    res.send("some error");
}
});
 
//update route
app.patch("/user/:id", (req,res) => {
  let {id} = req.params;
  let{password: fromPass, username:newUsername} = req.body;
  let q = `select * from user where id='${id}'`;
  try{
connection.query(q, (err, result) => {
    if(err)throw err;
    let user = result[0];
    if(fromPass != user.password){
      res.send("Wromg password");
    }else{
      let q2 = `update user set username='${newUsername}' where id='${id}' `;
      connection.query(q2, (err,result) =>{
        if (err) throw err;
        res.redirect("/user");
      });
    }
    
});
}catch(err){
    console.log(err);
    res.send("some error");
}
});

//Add data
app.get("/user/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/user", (req, res) => {
  const { username, email, password } = req.body;
  const id = faker.string.uuid(); // generate unique ID

  const q = `INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)`;
  const values = [id, username, email, password];

  connection.query(q, values, (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Error inserting user");
    }
    res.redirect("/user");
  });
});

app.get("/user/:id/delete", (req, res) => {
  const { id } = req.params;
  const q = `SELECT * FROM user WHERE id = ?`;

  connection.query(q, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.send("Error fetching user");
    }
    if (result.length === 0) {
      return res.send("User not found");
    }

    const user = result[0];
    res.render("delete.ejs", { user });
  });
});

app.delete("/user/:id" , (req, res) => {
  let { id } = req.params;
  let{password: fromPass, username:newUsername} = req.body;
  let q = `select * from user where id='${id}'`;
  try{
connection.query(q, (err, result) => {
    if(err)throw err;
    let user = result[0];
    if(fromPass != user.password || newUsername != user.username){
      res.send("Wrong password or Username");
    }else{
      let q2 = `delete from user where id='${id}' `;
      connection.query(q2, (err,result) =>{
        if (err) throw err;
        res.redirect("/user");
      });
    }
    
});
}catch(err){
    console.log(err);
    res.send("some error");
}
});




app.listen("8080" , () =>{
    console.log("server is listening to port 8080");
});



//inserting new data
// let q ="insert into user (id, username, email, password) values ? ";
// let data = [];
// for (let i=0; i<100; i++){
//      data.push(getRandomUser()); // 100 data
// }

// connection.query(q, [data], (err, result) => {
//   if (err) {
//     console.error("Error inserting data:", err.message);
//   } else {
//     console.log("Successfully inserted rows:", result.affectedRows);
//   }
//   connection.end(); // Close connection inside callback
// });

// try{
// connection.query(q, [data], (err, result) => {
//     if(err)throw err;
//     console.log(result);
// });
// }catch(err){
//     console.log(err);
// }

//connection.end();//to close connection




//console.log(getRandomUser());