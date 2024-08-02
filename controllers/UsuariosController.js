const UsuarioModel = require('../models/UsuariosModels');

class UsuarioController{
    //controller recebe req,resp chama listar de usuarios e retorna a resposta com os dados de model
    listar(resquest, response){
        const dados =  UsuarioModel.listar();
        return response.json(dados);
    }

    ConsultarPorID(resquest, response){
        
        return UsuarioModel.ConsultarPorID();
    }
    //chamando o criar de models e passando os dados de body do insomnia
    criar(resquest, response){   
        const body = resquest.body;
        UsuarioModel.criar(body);
        return response.status(200).json({
            message: "Usuario cadastrado com Sucesso!"
        });
    }
    atualizar(resquest, response){
        
        return UsuarioModel.atualizar();
    }
    deletar(resquest, response){
        
        return UsuarioModel.deletar();
    }

}
module.exports = UsuarioController;