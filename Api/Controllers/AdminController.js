const AdminModel = require("@models/AdminModel");

class AdminService {
    static async getAllAdmin() {
        try {
            return await AdminModel.getAllAdmin();
        } catch (error) {
            throw new Error("Erro ao buscar administradores: " + error.message);
        }
    }

    static async getAdminById(idAdmin) {
        try {
            if (!idAdmin) throw new Error("ID do administrador é obrigatório");
            return await AdminModel.getIdAdmin(idAdmin);
        } catch (error) {
            throw new Error("Erro ao buscar administrador: " + error.message);
        }
    }

    static async createAdmin({ nomeAdmin, emailAdmin, loginAdmin, senhaAdmin }) {
        try {
            if (!nomeAdmin || !emailAdmin || !loginAdmin || !senhaAdmin) {
                throw new Error("Todos os campos são obrigatórios");
            }

            const newAdmin = new AdminModel(null, nomeAdmin, emailAdmin, loginAdmin, senhaAdmin);
            return await newAdmin.insertAdmin();
        } catch (error) {
            throw new Error("Erro ao criar administrador: " + error.message);
        }
    }
    static async updateAdmin(idAdmin, updateData) {
        try {
            if (!idAdmin) throw new Error("ID do administrador é obrigatório");

            const admin = new AdminModel(
                idAdmin,
                updateData.nomeAdmin,
                updateData.emailAdmin,
                updateData.loginAdmin,
                updateData.senhaAdmin
            );

            return await admin.updateAdmin(idAdmin);
        } catch (error) {
            throw new Error("Erro ao atualizar administrador: " + error.message);
        }
    }
    static async deleteAdmin(idAdmin) {
        try {
            if (!idAdmin) throw new Error("ID do administrador é obrigatório");
            return await AdminModel.deleteADmin(idAdmin);
        } catch (error) {
            throw new Error("Erro ao excluir administrador: " + error.message);
        }
    }
}

module.exports = AdminService;
