const express = require('express');
const AdminController = require("@controllers/AdminController");

const adminRoute = express.Router();
adminRoute.get('/admins', AdminController.getAllAdmins);
adminRoute.get('/admins/:id', AdminController.getAdminId);
adminRoute.post('/admins', AdminController.createAdmin);
adminRoute.put('/admins/:id', AdminController.updateAdmin);
adminRoute.post('/admins/login', AdminController.loginAdmin);
adminRoute.delete('/admins/:id', AdminController.deleteAdmin);

module.exports = adminRoute;