const AdminModel = require('@models/utils');

class AdminService{
    static async loginAdmin(login, senha){
        if(!login || !senha){
            throw new Error("Login e Senha são Obrigatórios")
        }
        const checkAdmin = AdminModel.findLogin(login)
    }
}
(async()=>{
    const teste = await AdminService.loginAdmin('loign', 1);
    console.log(teste);
})()
module.exports = AdminService;