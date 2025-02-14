const AdminService = require('./../Services/AdminService');

class AdminController {
    static async getAllAdmins(req, res) {
        try {
            const response = await AdminService.getAllAdmins();
            res.status(200).json({ response });
        } catch (error) {
            res.status(400).json({ "error": 404 });
        }
    }
    static async getAdminId(req, res) {
        try {
            const { id } = req.params;
            const admin = await AdminService.getAdminId(id);
            if (!admin) {
                return res.status(404).json({ success: false, message: "Administrador não encontrado" });
            }
            res.status(200).json({ success: true, data: admin });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
    static async createAdmin(req, res) {
        try {
            const { nomeAdmin, emailAdmin, loginAdmin, senhaAdmin } = req.body;
            const newAdmin = await AdminService.createAdmin({ nomeAdmin, emailAdmin, loginAdmin, senhaAdmin });
            res.status(201).json({ success: true, data: newAdmin });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
    static async updateAdmin(req, res) {
        try {
            const { id } = req.params;
            const updateData = req.body;
            const updatedAdmin = await AdminService.updateAdmin(id, updateData);
            res.status(200).json({ success: true, data: updatedAdmin });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
    static async loginAdmin(req, res) {
        try {
            const { loginAdmin, senhaAdmin } = req.body;
            const result = await AdminService.loginAdmin(loginAdmin, senhaAdmin);
            if (result === "usuário não encotrado") {
                return res.status(404).json({ success: false, message: result });
            }
            res.status(200).json({ success: true, data: result });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
    static async deleteAdmin(req, res) {
        try {
            const { id } = req.params;
            const result = await AdminService.deleteAdmin(id);
            res.status(200).json({ success: true, message: result });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
}
module.exports = AdminController;