// npm install -g nodemon

const express = require("express"); // iimportando o modulo express do node

const cors = require("cors"); // outra biblioteca de request http entre paginas

const app = express(); // chamando o express para criar as rotas

app.use(express.json()); // para solicitar o texto em forato json
app.use(cors()); // dar acesso ao nodejs api na aplicação react

app.get("/", (req, res) => {
  // criando caminho raiz
  res.send("Bem vindo ao online API ...");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
