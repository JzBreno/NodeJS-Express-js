//importando modulo express
const express = require('express');
//instanciando objeto apartir do modulo express
const UsuarioRotas = express.Router();
//importando classe Usuarios Controller
const UsuariosController = require('../controllers/UsuariosController')
//instanciando objeto Usuarios Controller apartir da classe importada
const usuariosController = new UsuariosController;
//CRUD
//nessas rotas usamos o express para simplificar nossas rotas

UsuarioRotas.get('/users', usuariosController.listar);//essa requisicao(callback) retona uma request e uma response
 
UsuarioRotas.post('/users', usuariosController.criar);//essa requisicao(callback) retona uma request e uma response

UsuarioRotas.put('/users', usuariosController.atualizar);//essa requisicao(callback) retona uma request e uma response

UsuarioRotas.delete('/users', (request, response)=>{
    return response.status(200).send("Produto Deletado")
})








module.exports =  UsuarioRotas;