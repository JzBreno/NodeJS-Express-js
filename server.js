const express = require('express')
const UsuarioRotas = require('./rotas/UsuariosRotas')
//instanciando o express na const app
const app = express()
//liberando o express receber json do insomnia
app.use(express.json())

//chamando metodos default
app.get('/', (request, response) => {
    return response.send("ola, eu sou o backend com nodejs + express js")
})

app.use(UsuarioRotas);

app.listen(3000, 'localhost', ()=>{
    console.log(`servidor em execucao http://localhost:3000`)
});