use dbselfpaypizzas;
DELIMITER //
CREATE PROCEDURE spUpdateCliente(
    IN spIdcliente INT,
    IN spNomeCliente VARCHAR(60),
    IN spTelefone VARCHAR(40),
    IN spEndereco VARCHAR(40),
    IN spEmail VARCHAR(40),
    IN spSenha VARCHAR(60)
)
BEGIN
    DECLARE checkId INT;
    SELECT idCliente INTO checkId FROM tbCliente WHERE idCliente = spIdcliente;

    IF checkId IS NOT NULL THEN
        UPDATE tbCliente
        SET nomeCliente = spNomeCliente,
            telefone = spTelefone,
            endereco = spEndereco,
            email = spEmail,
            senha = spSenha
        WHERE idCliente = spIdcliente;
        SELECT 'Alteração do cliente feita com sucesso' AS mensagem;
    ELSE
        SELECT 'ID do cliente não existe' AS mensagem;
    END IF;
END //
DELIMITER ;
DELIMITER //
CREATE PROCEDURE spUpDateAdmin(
    IN spIdAmin INT,
    IN spNomeAdmin VARCHAR(60),
    IN spEmailAdmin VARCHAR(40),
    IN spLoginAdmin VARCHAR(40),
    IN spSenhaAdmin VARCHAR(60)
)
BEGIN
   DECLARE checkId INT;
   SELECT tA.idAdmin INTO checkId FROM tbAdmin tA WHERE tA.idAdmin = spIdAmin;
   IF checkId IS NOT NULL THEN
        UPDATE tbAdmin
        SET nomeAdmin = spNomeAdmin,
            emailAdmin = spEmailAdmin,
            loginAdmin = spLoginAdmin,
            senhaAdmin = spSenhaAdmin
        WHERE idAdmin = spIdAmin;
        SELECT 'Alteração do Admin feita com sucesso' AS mensagem;
   ELSE
       SELECT 'ID do Admin não existe' AS mensagem;
   END IF;
END //
DELIMITER ;

SELECT * FROM tbAdmin;
CALL spUpDateAdmin(1,"ADANYELE", "aslan@email.com","mebebe","gustavo");

DELIMITER //

CREATE PROCEDURE spInsertPedido(
    IN spIdCliente INT,
    IN spNomeItem VARCHAR(60),
    IN spDataPedido DATETIME,
    IN spValorTotal FLOAT,
    IN spStatusProduto VARCHAR(20) -- Alterado de ENUM para VARCHAR
)
BEGIN
    -- Verifica se o cliente existe na tabela correta
    IF EXISTS (SELECT 1 FROM tbCliente WHERE idCliente = spIdCliente) THEN
        -- Insere o pedido na tabela corretamente
        INSERT INTO tbPedido (tbPedido.idClient, tbPedido.nomeItem, tbPedido.dataPedido, tbPedido.valorTotal, tbPedido.statusPedido)
        VALUES (spIdCliente, spNomeItem, spDataPedido, spValorTotal, spStatusProduto);

        SELECT 'Pedido adicionado' AS mensagem;
    ELSE
        SELECT 'idCliente não existente' AS mensagem;
    END IF;
END //

DELIMITER ;

ALTER TABLE tbPedido ADD COLUMN nomeItem VARCHAR(60) AFTER idClient;
ALTER TABLE tbPedido DROP COLUMN nomeItem;

INSERT INTO tbPedido(idClient, dataPedido, valorTotal, statusPedido)
VALUES (7,'2024-02-04', 30.0, 'em_preparação');

SELECT pE.idClient, tC.nomeCliente FROM tbPedido pE JOIN tbCliente tC ON tC.idCliente = pE.idClient;
SELECT * FROM tbPedido;
CALL spInsertPedido(7,'pizza','2024-02-04', 30.0,'em_preparação');

DELIMITER //

CREATE PROCEDURE spUpdatePedido(
    IN spIdPedido INT,
    IN spIdClient INT,
    IN spDataPedido DATETIME,
    IN spValorTotal FLOAT,
    IN spStatusPedido VARCHAR(40)
)
BEGIN
    -- Verifica se o pedido existe
    IF EXISTS (SELECT 1 FROM tbPedido WHERE idPedido = spIdPedido) THEN
        -- Atualiza o pedido
        UPDATE tbPedido
        SET idClient = spIdClient,
            dataPedido = spDataPedido,
            valorTotal = spValorTotal,
            statusPedido = spStatusPedido
        WHERE idPedido = spIdPedido;

        SELECT 'Pedido Alterado Com Sucesso' AS mensagem;
    ELSE
        SELECT 'idPedido não existe' AS mensagem;
    END IF;
END //

DELIMITER ;

CALL spUpdatePedido(1, 7, '2024-02-04 15:00:00', 45.50, 'em_preparação');

SELECT pE.idClient, tC.nomeCliente FROM tbPedido pE JOIN tbCliente tC ON tC.idCliente = pE.idClient WHERE pE.idPedido = 2;
CREATE VIEW vwPedido AS
    SELECT pE.idClient, tC.nomeCliente FROM tbPedido pE JOIN tbCliente tC ON tC.idCliente;

DELIMITER //
CREATE PROCEDURE spViewPedido(IN spIdPedido INT)
BEGIN
    SELECT * FROM vwPedido pe WHERE pe.idClient = spIdPedido;
END ;
DELIMITER ;
CALL spViewPedido(7);
select * from tbPedido;;
INSERT INTO tbPedido(idClient, dataPedido, valorTotal, statusPedido) VALUES (7, "2024-02-06",33.0,'em_preparação');
INSERT INTO tbEstoque( nomeInsumo, quantidade) VALUES ('Molho de tormante',100),
                                                      ('Mussarela',200),
                                                      ('chedda', 100),
                                                      ('oregano', 10);
SELECT * FROM tbEstoque;

DELIMITER //
CREATE PROCEDURE spUpade
DELIMITER ;

DELIMITER //
CREATE PROCEDURE spUpdateEstoque(in spIdEstoque int, in spNomeEstoque varchar(40), in spQuantidade int)
BEGIN
    IF EXISTS(SELECT 1 FROM tbEstoque tE WHERE tE.idEstoque = spIdEstoque) THEN
        UPDATE tbEstoque tE SET tE.nomeInsumo= spNomeEstoque,
                                tE.quantidade= spQuantidade WHERE tE.idEstoque = spIdEstoque;
        SELECT 'Estoque alterado com sucesso' as messagem;
    ELSE
        SELECT 'idEsto não existe' As mensagem;
    end if ;
end //
DELIMITER ;

DELIMITER //
CREATE  PROCEDURE  spUpdatePedidosItem(IN spIdPedidoItem INT,IN spIdPedido INT, IN spIdItem INT, IN spQuantidade INT, IN spSubTotal float)
BEGIN
   IF EXISTS(SELECT 1 FROM tbPedidoItem tPI WHERE tPI.idPedidoItem = spIdPedidoItem) THEN
       UPDATE tbPedidoItem tPII SET tPII.pedidoIdItem = spIdPedido,
                                    tPII.itemId = spIdItem,
                                    tPII.quantidade = spQuantidade,
                                    tPII.subtotal = spSubTotal WHERE   tPII.idPedidoItem = spIdPedidoItem;
       SELECT 'PedidoItem alterado com sucesso' as messagem;
   ELSE
       SELECT 'idPedidoItem não existe' as messagem;
   end if ;
END //
DELIMITER ;

SELECT * FROM tbPedidoItem
SELECT * FROM tbPedido;
SELECT * FROM tbItem;
SELECT tI.nomeItem FROM tbItem tI INNER JOIN tbPedido tP ON tI.idItem = tP.idPedido WHERE idPedido = 2;
INSERT INTO tbItem( nomeItem, precoItem, descricaoItem, imagemUrl) VALUES ('catchup', 21.4, 'molho heinz','www.link.ka');

DELIMITER //
CREATE PROCEDURE spUpdateItem(IN spIdItem INT, IN spNomeItem varchar(50), IN spPrecoItem FLOAT, IN spDescricao VARCHAR(100), IN spImagemUrl VARCHAR(500))
BEGIN
    IF EXISTS(SELECT 1 FROM tbItem tI WHERE tI.idItem= spIdItem) THEN
        UPDATE tbItem tIt SET tIt.nomeItem = spNomeItem,
                             tIt.precoItem = spPrecoItem,
                             tIt.descricaoItem = spDescricao,
                             tIt.imagemUrl = spImagemUrl WHERE tIt.idItem = spIdItem;
        SELECT 'idItem alteredo com sucesso' as messagem;
    ELSE
        SELECT 'idItem não existe' as messagem;
    end if ;
end //
DELIMITER ;
DELIMITER //
CREATE PROCEDURE spUpdatePedidoItem(IN spIdPedidoItem INT,IN spPedidoIdItem INT ,IN spItemId INT, IN spQuantidade INT, IN spSubTotal FLOAT)
BEGIN
    IF EXISTS(SELECT 1 FROM tbPedidoItem tPi WHERE tPi.idPedidoItem = spIdPedidoItem) THEN
        UPDATE tbPedidoItem tPI2 SET tPI2.pedidoIdItem = spPedidoIdItem,
                                     tPI2.itemId = spItemId,
                                     tPI2.quantidade = spQuantidade,
                                     tPI2.subtotal = spSubTotal
                                    WHERE tPI2.idPedidoItem = spIdPedidoItem;
        SELECT 'idPedidoItem alterado com sucesso' as mensagem;
    ELSE
        SELECT 'idPedidoItem não existente' as mensagem;
    END IF ;
end //
DELIMITER ;
SELECT * FROM tbPedido;
SELECT * FROM tbItem;
SELECT * FROM tbPedidoItem;
INSERT INTO tbPedidoItem( pedidoIdItem, itemId, quantidade, subtotal)
VALUES (2,2,100,1000.50)

SELECT tC.nomeCliente,
       tI.nomeItem,
       tI.descricaoItem,
       tP.dataPedido,
       tI.precoItem,
       tP.statusPedido,
       tPi.subtotal,
       tP.valorTotal
FROM tbPedidoItem tPi
INNER JOIN tbPedido tP ON tPi.pedidoIdItem = tP.idPedido
INNER JOIN tbCliente tC ON tP.idClient = tC.idCliente
INNER JOIN tbItem tI ON tPi.itemId = tI.idItem;
;
SELECT * FROM tbItem;
SELECT tC.nomeCliente,
        tI.nomeItem,
        tI.descricaoItem,
        tP.dataPedido,
        tI.precoItem,
        tP.statusPedido,
        tPi.subtotal,
        tP.valorTotal
        FROM tbPedidoItem tPi
        INNER JOIN tbPedido tP ON tPi.pedidoIdItem = tP.idPedido
        INNER JOIN tbCliente tC ON tP.idClient = tC.idCliente
        INNER JOIN tbItem tI ON tPi.itemId = tI.idItem
        WHERE tPi.idPedidoItem = 2;
SELECT * FROM tbPedido;
SELECT * FROM tbPagamento;
SELECT * FROM tbPagamento tPa INNER JOIN tbPedido tPe ON tPa.idPedido = tPe.idPedido ;

SELECT * FROM tbPedido;

ALTER TABLE tbPagamento ADD CONSTRAINT fk_tbpagamento FOREIGN KEY (idPedido) REFERENCES tbPedido(idPedido);

ALTER TABLE tbPedido
ADD CONSTRAINT fk_tbPedido_cliente FOREIGN KEY (idClient) REFERENCES tbCliente(idCliente);

ALTER TABLE tbPagamento
ADD CONSTRAINT fk_tbPagamento_pedido FOREIGN KEY (idPedido) REFERENCES tbPedido(idPedido);


ALTER TABLE tbPedidoItem
ADD CONSTRAINT fk_tbPedidoItem_pedido FOREIGN KEY (pedidoIdItem) REFERENCES tbPedido(idPedido);

ALTER TABLE tbPedidoItem
ADD CONSTRAINT fk_tbPedidoItem_item FOREIGN KEY (itemId) REFERENCES tbItem(idItem);

ALTER TABLE tbPedidoItem
ADD CONSTRAINT fk_tbPedidoItem_pedido FOREIGN KEY (pedidoIdItem) REFERENCES tbPedido(idPedido);

ALTER TABLE tbPedidoItem MODIFY pedidoIdItem INT NULL;
ALTER TABLE tbPedidoItem ADD COLUMN pedidoIdItem INT not null AFTER idPedidoItem;
ALTER TABLE tbPedidoItem MODIFY pedidoIdItem INT NULL;

CREATE TABLE tbItemEstoque (
    idItem INT,
    idEstoque INT,
    quantidade INT,
    PRIMARY KEY (idItem, idEstoque),
    FOREIGN KEY (idItem) REFERENCES tbItem(idItem),
    FOREIGN KEY (idEstoque) REFERENCES tbEstoque(idEstoque)
);

CREATE TABLE tbLogEstoque (
    idLogEstoque INT PRIMARY KEY AUTO_INCREMENT,
    idAdmin INT,
    idEstoque INT,
    quantidadeAlterada INT,
    dataAlteracao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (idAdmin) REFERENCES tbAdmin(idAdmin),
    FOREIGN KEY (idEstoque) REFERENCES tbEstoque(idEstoque)
);

CREATE TABLE tbLogPedido (
    idLogPedido INT PRIMARY KEY AUTO_INCREMENT,
    idAdmin INT,
    idPedido INT,
    statusAlteradoPara VARCHAR(50),  -- Exemplo: "Aprovado", "Cancelado"
    dataAlteracao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (idAdmin) REFERENCES tbAdmin(idAdmin),
    FOREIGN KEY (idPedido) REFERENCES tbPedido(idPedido)
);
SELECT * FROM tbItem;
INSERT INTO tbEstoque(nomeInsumo, quantidade)
VALUES ("teste", 100),
       ("teste1", 200),
       ("modelo",300)
SELECT * FROM tbItem;
SELECT * FROM tbItemEstoque;

DELIMITER //

CREATE PROCEDURE spInsertLogPedido(
    IN spIdAdmin INT,
    IN spIdPedido INT,
    IN spStatusAlteradoPara VARCHAR(100)
)
BEGIN
    DECLARE adminExists INT;
    DECLARE pedidoExists INT;
    SELECT COUNT(*) INTO adminExists FROM tbAdmin WHERE idAdmin = spIdAdmin;
    SELECT COUNT(*) INTO pedidoExists FROM tbPedido WHERE idPedido = spIdPedido;
    IF adminExists > 0 AND pedidoExists > 0 THEN
        INSERT INTO tbLogPedido (idAdmin, idPedido, statusAlteradoPara)
        VALUES (spIdAdmin, spIdPedido, spStatusAlteradoPara);
        SELECT 'LogPedido adicionado' AS mensagem;
    ELSE
        IF adminExists = 0 THEN
            SELECT 'Erro: idAdmin não existe na tabela tbAdmin.' AS mensagem;
        ELSE
            SELECT 'Erro: idPedido não existe na tabela tbPedido.' AS mensagem;
        END IF;
    END IF;
END //

DELIMITER ;

DELIMITER //
CREATE PROCEDURE spInsertTbPagamento(
    IN spIdPedido INT,
    IN spValor FLOAT,
    IN spFormaPagamento VARCHAR(30)
)
BEGIN
    IF EXISTS(SELECT 1 FROM tbPedido WHERE idPedido = spIdPedido) THEN
        INSERT INTO tbPagamento(idPedido, valor, formaPagamento)
            VALUES (spIdPedido,spValor,spFormaPagamento);
        SELECT 'Pagamento adicionado' AS mensagem;
    ELSE
        SELECT 'Pagamento não foi adicionado' AS mensagem;
    end if ;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE spUpdatePagamento(
    IN spIdPagamento INT,
    IN spIdPedido INT,
    IN spValor FLOAT,
    IN spFormaPagamento VARCHAR(30)

)
BEGIN
   IF EXISTS(SELECT 1 FROM tbPagamento WHERE idPagamento = spIdPagamento) THEN
       UPDATE tbPagamento tP SET tP.idPedido = spIdPedido,
                                 tP.valor = spValor,
                                 tP.formaPagamento = spFormaPagamento
                                WHERE tP.idPagamento= spIdPagamento;
       SELECT 'Pagamento Alterado com sucesso' as mensagem;
   ELSE
       SELECT 'IdPagamento existe' as messagem;
   END IF ;
END //

DELIMITER ;

ALTER TABLE tbPedido DROP FOREIGN KEY fk_tbPedido_cliente,
    ADD CONSTRAINT  fk_idclient FOREIGN KEY (idClient) REFERENCES tbCliente(idCliente) ON DELETE CASCADE;

ALTER TABLE tbPagamento DROP FOREIGN KEY fk_tbPagamento_pedido,
ADD CONSTRAINT fk_idPedido_pagamento FOREIGN KEY (idPedido) REFERENCES  tbPedido(idPedido) ON DELETE CASCADE ;