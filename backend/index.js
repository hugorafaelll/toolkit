// npm install -g nodemon

const express = require("express"); // iimportando o modulo express do node

const cors = require("cors"); // outra biblioteca de request http entre paginas

const products = require("./products");

const app = express(); // chamando o express para criar as rotas

app.use(express.json()); // para solicitar o texto em forato json
app.use(cors()); // dar acesso ao nodejs api na aplicação react

app.get("/products", (req, res) => {
  // criando caminho raiz
  res.send(products);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
