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
    idClient     int                                                                              null,
    dataPedido   datetime default CURRENT_TIMESTAMP                                               null,
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


