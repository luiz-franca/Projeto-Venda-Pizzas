const AdminService = require('./../Services/AdminService');

class AdminController {
    static async getAllAdmins(res, req){
        try{
            const response = await AdminService.getAllAdmins();
            res.status(200).json({response})
        }catch(error){
            res.status(400).json({"error": 404})
        }   
    }
}
module.exports = AdminController;