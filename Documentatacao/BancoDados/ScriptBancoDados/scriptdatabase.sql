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
    primary key (idCliente)
);

create table tbEstoque
(
    primary key (idEstoque)
);

create table tbItem
(
    primary key (idItem)
);

create table tbItemEstoque
(
    primary key (idItem, idEstoque),
    constraint tbItemEstoque_ibfk_1
        foreign key (idItem) references tbItem (idItem),
    constraint tbItemEstoque_ibfk_2
        foreign key (idEstoque) references tbEstoque (idEstoque)
);

create index idEstoque
    on tbItemEstoque (idEstoque);

create table tbLogEstoque
(
    primary key (idLogEstoque),
    constraint tbAdmin_logEstoque
        foreign key (idAdmin) references tbAdmin (idAdmin)
            on delete cascade,
    constraint tbLogEstoque_ibfk_2
        foreign key (idEstoque) references tbEstoque (idEstoque)
);

create index idEstoque
    on tbLogEstoque (idEstoque);

create table tbPedido
(
    primary key (idPedido),
    constraint fk_idclient
        foreign key (idClient) references tbCliente (idCliente)
            on delete cascade
);

create table tbLogPedido
(
    primary key (idLogPedido),
    constraint fk_pedido_logpedido
        foreign key (idPedido) references tbPedido (idPedido)
            on delete cascade,
    constraint tbLogPedido_ibfk_1
        foreign key (idAdmin) references tbAdmin (idAdmin)
);

create index idAdmin
    on tbLogPedido (idAdmin);

create table tbPagamento
(
    primary key (idPagamento),
    constraint fk_idPedido_pagamento
        foreign key (idPedido) references tbPedido (idPedido)
            on delete cascade
);

create table tbPedidoItem
(
    primary key (idPedidoItem),
    constraint fk_tbPedidoItem_item
        foreign key (itemId) references tbItem (idItem),
    constraint fk_tbPedidoItem_pedido
        foreign key (pedidoIdItem) references tbPedido (idPedido)
);

create definer = root@localhost view vwpedido as
select `pe`.`idClient` AS `idClient`, `tc`.`nomeCliente` AS `nomeCliente`
from (`dbselfpaypizzas`.`tbpedido` `pe` join `dbselfpaypizzas`.`tbcliente` `tc` on ((0 <> `tc`.`idCliente`)));

create
    definer = root@localhost procedure spInsertLogPedido(IN spIdAdmin int, IN spIdPedido int,
                                                         IN spStatusAlteradoPara varchar(100))
BEGIN

    DECLARE adminExists INT;

    DECLARE pedidoExists INT;



    -- Verifica se o idAdmin existe na tabela tbAdmin

    SELECT COUNT(*) INTO adminExists FROM tbAdmin WHERE idAdmin = spIdAdmin;



    -- Verifica se o idPedido existe na tabela tbPedido

    SELECT COUNT(*) INTO pedidoExists FROM tbPedido WHERE idPedido = spIdPedido;



    -- Se ambos existirem, insere o log

    IF adminExists > 0 AND pedidoExists > 0 THEN

        INSERT INTO tbLogPedido (idAdmin, idPedido, statusAlteradoPara)

        VALUES (spIdAdmin, spIdPedido, spStatusAlteradoPara);

        SELECT 'LogPedido adicionado' AS mensagem;

    ELSE

        -- Retorna uma mensagem de erro se o idAdmin ou idPedido não existir

        IF adminExists = 0 THEN

            SELECT 'Erro: idAdmin não existe na tabela tbAdmin.' AS mensagem;

        ELSE

            SELECT 'Erro: idPedido não existe na tabela tbPedido.' AS mensagem;

        END IF;

    END IF;

END;

create
    definer = root@localhost procedure spInsertPedido(IN spIdCliente int, IN spNomeItem varchar(60),
                                                      IN spDataPedido datetime, IN spValorTotal float,
                                                      IN spStatusProduto varchar(20))
BEGIN
    IF EXISTS (SELECT 1 FROM tbCliente WHERE idCliente = spIdCliente) THEN
        INSERT INTO tbPedido (tbPedido.idClient, tbPedido.nomeItem, tbPedido.dataPedido, tbPedido.valorTotal, tbPedido.statusPedido)
        VALUES (spIdCliente, spNomeItem, spDataPedido, spValorTotal, spStatusProduto);

        SELECT 'Pedido adicionado' AS mensagem;
    ELSE
        SELECT 'idCliente não existente' AS mensagem;
    END IF;
END;

create
    definer = root@localhost procedure spInsertTbPagamento(IN spIdPedido int, IN spValor float, IN spFormaPagamento varchar(30))
BEGIN
    IF EXISTS(SELECT 1 FROM tbPedido WHERE idPedido = spIdPedido) THEN
        INSERT INTO tbPagamento(idPedido, valor, formaPagamento)
        VALUES (spIdPedido,spValor,spFormaPagamento);
        SELECT 'Pagamento adicionado' AS mensagem;
    ELSE
        SELECT 'Pagamento não foi adicionado' AS mensagem;
    end if ;
END;

create
    definer = root@localhost procedure spUpDateAdmin(IN spIdAmin int, IN spNomeAdmin varchar(60),
                                                     IN spEmailAdmin varchar(40), IN spLoginAdmin varchar(40),
                                                     IN spSenhaAdmin varchar(60))
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

END;

create
    definer = root@localhost procedure spUpdateCliente(IN spIdcliente int, IN spNomeCliente varchar(60),
                                                       IN spTelefone varchar(40), IN spEndereco varchar(40),
                                                       IN spEmail varchar(40))
BEGIN

    DECLARE checkId INT;

    SELECT idCliente INTO checkId FROM tbCliente WHERE idCliente = spIdcliente;



    IF checkId IS NOT NULL THEN

        UPDATE tbCliente

        SET nomeCliente = spNomeCliente,

            telefone = spTelefone,

            endereco = spEndereco,

            email = spEmail

        WHERE idCliente = spIdcliente;

        SELECT 'Alteração do cliente feita com sucesso' AS mensagem;

    ELSE

        SELECT 'ID do cliente não existe' AS mensagem;

    END IF;

END;

create
    definer = root@localhost procedure spUpdateEstoque(IN spIdEstoque int, IN spNomeEstoque varchar(40), IN spQuantidade int)
BEGIN
    IF EXISTS(SELECT 1 FROM tbEstoque tE WHERE tE.idEstoque = spIdEstoque) THEN
        UPDATE tbEstoque tE SET tE.nomeInsumo= spNomeEstoque,
                                tE.quantidade= spQuantidade WHERE tE.idEstoque = spIdEstoque;
        SELECT 'Estoque alterado com sucesso' as messagem;
    ELSE
        SELECT 'idEsto não existe' As mensagem;
    end if ;
    create table tbAdmin
    (
        idAdmin    int auto_increment
            primary key,
        nomeAdmin  varchar(60) not null,
        emailAdmin varchar(40) not null,
        loginAdmin varchar(40) not null,
        senhaAdmin varchar(60) not null
    );
end;

create
    definer = root@localhost procedure spUpdateItem(IN spIdItem int, IN spNomeItem varchar(50), IN spPrecoItem float,
                                                    IN spDescricao varchar(100), IN spImagemUrl varchar(500))
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
end;

create
    definer = root@localhost procedure spUpdatePagamento(IN spIdPagamento int, IN spIdPedido int, IN spValor float,
                                                         IN spFormaPagamento varchar(30))
BEGIN
    IF EXISTS(SELECT 1 FROM tbPagamento WHERE idPagamento = spIdPagamento) THEN
        UPDATE tbPagamento tP SET tP.idPedido = spIdPedido,
                                  tP.valor = spValor,
                                  tP.formaPagamento = spFormaPagamento
        WHERE tP.idPagamento= spIdPagamento;
        SELECT 'Pagamento Alterado com sucesso' as mensagem;
    ELSE
        SELECT 'IdPagamento Não existe' as messagem;
    END IF ;
END;

create
    definer = root@localhost procedure spUpdatePedido(IN spIdPedido int, IN spIdClient int, IN spDataPedido datetime,
                                                      IN spValorTotal float, IN spStatusPedido varchar(40))
BEGIN
    IF EXISTS (SELECT 1 FROM tbPedido WHERE idPedido = spIdPedido) THEN
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
END;

create
    definer = root@localhost procedure spUpdatePedidoItem(IN spIdPedidoItem int, IN spPedidoIdItem int, IN spItemId int,
                                                          IN spQuantidade int, IN spSubTotal float)
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
end;

create
    definer = root@localhost procedure spUpdatePedidosItem(IN spIdPedidoItem int, IN spIdPedido int, IN spIdItem int,
                                                           IN spQuantidade int, IN spSubTotal float)
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
END;

create
    definer = root@localhost procedure spViewPedido(IN spIdPedido int)
BEGIN
    SELECT * FROM vwPedido pe WHERE pe.idClient = spIdPedido;
END;

