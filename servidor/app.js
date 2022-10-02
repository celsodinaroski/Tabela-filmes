// bibliotecas externas
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");

export default api

// bibliotecas internas
const avaliacao = require("./routes/avaliacao.route.js");
const lista = require("./routes/lista.route.js");
const conteudo = require("./routes/conteudo.route.js");
const diretor = require("./routes/diretor.route.js");
const usuario = require("./routes/usuario.route.js");

// criação express
const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extendend: false}))
app.use("/api/avaliacao", avaliacao)
app.use("/api/lista", lista)
app.use("/api/conteudo", conteudo)
app.use("/api/diretor", diretor)
app.use("/api/usuario", usuario)


app.get("/site/html/home.html", function(req, res) {
    res.sendFile(__dirname + "/site/html/home.html");
});

app.get("/site/html/sobre.html", function(req, res) {
  res.sendFile(__dirname + "/site/html/sobre.html");
});

app.get("/site/html/cenas.html", function(req, res) {
  res.sendFile(__dirname + "/site/html/cenas.html");
});

app.get("/site/html/trailer.html", function(req, res) {
  res.sendFile(__dirname + "/site/html/trailer.html");
});

app.get("/site/html/contato.html", function(req, res) {
  res.sendFile(__dirname + "/site/html/contato.html");
});

app.get("/home.html", function(req, res) {
  res.sendFile(__dirname + "/site/html/home.html");
});

app.get("/sobre.html", function(req, res) {
  res.sendFile(__dirname + "/site/html/sobre.html");
});

app.get("/cenas.html", function(req, res) {
  res.sendFile(__dirname + "/site/html/cenas.html");
});

app.get("/trailer.html", function(req, res) {
  res.sendFile(__dirname + "/site/html/trailer.html");
});

app.get("/contato.html", function(req, res) {
  res.sendFile(__dirname + "/site/html/contato.html");
});

app.get("/CSS/estilo.css", function(req, res) {
  res.sendFile(__dirname + "/site/CSS/estilo.css");
});

app.get("/img/cena1.jpg", function(req, res) {
  res.sendFile(__dirname + "/site/HTML/img/cena1.jpg");
});

app.get("/img/cena2.jpg", function(req, res) {
  res.sendFile(__dirname + "/site/HTML/img/cena2.jpg");
});

app.get("/img/cena3.jpg", function(req, res) {
  res.sendFile(__dirname + "/site/HTML/img/cena3.jpg");
});

app.get("/img/cena4.jpg", function(req, res) {
  res.sendFile(__dirname + "/site/HTML/img/cena4.jpg");
});

app.get("/img/cena5.jpg", function(req, res) {
  res.sendFile(__dirname + "/site/HTML/img/cena5.jpg");
});

app.get("/img/cena6.jpg", function(req, res) {
  res.sendFile(__dirname + "/site/HTML/img/cena6.jpg");
});

app.get("/img/img-Felipe.jpg", function(req, res) {
  res.sendFile(__dirname + "/site/HTML/img/img-Felipe.jpg");
});

app.get("/img/img-Adriano.jpg", function(req, res) {
  res.sendFile(__dirname + "/site/HTML/img/img-Adriano.jpg");
});

app.get("/img/img-Guilherme.gif", function(req, res) {
  res.sendFile(__dirname + "/site/HTML/img/img-Guilherme.gif");
});

app.get("/img/img-Celso.gif", function(req, res) {
  res.sendFile(__dirname + "/site/HTML/img/img-Celso.gif");
});

app.get("/img/star0.png", function(req, res) {
  res.sendFile(__dirname + "/site/HTML/img/star0.png");
});

app.get("/img/star1.png", function(req, res) {
  res.sendFile(__dirname + "/site/HTML/img/star1.png");
});

app.get("/img/star1.png", function(req, res) {
  res.sendFile(__dirname + "/img/star1.png");
});

app.get("/img/capa_filme.jpg", function(req, res) {
  res.sendFile(__dirname + "/site/HTML/img/capa_filme.jpg");
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/site/html/home.html");
});

app.get("/site/CSS/estilo.css", function(req, res) {
  res.sendFile(__dirname + "/site/CSS/estilo.css");
});

app.get("/site/CSS/cssformulario.css", function(req, res) {
  res.sendFile(__dirname + "/site/CSS/cssformulario.css");
});

app.get("/site/HTML/img/cena1.jpg", function(req, res) {
  res.sendFile(__dirname + "/site/HTML/img/cena1.jpg");
});

app.get("/site/HTML/img/cena2.jpg", function(req, res) {
  res.sendFile(__dirname + "/site/HTML/img/cena2.jpg");
});

app.get("/site/HTML/img/cena3.jpg", function(req, res) {
  res.sendFile(__dirname + "/site/HTML/img/cena3.jpg");
});

app.get("/site/HTML/img/cena4.jpg", function(req, res) {
  res.sendFile(__dirname + "/site/HTML/img/cena4.jpg");
});

app.get("/site/HTML/img/cena5.jpg", function(req, res) {
  res.sendFile(__dirname + "/site/HTML/img/cena5.jpg");
});

app.get("/site/HTML/img/cena6.jpg", function(req, res) {
  res.sendFile(__dirname + "/site/HTML/img/cena6.jpg");
});

app.get("/site/HTML/img/img-Felipe.jpg", function(req, res) {
  res.sendFile(__dirname + "/site/HTML/img/img-Felipe.jpg");
});

app.get("/site/HTML/img/img-Adriano.jpg", function(req, res) {
  res.sendFile(__dirname + "/site/HTML/img/img-Adriano.jpg");
});

app.get("/site/HTML/img/img-Guilherme.gif", function(req, res) {
  res.sendFile(__dirname + "/site/HTML/img/img-Guilherme.gif");
});

app.get("/site/HTML/img/img-Celso.gif", function(req, res) {
  res.sendFile(__dirname + "/site/HTML/img/img-Celso.gif");
});

app.get("/site/HTML/img/star0.png", function(req, res) {
  res.sendFile(__dirname + "/site/HTML/img/star0.png");
});

app.get("/site/HTML/img/star1.png", function(req, res) {
  res.sendFile(__dirname + "/site/HTML/img/star1.png");
});

app.get("/site/HTML/img/capa_filme.jpg", function(req, res) {
  res.sendFile(__dirname + "/site/HTML/img/capa_filme.jpg");
});

app.get("/site/JS/star.js", function(req, res) {
  res.sendFile(__dirname + "/site/JS/star.js");
});

app.get("/JS/star.js", function(req, res) {
  res.sendFile(__dirname + "/site/JS/star.js");
});

// inicia expresss
app.listen(5000);