const express = require("express");
const app = express();
const path = require("path");
const port = 3030;

app.use(express.static("public"));

app.get("/", (req,res) => res.sendFile(path.resolve(__dirname, "views/home.html")));
app.get("/registro", (req,res) => res.sendFile(path.resolve(__dirname, "views/registro.html")));
app.get("/login", (req,res) => res.sendFile(path.resolve(__dirname, "views/login.html")));

app.listen(port, () => console.log("Server is run in http://localhost:" +port));
