const UsuarioModel = require('../models/UsuariosModels');

class UsuarioController{
    //controller recebe req,resp chama listar de usuarios e retorna a resposta com os dados de model
    listar(resquest, response){
        const dados =  UsuarioModel.listar();
        return response.json(dados);
    }

    ConsultarPorID(resquest, response){
        const id = resquest.params.id;
        const dados = UsuarioModel.ConsultarPorID(id);
        return response.json(dados);
    }
    //chamando o criar de models e passando os dados de body do insomnia
    criar(resquest, response){   
        const body = resquest.body;
        UsuarioModel.criar(body);
        return response.status(201).json({ //201 codigo que diz que a criacao foi um sucesso
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