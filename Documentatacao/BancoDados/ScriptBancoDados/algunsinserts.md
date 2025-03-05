INSERT INTO tbCliente (nomeCliente, telefone, endereco, email) VALUES ('marcilio', '84991383819', 'rua nova conquista', 'freitas.marcilio33@gmail.com');
INSERT INTO tbCliente (nomeCliente, telefone, endereco, email) VALUES ('junior', '84991383819', 'rua nova conquista', 'junior@email.com');
INSERT INTO tbCliente (nomeCliente, telefone, endereco, email) VALUES ('dev', '8499999999', 'rua nova conquista', 'dev@email.com');
INSERT INTO tbCliente (nomeCliente, telefone, endereco, email) VALUES ('novato', '8491889878', 'rua dos chinas, 123', 'novato@email.com');
INSERT INTO tbCliente (nomeCliente, telefone, endereco, email) VALUES ('cliente', '8499898799', 'rua do cliente', 'cliente@email.com');
INSERT INTO tbCliente (nomeCliente, telefone, endereco, email) VALUES ('teste', '8491999499', 'rua do fulano', 'teste@email.com');
INSERT INTO tbCliente (nomeCliente, telefone, endereco, email) VALUES ('maria', '84998989899', 'rua da maria', 'maria@email.com');
INSERT INTO tbCliente (nomeCliente, telefone, endereco, email) VALUES ('bruno', '84991383819', 'rua do bruno', 'bruno@email.com');
INSERT INTO tbCliente (nomeCliente, telefone, endereco, email) VALUES ('outro', '84979797989', 'rua do outro', 'outro@email.com');
INSERT INTO tbCliente (nomeCliente, telefone, endereco, email) VALUES ('gustavo', '84999988888', 'rua nova teste,68', 'gustavo@email.com');
INSERT INTO tbCliente (nomeCliente, telefone, endereco, email) VALUES ('novoteste', '84999999999', 'rua do fulano', 'novoteste@email.com');
INSERT INTO tbCliente (nomeCliente, telefone, endereco, email) VALUES ('breno', '8491999499', 'rua nova conquista', 'breno@email.com');


INSERT INTO tbItem (nomeItem, precoItem, descricaoItem, imagemUrl) VALUES ('Mussarela', 20.19, 'Descrição da pizza em mais de uma linha muito legal bem interessante', 'images/pizza.png');
INSERT INTO tbItem (nomeItem, precoItem, descricaoItem, imagemUrl) VALUES ('Calabresa', 18, 'Descrição da pizza em mais de uma linha muito legal bem interessante', 'images/pizza2.png');
INSERT INTO tbItem (nomeItem, precoItem, descricaoItem, imagemUrl) VALUES ('Quatro Queijos', 17.45, 'Descrição da pizza em mais de uma linha muito legal bem interessante', 'images/pizza3.png');
INSERT INTO tbItem (nomeItem, precoItem, descricaoItem, imagemUrl) VALUES ('Americana', 19.77, 'Descrição da pizza em mais de uma linha muito legal bem interessante', 'images/pizza4.png');
INSERT INTO tbItem (nomeItem, precoItem, descricaoItem, imagemUrl) VALUES ('Sorvete', 21.43, 'Descrição da pizza em mais de uma linha muito legal bem interessante', 'images/pizza5.png');
INSERT INTO tbItem (nomeItem, precoItem, descricaoItem, imagemUrl) VALUES ('Moda da Casa', 18.55, 'Descrição da pizza em mais de uma linha muito legal bem interessante', 'images/pizza6.png');
INSERT INTO tbItem (nomeItem, precoItem, descricaoItem, imagemUrl) VALUES ('Chocolate', 25.36, 'Descrição da pizza em mais de uma linha muito legal bem interessante', 'images/pizza7.png');
INSERT INTO tbItem (nomeItem, precoItem, descricaoItem, imagemUrl) VALUES ('Frango c/ Catupiry', 25.36, 'Descrição da pizza em mais de uma linha muito legal bem interessante', 'images/pizza.png');

ALTER TABLE tbItem MODIFY descricaoItem TEXT;

INSERT INTO tbAdmin (nomeAdmin, emailAdmin, loginAdmin, senhaAdmin) 
VALUES ('marcilio', 'marbass18@gmail.com', 'marbass18@gmail.com', '$2b$10$CDSnmNAW3nYP0Clnx4vXC.6Kr61E9j2ou0PYFR65Z9glKB2p8A/G2');

INSERT INTO tbEstoque (nomeInsumo, quantidade) VALUES 
('Queijo Mussarela', 96),
('Presunto', 130),
('Queijo Ralado', 130),
('Calabresa Fatiada', 130),
('Frango Desfiado', 130),
('Catupiry', 130),
('Molho de Tomate', 130),
('Orégano', 96),
('Cebola', 130),
('Tomate', 130),
('Massa de Pizza', 95),
('Chocolate ao Leite', 28),
('Creme de Leite', 70),
('Granulado', 28),
('Raspas de Chocolate', 70),
('Confeitos', 70),
('Morango', 70),
('Banana', 70),
('Leite Condensado', 70),
('Sorvete de creme', 28),
('Calda de doce de leite', 70);

INSERT INTO dbselfpaypizzas.tbpedido (idPedido, idClient, dataPedido, valorTotal, statusPedido, quantidade) 
VALUES 
(1, 8, NOW(), 18.00, 'em_preparação', 1),
(2, 30, NOW(), 17.45, 'entregue', 1),
(3, 30, NOW(), 17.45, 'entregue', 1),
(4, 30, NOW(), 20.19, 'entregue', 1),
(5, 30, NOW(), 18.00, 'entregue', 1),
(6, 30, NOW(), 19.77, 'entregue', 1),
(7, 30, NOW(), 25.36, 'entregue', 1),
(8, 30, NOW(), 20.19, 'entregue', 1),
(9, 30, NOW(), 18.00, 'entregue', 1),
(10, 30, NOW(), 36.00, 'entregue', 2),
(11, 30, NOW(), 18.00, 'entregue', 1),
(12, 30, NOW(), 18.55, 'entregue', 1),
(13, 32, NOW(), 60.57, 'pendente', 3);
