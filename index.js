const express = require('express');

// responsavel por direcionar as pastas
const path = require("path");
const routes = require("./routes/routes");

const app = express();
const port = 3000;

/* informa ao back-end que estamos utilizando o formato de arquivo ejs */
app.set("view engine", "ejs");
/* junta a pasta principal com a public 
isso e para funcionar a renderização dos arquivos css e js no index.ejs*/
app.use(express.static(path.join(__dirname,"public")));
app.use(routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});