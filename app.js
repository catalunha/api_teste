const express = require('express');
const app = express();
const morgan = require('morgan');

//config
app.use(express.urlencoded({extended:true}));// apenas dados simples
app.use(express.json());// json de entrada
app.use((req,res,next)=>{
  // res.header('Access-Control-allow-Origin','https://sitex.com.br')//permite acesso apenas do https://sitex.com.br
  res.header('Access-Control-allow-Origin','*');//permite acesso de qq um 
  res.header('Access-Control-Allow-Header','Origin,X-Requested-With,Content-Type,Accept,Authorization');
  if(req.method ==='OPTIONS'){
    res.header('Access-Control-allow-Methods','GET,POST,PUT,PATCH,DELETE');
    return res.status(200).send({

    });
  }
  next();
})
// Req Rotas
const routerTest = require('./routes/test');

// Rotas
app.use(morgan('dev'));

app.use('/test',routerTest);


// app.use('/',(req,res,next)=>{
//   res.status(200).send({
//     msg:'Server Express Ok...'
//   });
// });

//Quanto nao encontra rota entra aqui.
app.use((req,res,next)=>{
  const erro = new Error('Rota não encontrada');
  erro.status= 404;
  next(erro);
});
app.use((error,req,res,next)=>{
  res.status(error.status || 500);
  return res.send({
    erro:{
      msg: error.message
    }
  });
});
module.exports = app;