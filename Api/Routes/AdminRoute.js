const express = require('express');
const AdminController = require("./../Controllers/AdminController");

const AdminRoute = express.Router();
AdminRoute.get('/admins', AdminController.getAllAdmins);
AdminRoute.get('/admins/:id', AdminController.getAdminId);
AdminRoute.post('/admins', AdminController.createAdmin);
AdminRoute.put('/admins/:id', AdminController.updateAdmin);
AdminRoute.post('/admins/login', AdminController.loginAdmin);

module.exports = AdminRoute;