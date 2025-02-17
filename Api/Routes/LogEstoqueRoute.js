const express = require('express');
const LogEstoqueController = require("@controllers/LogEstoqueController");
const logEstoqueRoute = express.Router();
logEstoqueRoute.get("/log-estoque", LogEstoqueController.getAllLogEstoque);
logEstoqueRoute.post("/log-estoque", LogEstoqueController.insertLogEstoque);
logEstoqueRoute.get('/log-estoque/:id', LogEstoqueController.getLogEstoqueIdLogEstoque);
logEstoqueRoute.get("/log-estoque/id-estoque/:idEstoque", LogEstoqueController.getLogIdEstoque);
logEstoqueRoute.delete('/log-estoque/:id', LogEstoqueController.deleteLogEstoque);

module.exports = logEstoqueRoute;
