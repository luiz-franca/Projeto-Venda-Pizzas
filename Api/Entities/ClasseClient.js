class Cliente{
    constructor(id= null, nome= null, telefone= null, endereco= null, email=null, senha=null){
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.endereco = endereco;
        this.email = email;
        this.senha = senha;
    }
    get Id(){
        return this.Id;
    }
    get Nome(){
        return this.nome;
    }
    get Telefone(){
        return this.telefone;
    }
    get Endereco(){
        return this.endereco;
    }
    get Email(){
        return this.endereco;
    }
    get Senha(){
        return this.senha;
    }
    set Id(id){
        this.id = id;
    }
    set Nome(nome){
        this.nome = nome;
    }
    set Telefone(telefone){
        this.telefone = telefone;
    }
    set Endereco(endereco){
        this.endereco = endereco;
    }
    set Senha(senha){
        this.senha = senha;
    }
}
module.exports = Cliente;
