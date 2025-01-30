create database dbselfpaypizzas;
use dbselfpaypizzas;

create table tbCliente(
    idCliente int primary key auto_increment not null,
    nomeCliente varchar(60) not null,
    telefone varchar(40) not null,
    endereco varchar(40) not null,
    email varchar(40) not null,
    senha varchar(60) not null
)
create table tbAdmin(
    idAdmin int primary key auto_increment not null,
    nomeAdmin varchar(60) not null,
    emailAdmin varchar(40) not null,
    loginAdmin varchar(40) not null,
    senhaAdmin varchar(60) not null
)
create table  tbPedido(
    idPedido int primary key auto_increment,
    idClient int references tbCliente(idCliente),
    dataPedido datetime not null,
    valorTotal float not null,
    statusPedido enum('pendente', 'em_preparação', 'saiu_para_entrega', 'entregue', 'cancelado') not null
)
alter table tbPedido modify dataPedido datetime default current_timestamp;
create table tbItem(
    idItem int primary key auto_increment,
    nomeItem varchar(60) not null,
    precoItem float not null,
    descricaoItem varchar(60) not null,
    imagemUrl varchar(500)
)
create table tbPedidoItem(
    idPedidoItem int primary key auto_increment not null,
    pedidoIdItem int references tbPedido(idPedido),
    itemId int references tbItem(idItem),
    quantidade int not null,
    subtotal float not null
)
create table tbEstoque(
    idEstoque int primary key auto_increment,
    nomeInsumo varchar(50) not null,
    quantidade int not null
)
create table tbPagamento(
    idPagamento int primary key auto_increment,
    idPedido int references tbPedido(idPedido),
    valor float not null,
    formaPagamento enum('PENDENTE','APROVADO', 'CANCELADO', 'ESTORNADO') NOT NULL,
    dataPagametno DATETIME DEFAULT CURRENT_TIMESTAMP
)