require('dotenv').config({ path: '../.env' });
const ItemModel = require('./../Models/ItemModel');

class ItemService{
    static async getAllItems(){
        try{
            return await ItemModel.getAllItem();
        }catch(error){
            throw new Error("Erro getAllItems "+error);
        }
    }
    static async getItemId(idItem){
        try{
            if(!idItem) throw new Error("idTem é obrigatórios");
            return await ItemModel.getIdItem(idItem);
        }catch(error){
            throw new Error("Error getItemId "+error);
        }
    }
    static async addItem(nomeItem, precoItem, descricaoItem, imagemUrl){
        try{
            if(!nomeItem || !precoItem || !descricaoItem || !imagemUrl) throw new Error("Todos os campos são obrigatórios");
            const addItem = new ItemModel(null,nomeItem,precoItem, descricaoItem, imagemUrl);
            return await addItem.insertItem();
        }catch(error){
            throw new Error("Erro AddItem "+error);
        }
    }
    static async updateItem(idItem, nomeItem, precoItem , descricaoItem, imagemUrl){
        try{
            if(!idItem || !nomeItem || !precoItem || !descricaoItem || !imagemUrl) throw new Error("Todos campos são obrigatórios");
            const upItem = new ItemModel(idItem, nomeItem, precoItem, descricaoItem, imagemUrl);
            return await upItem.updateItem(idItem);
        }catch(error){
            throw new Error("Error update "+error);
        }
    }
    static async deleteItem(idItem){
        try{
            if(!idItem) throw new Error("Todos os campos são obrigatórios");
            return await ItemModel.deleteItem(idItem);
        }catch(error){
            throw new Error("Error deleteItem "+error);
        }
    }

}
module.exports = ItemService;