require('dotenv').config({ path: '../.env' });
const EstoqueModel = require('./../Models/EstoqueModel');

class EstoqueService{
    static async insertInsumoEstoque(nomeInsumo, quantidade){
        try{
            if(!nomeInsumo || quantidade === undefined) throw new Error("Todos os campos são obrigatórios");
            const newInsumo = new EstoqueModel(null,nomeInsumo, quantidade);
            return await newInsumo.insertInsumoEstoque();
        }catch(error){
            throw new Error("item não adicionado "+error);
        }
    }
    static async getAllEstoque(){
        try{
            return await EstoqueModel.getAllEstoque();
        }catch(error){
            throw new Error("erro getAllEstoque "+error);
        }
    }
    static async getIdEstoque(idEstoque) {
        try {
            if (!idEstoque) {
                throw new Error("ID do estoque é obrigatório");
            }

            const itemEstoque = await EstoqueModel.getIdEstoque(idEstoque);

            if (!itemEstoque || itemEstoque.length === 0) {
                return "Item do estoque não encontrado";
            }

            return itemEstoque;
        } catch (error) {
            throw new Error("Erro ao buscar item do estoque: " + error.message);
        }
    }
    static async updateEstoque(idEstoque, nomeInsumo, quantidade){
        try{
            if(!idEstoque || !nomeInsumo || quantidade === undefined) throw new Error("todos os campo são Obrigatórios");
            const updateInsumo =  new EstoqueModel(null, nomeInsumo, quantidade);
            return await updateInsumo.updateEstoque(idEstoque);
        }catch(error){
            throw new Error("Erro updateEstoque "+error);
        }
    }
    static async deleteEstoque(idEstoque){
        try{
            if(!idEstoque) throw new Error("idEstoque obrigatórios");
            return await EstoqueModel.deleteEstoque(idEstoque);
        }catch(error){
            throw new Error("Erro DeleteEstoque "+error)
        }
    }
}
module.exports = EstoqueService;