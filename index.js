const express = require('express');
const bodyparser = require('body-parser');
const app = express();

//criação middleware
/*const meu_middleware = function(req, res, next){
  console.log("Executando middleware");
  next();
}

const meu_middleware_2 = function(req, res, next){
  console.log("Executando outro middleware");
  next();
}

//utilizando o middleware
app.use(meu_middleware);
app.use(meu_middleware_2);


let get_request_time = function(req,res,next){
  let tempo_atual = Date.now();
  let hoje = new Date(tempo_atual);
  req.request_time = hoje.toUTCString();
  next();
}

app.use(get_request_time);
app.get('/', (req, res) => {
  res.send("Olá. Você acessou em " + req.request_time);
  console.log("estou sendo chamado na rota, após o midleware");
});


app.use('/tempo', function (req, res, next){
  let tempo_atual = Date.now();
  let hoje = new Date(tempo_atual);
  req.request_time = hoje.toUTCString();
  next();

});

app.get('/tempo', (req, res) => {
  res.send("Estou no tempo")
});

app.get('/', (req, res) => {
  res.send("Estou no endereço raiz")
;})


app.use('/', function(req, res, next){
  console.log("Essa é a página de inicio");
  next();
})

app.get('/', (req, res, next) => {
  res.send("esse é o meio");
  next();
});

app.use('/',function(req, res){
  console.log("Você chegou ao fim");

});

*/

//middlere raiz

app.get('/', (req, res, next) => {
  res.send("Pagina raiz, acesse /contato para ir ao formulário de contato");
  next();
});




app.use(bodyparser.urlencoded({extended: false}));
app.use('/contato', express.static(__dirname + '/public/contato'));

app.post('/contato', (req, res) => {
  console.log("Nome:" + req.body.nome);
  console.log("Email:" + req.body.email);
  console.log("Msg:" + req.body.msg);

  res.redirect('/');
});

app.get('*', (req, res) => {
  res.send("Link inválido: 404") // resposta depois que o usuário acessa o sistema
});


app.listen(3000, () => console.log("Servidor escutando na porta 3000"))