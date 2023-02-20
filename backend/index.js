const express = require("express");

const cors = require("cors");

const app = express(); // chama o app para usar diferentes metodos do express

app.use(express.json());
app.use(cors()); // dar acesso ao nodejs api na aplicação react

app.get("/", (req, res) => {
  res.send("Bem vindo ao online API ...");
});

app.listen(5000, console.log("Server running on port 5000"));
