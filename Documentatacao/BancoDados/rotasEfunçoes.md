
### **Rotas de Pagamento (`pagamentoRoute`)**

1. **`GET /pagamentos`**
   - **Descrição:** Retorna todos os pagamentos registrados no sistema.
   - **Controller:** `PagamentoController.getAllPagamentos`.

2. **`GET /pagamento/:id`**
   - **Descrição:** Retorna um pagamento específico com base no ID fornecido.
   - **Controller:** `PagamentoController.getPagamentoId`.

3. **`POST /pagamento`**
   - **Descrição:** Insere um novo pagamento no sistema.
   - **Controller:** `PagamentoController.insertPagamento`.

4. **`PUT /pagamento/:id`**
   - **Descrição:** Atualiza um pagamento existente com base no ID fornecido.
   - **Controller:** `PagamentoController.updatePagamento`.

5. **`DELETE /pagamento/:id`**
   - **Descrição:** Deleta um pagamento com base no ID fornecido.
   - **Controller:** `PagamentoController.deletePagamento`.

6. **`GET /pagamentos-nomes-pedido`**
   - **Descrição:** Retorna todos os pagamentos com informações adicionais sobre os pedidos associados.
   - **Controller:** `PagamentoController.getAllPagamentosStatusPedido`.

---

### **Rotas de Pedido (`pedidoRoute`)**

1. **`GET /pedidos`**
   - **Descrição:** Retorna todos os pedidos registrados no sistema.
   - **Controller:** `PedidoController.getAllPedidos`.

2. **`POST /pedidos`**
   - **Descrição:** Insere um novo pedido no sistema.
   - **Controller:** `PedidoController.insertPedido`.

3. **`PUT /pedidos/:id`**
   - **Descrição:** Atualiza um pedido existente com base no ID fornecido.
   - **Controller:** `PedidoController.updatePedido`.

4. **`DELETE /pedidos/:id`**
   - **Descrição:** Deleta um pedido com base no ID fornecido.
   - **Controller:** `PedidoController.deletePedido`.

5. **`GET /pedidos/cliente/:idClient`**
   - **Descrição:** Retorna todos os pedidos associados a um cliente específico, com base no ID do cliente.
   - **Controller:** `PedidoController.getPedidosClienteId`.

---

### **Rotas de Itens de Pedido (`pedidoItenRoute`)**

1. **`GET /pedidos-item`**
   - **Descrição:** Retorna todos os itens de pedido registrados no sistema.
   - **Controller:** `PedidoController.getAllPedidoItens`.

2. **`GET /pedidos-item-nomes`**
   - **Descrição:** Retorna todos os itens de pedido com nomes associados.
   - **Controller:** `PedidoController.getAllPedidoItensNomes`.

3. **`GET /pedidos-item/:id`**
   - **Descrição:** Retorna um item de pedido específico com base no ID fornecido.
   - **Controller:** `PedidoController.getPedidoItemId`.

4. **`GET /pedidos-item-nomes/:id`**
   - **Descrição:** Retorna um item de pedido com nome associado, com base no ID fornecido.
   - **Controller:** `PedidoController.getPedidoItemNomeId`.

5. **`POST /pedidos-item`**
   - **Descrição:** Insere um novo item de pedido no sistema.
   - **Controller:** `PedidoController.insertPedidoItem`.

6. **`PUT /pedido-item/:id`**
   - **Descrição:** Atualiza um item de pedido existente com base no ID fornecido.
   - **Controller:** `PedidoController.updatePedidoItem`.

7. **`DELETE /pedido-item/:id`**
   - **Descrição:** Deleta um item de pedido com base no ID fornecido.
   - **Controller:** `PedidoController.deletePedidoItem`.

---

### **Rotas de Log de Pedido (`logPedidoRoute`)**

1. **`POST /logs-pedido`**
   - **Descrição:** Insere um novo log de pedido no sistema.
   - **Controller:** `LogPedidoController.insertLogPedido`.

2. **`GET /logs-pedido`**
   - **Descrição:** Retorna todos os logs de pedido registrados no sistema.
   - **Controller:** `LogPedidoController.getAllLogsPedido`.

3. **`GET /logs-pedido/:id`**
   - **Descrição:** Retorna um log de pedido específico com base no ID fornecido.
   - **Controller:** `LogPedidoController.getLogPedidoById`.

4. **`DELETE /logs-pedido/:id`**
   - **Descrição:** Deleta um log de pedido com base no ID fornecido.
   - **Controller:** `LogPedidoController.deleteLogPedido`.

5. **`GET /logs-pedido/admin/:idAdmin`**
   - **Descrição:** Retorna todos os logs de pedido associados a um administrador específico, com base no ID do admin.
   - **Controller:** `LogPedidoController.getLogsPedidoByIdAdmin`.

6. **`GET /logs-pedido/pedido/:idPedido`**
   - **Descrição:** Retorna todos os logs de pedido associados a um pedido específico, com base no ID do pedido.
   - **Controller:** `LogPedidoController.getLogsPedidoByIdPedido`.

---

### **Rotas de Log de Estoque (`logEstoqueRoute`)**

1. **`GET /log-estoque`**
   - **Descrição:** Retorna todos os logs de estoque registrados no sistema.
   - **Controller:** `LogEstoqueController.getAllLogEstoque`.

2. **`POST /log-estoque`**
   - **Descrição:** Insere um novo log de estoque no sistema.
   - **Controller:** `LogEstoqueController.insertLogEstoque`.

3. **`GET /log-estoque/:id`**
   - **Descrição:** Retorna um log de estoque específico com base no ID fornecido.
   - **Controller:** `LogEstoqueController.getLogEstoqueIdLogEstoque`.

4. **`GET /log-estoque/id-estoque/:idEstoque`**
   - **Descrição:** Retorna todos os logs de estoque associados a um estoque específico, com base no ID do estoque.
   - **Controller:** `LogEstoqueController.getLogIdEstoque`.

5. **`DELETE /log-estoque/:id`**
   - **Descrição:** Deleta um log de estoque com base no ID fornecido.
   - **Controller:** `LogEstoqueController.deleteLogEstoque`.

---

### **Rotas de Itens (`itemRouter`)**

1. **`GET /itens`**
   - **Descrição:** Retorna todos os itens registrados no sistema.
   - **Controller:** `ItemController.getAllItems`.

2. **`GET /itens/:id`**
   - **Descrição:** Retorna um item específico com base no ID fornecido.
   - **Controller:** `ItemController.getItemById`.

3. **`POST /itens`**
   - **Descrição:** Insere um novo item no sistema.
   - **Controller:** `ItemController.addItem`.

4. **`PUT /itens/:id`**
   - **Descrição:** Atualiza um item existente com base no ID fornecido.
   - **Controller:** `ItemController.updateItem`.

5. **`DELETE /itens/:id`**
   - **Descrição:** Deleta um item com base no ID fornecido.
   - **Controller:** `ItemController.deleteItem`.

---

### **Rotas de Itens de Estoque (`itemEstoqueRoute`)**

1. **`GET /itens-estoque`**
   - **Descrição:** Retorna todos os itens de estoque registrados no sistema.
   - **Controller:** `ItemEstoqueController.getAllItensEstoque`.

2. **`GET /itens-estoque/nomes`**
   - **Descrição:** Retorna todos os itens de estoque com nomes associados.
   - **Controller:** `ItemEstoqueController.getAllNomesItensEstoque`.

3. **`GET /itens-estoque/nome/:idItem`**
   - **Descrição:** Retorna um item de estoque com nome associado, com base no ID do item.
   - **Controller:** `ItemEstoqueController.getIdNomeItemEstoque`.

4. **`PUT /itens-estoque/:idItem/:idEstoque`**
   - **Descrição:** Atualiza um item de estoque existente com base no ID do item e no ID do estoque.
   - **Controller:** `ItemEstoqueController.updateItemEstoque`.

5. **`DELETE /itens-estoque/:idItem/:idEstoque`**
   - **Descrição:** Deleta um item de estoque com base no ID do item e no ID do estoque.
   - **Controller:** `ItemEstoqueController.deleteItemEstoque`.

6. **`GET /itens-estoque/:idItem/:idEstoque`**
   - **Descrição:** Retorna um item de estoque específico com base no ID do item e no ID do estoque.
   - **Controller:** `ItemEstoqueController.getItemEstoqueId`.

---

### **Rotas de Estoque (`estoqueRoute`)**

1. **`POST /estoque`**
   - **Descrição:** Insere um novo insumo no estoque.
   - **Controller:** `EstoqueController.insertInsumoEstoque`.

2. **`GET /estoque`**
   - **Descrição:** Retorna todos os insumos registrados no estoque.
   - **Controller:** `EstoqueController.getAllEstoque`.

3. **`PUT /estoque/:id`**
   - **Descrição:** Atualiza um insumo existente no estoque com base no ID fornecido.
   - **Controller:** `EstoqueController.updateEstoque`.

4. **`DELETE /estoque/:id`**
   - **Descrição:** Deleta um insumo do estoque com base no ID fornecido.
   - **Controller:** `EstoqueController.deleteEstoque`.

5. **`GET /estoque/:id`**
   - **Descrição:** Retorna um insumo específico do estoque com base no ID fornecido.
   - **Controller:** `EstoqueController.getIdEstoque`.

---

### **Rotas de Cliente (`clienteRoute`)**

1. **`POST /clientes`**
   - **Descrição:** Registra um novo cliente no sistema.
   - **Controller:** `ClienteController.registerCliente`.

2. **`GET /clientes`**
   - **Descrição:** Retorna todos os clientes registrados no sistema.
   - **Controller:** `ClienteController.getAllClientes`.

3. **`GET /clientes/:id`**
   - **Descrição:** Retorna um cliente específico com base no ID fornecido.
   - **Controller:** `ClienteController.getClienteById`.

4. **`PUT /clientes/:id`**
   - **Descrição:** Atualiza um cliente existente com base no ID fornecido.
   - **Controller:** `ClienteController.updateCliente`.

5. **`DELETE /clientes/:id`**
   - **Descrição:** Deleta um cliente com base no ID fornecido.
   - **Controller:** `ClienteController.excluirCliente`.

---

### **Rotas de Admin (`adminRoute`)**

1. **`GET /admins`**
   - **Descrição:** Retorna todos os administradores registrados no sistema.
   - **Controller:** `AdminController.getAllAdmins`.

2. **`GET /admins/:id`**
   - **Descrição:** Retorna um administrador específico com base no ID fornecido.
   - **Controller:** `AdminController.getAdminId`.

3. **`POST /admins`**
   - **Descrição:** Cria um novo administrador no sistema.
   - **Controller:** `AdminController.createAdmin`.

4. **`PUT /admins/:id`**
   - **Descrição:** Atualiza um administrador existente com base no ID fornecido.
   - **Controller:** `AdminController.updateAdmin`.

5. **`POST /admins/login`**
   - **Descrição:** Realiza o login de um administrador.
   - **Controller:** `AdminController.loginAdmin`.

6. **`DELETE /admins/:id`**
   - **Descrição:** Deleta um administrador com base no ID fornecido.
   - **Controller:** `AdminController.deleteAdmin`.

---

### **Resumo Geral:**

- **Pagamento:** Gerencia pagamentos associados a pedidos.
- **Pedido:** Gerencia pedidos feitos pelos clientes.
- **Itens de Pedido:** Gerencia os itens que compõem um pedido.
- **Log de Pedido:** Registra alterações no status dos pedidos.
- **Log de Estoque:** Registra alterações no estoque.
- **Itens:** Gerencia os itens disponíveis no sistema.
- **Itens de Estoque:** Gerencia a relação entre itens e estoque.
- **Estoque:** Gerencia os insumos disponíveis no estoque.
- **Cliente:** Gerencia os clientes do sistema.
- **Admin:** Gerencia os administradores do sistema.
