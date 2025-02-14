const express = require('express');

const AdminController = require("./../Controllers/AdminController"); 

const AdminRoute = express.Router();
AdminRoute.get('/admins', async (req, res) => {
    res.send(await AdminController.getAllAdmins(res, req));
    console.log(res.status)
});
module.exports = AdminRoute;