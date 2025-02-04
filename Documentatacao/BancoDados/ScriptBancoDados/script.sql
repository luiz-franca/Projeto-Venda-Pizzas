create table tbAdmin
(
    idAdmin    int auto_increment
        primary key,
    nomeAdmin  varchar(60) not null,
    emailAdmin varchar(40) not null,
    loginAdmin varchar(40) not null,
    senhaAdmin varchar(60) not null
);

create table tbCliente
(
    idCliente   int auto_increment
        primary key,
    nomeCliente varchar(60) not null,
    telefone    varchar(40) not null,
    endereco    varchar(40) not null,
    email       varchar(40) not null,
    senha       varchar(60) not null
);

create table tbEstoque
(
    idEstoque  int auto_increment
        primary key,
    nomeInsumo varchar(50) not null,
    quantidade int         not null
);

create table tbItem
(
    idItem        int auto_increment
        primary key,
    nomeItem      varchar(60)  not null,
    precoItem     float        not null,
    descricaoItem varchar(60)  not null,
    imagemUrl     varchar(500) null
);

create table tbPagamento
(
    idPagamento    int auto_increment
        primary key,
    idPedido       int                                                     null,
    valor          float                                                   not null,
    formaPagamento enum ('PENDENTE', 'APROVADO', 'CANCELADO', 'ESTORNADO') not null,
    dataPagametno  datetime default CURRENT_TIMESTAMP                      null
);

create table tbPedido
(
    idPedido     int auto_increment
        primary key,
    idClient     int,
    nomeItem     varchar(60),                                                                              null,
    dataPedido   datetime default CURRENT_TIMESTAMP ,                                           null,
    valorTotal   float                                                                            not null,
    statusPedido enum ('pendente', 'em_preparação', 'saiu_para_entrega', 'entregue', 'cancelado') not null
);

create table tbPedidoItem
(
    idPedidoItem int auto_increment
        primary key,
    pedidoIdItem int   null,
    itemId       int   null,
    quantidade   int   not null,
    subtotal     float not null
);

DELIMITER //
create procedure spUpdateCliente(in spIdcliente int, in spNomeCliente varchar(60), in spTelefone varchar(40), in spEndereco varchar(40), spEmail varchar(40), spSenha varchar(60))
begin
    declare checkId int;
    SELECT tc.idCliente into checkId FROM tbCliente tc where tc.idCliente = spIdcliente;
    if checkId = spIdcliente then
        UPDATE tbCliente set nomeCliente = spNomeCliente,
                             telefone = spTelefone,
                             endereco= spEndereco,
                             email = spEmail,
                             senha= spSenha
            where idCliente = spIdcliente;
            SELECT 'alteração client feita com sucesso';
    else
        SELECT 'idCLiente não existe';
    end if;

end;

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

ALTER TABLE tbPedido ADD COLUMN nomeItem VARCHAR(60) AFTER idClient;

DELIMITER //

CREATE PROCEDURE spInsertPedido(
    IN spIdCliente INT,
    IN spNomeItem VARCHAR(60),
    IN spDataPedido DATETIME,
    IN spValorTotal FLOAT,
    IN spStatusProduto VARCHAR(20) -- Alterado de ENUM para VARCHAR
)
BEGIN

    IF EXISTS (SELECT 1 FROM tbCliente WHERE idCliente = spIdCliente) THEN
        INSERT INTO tbPedido (tbPedido.idClient, tbPedido.nomeItem, tbPedido.dataPedido, tbPedido.valorTotal, tbPedido.statusPedido)
        VALUES (spIdCliente, spNomeItem, spDataPedido, spValorTotal, spStatusProduto);

        SELECT 'Pedido adicionado' AS mensagem;
    ELSE
        SELECT 'idCliente não existente' AS mensagem;
    END IF;
END //

DELIMITER ;

DELIMITER //
CREATE PROCEDURE spUpdatePedito(IN spIdPedido INT,
                                IN spIdClient INT,
                                IN spDataPedido FLOAT ,
                                IN spValorTotal FLOAT,
                                IN spStatusPedido VARCHAR(40))
BEGIN
    IF EXISTS(SELECT 1 FROM tbPedido pE WHERE pE.idPedido = spIdPedido) THEN
        UPDATE tbPedido pe SET pe.idClient = spIdClient,
                               pe.dataPedido = spDataPedido,
                               pe.valorTotal = spValorTotal,
                               pe.statusPedido = spStatusPedido
                            WHERE pe.idPedido = spIdPedido;
        SELECT 'Pedido Alterado Com Sucesso' AS mensagem;
    ELSE
        SELECT 'idPedido não existe' AS mensagem;
    end if ;
end //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE spViewPedido(IN spIdPedido INT)
BEGIN
    SELECT * FROM vwPedido pe WHERE pe.idClient = spIdPedido;
END ;
DELIMITER ;
