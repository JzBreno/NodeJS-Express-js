class UsuarioModels{
    //metodos no static para nao pecisar instanciar
    //lista que simula BDA
    static lista = [{id:1,usuario:'Breno', senha:'1310199'},
        {id:2, usuario:'Bherno', senha:'13101990'}
    ];
    //listando 
    static listar(){
        return UsuarioModels.lista;
    }
    static ConsultarPorID(id){
        const dados = UsuarioModels.lista.filter(item=> item.id == id);
        return dados;
    }
    //recenbendo json injetado no insomnia no body
    static criar(body){
        //colocando na lista
        UsuarioModels.lista.push(body);
    }
    static atualizar(){}
    static deletar(){}
}

module.exports = UsuarioModels;