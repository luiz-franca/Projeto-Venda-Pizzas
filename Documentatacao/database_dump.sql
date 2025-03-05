-- MySQL dump 10.13  Distrib 8.0.41, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: selfpizza2
-- ------------------------------------------------------
-- Server version	8.0.41-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbAdmin`
--

DROP TABLE IF EXISTS `tbAdmin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbAdmin` (
  `idAdmin` int NOT NULL AUTO_INCREMENT,
  `nomeAdmin` varchar(60) NOT NULL,
  `emailAdmin` varchar(40) NOT NULL,
  `loginAdmin` varchar(40) NOT NULL,
  `senhaAdmin` varchar(60) NOT NULL,
  PRIMARY KEY (`idAdmin`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbAdmin`
--

LOCK TABLES `tbAdmin` WRITE;
/*!40000 ALTER TABLE `tbAdmin` DISABLE KEYS */;
INSERT INTO `tbAdmin` VALUES (1,'gustavo','joao@example.com1','joao123','$2b$10$OVvVLzL9Dp5283DrkIO5nOzSZavxpmxZ68K/xAgqS7NiclIpQxvPe'),(2,'gustavo','joao@example.com1','joao123','$2b$10$eU.Pyvkqdo6iMK5KdrEtnOSCaA7/lPxM2Dpjy/PB3vd9GSvIL/YNu'),(3,'gustavo','joao@example.com1','joao123','$2b$10$f7VHQcKJsGtTpf1lwdBVPuik1U.s28gAgS7itmthxG299y0a/3cCC'),(4,'gustavo','joao@example.com','joao123','$2b$10$eMcDNQ9lzAIOjOZ64PYQi.JMHXk7wB12Hxfe.0d5xkd0jXP8vLoNm');
/*!40000 ALTER TABLE `tbAdmin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbCliente`
--

DROP TABLE IF EXISTS `tbCliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbCliente` (
  `idCliente` int NOT NULL AUTO_INCREMENT,
  `nomeCliente` varchar(60) NOT NULL,
  `telefone` varchar(40) NOT NULL,
  `endereco` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  PRIMARY KEY (`idCliente`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbCliente`
--

LOCK TABLES `tbCliente` WRITE;
/*!40000 ALTER TABLE `tbCliente` DISABLE KEYS */;
INSERT INTO `tbCliente` VALUES (1,'João Silva','123456789','Rua Exemplo, 123','joao@example.com'),(2,'gustavo','123141','dasda','gustavo@gmail.ciom'),(3,'Debora Larysasa','12341231','dasdasd','deby@debora.com'),(4,'João Silva','123456789','Rua Exemplo, 123','joao@example.com'),(5,'aslan test','123456','casa de tete','aslan@teste'),(6,'marcilio','84991383819','rua nova conquista','freitas.marcilio33@gmail.com'),(7,'junior','84991383819','rua nova conquista','junior@email.com'),(8,'dev','8499999999','rua nova conquista','dev@email.com'),(9,'novato','8491889878','rua dos chinas, 123','novato@email.com'),(10,'cliente','8499898799','rua do cliente','cliente@email.com'),(11,'teste','8491999499','rua do fulano','teste@email.com'),(12,'maria','84998989899','rua da maria','maria@email.com'),(13,'bruno','84991383819','rua do bruno','bruno@email.com'),(14,'outro','84979797989','rua do outro','outro@email.com'),(15,'gustavo','84999988888','rua nova teste,68','gustavo@email.com'),(16,'novoteste','84999999999','rua do fulano','novoteste@email.com'),(17,'breno','8491999499','rua nova conquista','breno@email.com'),(18,'aslan','1234','1234565','aslan@gmail.com');
/*!40000 ALTER TABLE `tbCliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbEstoque`
--

DROP TABLE IF EXISTS `tbEstoque`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbEstoque` (
  `idEstoque` int NOT NULL AUTO_INCREMENT,
  `nomeInsumo` varchar(50) NOT NULL,
  `quantidade` int NOT NULL,
  PRIMARY KEY (`idEstoque`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbEstoque`
--

LOCK TABLES `tbEstoque` WRITE;
/*!40000 ALTER TABLE `tbEstoque` DISABLE KEYS */;
INSERT INTO `tbEstoque` VALUES (1,'Parafuso',100);
/*!40000 ALTER TABLE `tbEstoque` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbItem`
--

DROP TABLE IF EXISTS `tbItem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbItem` (
  `idItem` int NOT NULL AUTO_INCREMENT,
  `nomeItem` varchar(60) NOT NULL,
  `precoItem` float NOT NULL,
  `descricaoItem` text,
  `imagemUrl` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`idItem`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbItem`
--

LOCK TABLES `tbItem` WRITE;
/*!40000 ALTER TABLE `tbItem` DISABLE KEYS */;
INSERT INTO `tbItem` VALUES (1,'Mussarela',20.19,'Descrição da pizza em mais de uma linha muito legal bem interessante','images/pizza.png'),(2,'Calabresa',18,'Descrição da pizza em mais de uma linha muito legal bem interessante','images/pizza2.png'),(3,'Quatro Queijos',17.45,'Descrição da pizza em mais de uma linha muito legal bem interessante','images/pizza3.png'),(4,'Americana',19.77,'Descrição da pizza em mais de uma linha muito legal bem interessante','images/pizza4.png'),(5,'Sorvete',21.43,'Descrição da pizza em mais de uma linha muito legal bem interessante','images/pizza5.png'),(6,'Moda da Casa',18.55,'Descrição da pizza em mais de uma linha muito legal bem interessante','images/pizza6.png'),(7,'Chocolate',25.36,'Descrição da pizza em mais de uma linha muito legal bem interessante','images/pizza7.png'),(8,'Frango c/ Catupiry',25.36,'Descrição da pizza em mais de uma linha muito legal bem interessante','images/pizza.png');
/*!40000 ALTER TABLE `tbItem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbItemEstoque`
--

DROP TABLE IF EXISTS `tbItemEstoque`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbItemEstoque` (
  `idItem` int NOT NULL,
  `idEstoque` int NOT NULL,
  `quantidade` int DEFAULT NULL,
  PRIMARY KEY (`idItem`,`idEstoque`),
  KEY `idEstoque` (`idEstoque`),
  CONSTRAINT `tbItemEstoque_ibfk_1` FOREIGN KEY (`idItem`) REFERENCES `tbItem` (`idItem`),
  CONSTRAINT `tbItemEstoque_ibfk_2` FOREIGN KEY (`idEstoque`) REFERENCES `tbEstoque` (`idEstoque`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbItemEstoque`
--

LOCK TABLES `tbItemEstoque` WRITE;
/*!40000 ALTER TABLE `tbItemEstoque` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbItemEstoque` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbLogEstoque`
--

DROP TABLE IF EXISTS `tbLogEstoque`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbLogEstoque` (
  `idLogEstoque` int NOT NULL AUTO_INCREMENT,
  `idAdmin` int DEFAULT NULL,
  `idEstoque` int DEFAULT NULL,
  `quantidadeAlterada` int DEFAULT NULL,
  `dataAlteracao` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idLogEstoque`),
  KEY `tbAdmin_logEstoque` (`idAdmin`),
  KEY `idEstoque` (`idEstoque`),
  CONSTRAINT `tbAdmin_logEstoque` FOREIGN KEY (`idAdmin`) REFERENCES `tbAdmin` (`idAdmin`) ON DELETE CASCADE,
  CONSTRAINT `tbLogEstoque_ibfk_2` FOREIGN KEY (`idEstoque`) REFERENCES `tbEstoque` (`idEstoque`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbLogEstoque`
--

LOCK TABLES `tbLogEstoque` WRITE;
/*!40000 ALTER TABLE `tbLogEstoque` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbLogEstoque` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbLogPedido`
--

DROP TABLE IF EXISTS `tbLogPedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbLogPedido` (
  `idLogPedido` int NOT NULL AUTO_INCREMENT,
  `idAdmin` int DEFAULT NULL,
  `idPedido` int DEFAULT NULL,
  `statusAlteradoPara` varchar(50) DEFAULT NULL,
  `dataAlteracao` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idLogPedido`),
  KEY `fk_pedido_logpedido` (`idPedido`),
  KEY `idAdmin` (`idAdmin`),
  CONSTRAINT `fk_pedido_logpedido` FOREIGN KEY (`idPedido`) REFERENCES `tbPedido` (`idPedido`) ON DELETE CASCADE,
  CONSTRAINT `tbLogPedido_ibfk_1` FOREIGN KEY (`idAdmin`) REFERENCES `tbAdmin` (`idAdmin`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbLogPedido`
--

LOCK TABLES `tbLogPedido` WRITE;
/*!40000 ALTER TABLE `tbLogPedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbLogPedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbPagamento`
--

DROP TABLE IF EXISTS `tbPagamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbPagamento` (
  `idPagamento` int NOT NULL AUTO_INCREMENT,
  `idPedido` int DEFAULT NULL,
  `valor` float NOT NULL,
  `formaPagamento` enum('pix','dinheiro','debito','credito','cupom') DEFAULT NULL,
  `dataPagametno` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idPagamento`),
  KEY `fk_idPedido_pagamento` (`idPedido`),
  CONSTRAINT `fk_idPedido_pagamento` FOREIGN KEY (`idPedido`) REFERENCES `tbPedido` (`idPedido`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbPagamento`
--

LOCK TABLES `tbPagamento` WRITE;
/*!40000 ALTER TABLE `tbPagamento` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbPagamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbPedido`
--

DROP TABLE IF EXISTS `tbPedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbPedido` (
  `idPedido` int NOT NULL AUTO_INCREMENT,
  `idClient` int DEFAULT NULL,
  `dataPedido` datetime DEFAULT CURRENT_TIMESTAMP,
  `valorTotal` float NOT NULL,
  `statusPedido` enum('pendente','em_preparação','saiu_para_entrega','entregue','cancelado') NOT NULL,
  PRIMARY KEY (`idPedido`),
  KEY `fk_idclient` (`idClient`),
  CONSTRAINT `fk_idclient` FOREIGN KEY (`idClient`) REFERENCES `tbCliente` (`idCliente`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbPedido`
--

LOCK TABLES `tbPedido` WRITE;
/*!40000 ALTER TABLE `tbPedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbPedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbPedidoItem`
--

DROP TABLE IF EXISTS `tbPedidoItem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbPedidoItem` (
  `idPedidoItem` int NOT NULL AUTO_INCREMENT,
  `pedidoIdItem` int DEFAULT NULL,
  `itemId` int DEFAULT NULL,
  `quantidade` int NOT NULL,
  `subtotal` float NOT NULL,
  PRIMARY KEY (`idPedidoItem`),
  KEY `fk_tbPedidoItem_item` (`itemId`),
  KEY `fk_tbPedidoItem_pedido` (`pedidoIdItem`),
  CONSTRAINT `fk_tbPedidoItem_item` FOREIGN KEY (`itemId`) REFERENCES `tbItem` (`idItem`),
  CONSTRAINT `fk_tbPedidoItem_pedido` FOREIGN KEY (`pedidoIdItem`) REFERENCES `tbPedido` (`idPedido`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbPedidoItem`
--

LOCK TABLES `tbPedidoItem` WRITE;
/*!40000 ALTER TABLE `tbPedidoItem` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbPedidoItem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `vwpedido`
--

DROP TABLE IF EXISTS `vwpedido`;
/*!50001 DROP VIEW IF EXISTS `vwpedido`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vwpedido` AS SELECT 
 1 AS `idClient`,
 1 AS `nomeCliente`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `vwpedido`
--

/*!50001 DROP VIEW IF EXISTS `vwpedido`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vwpedido` AS select `pe`.`idClient` AS `idClient`,`tc`.`nomeCliente` AS `nomeCliente` from (`dbselfpaypizzas`.`tbpedido` `pe` join `dbselfpaypizzas`.`tbcliente` `tc` on((0 <> `tc`.`idCliente`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-05  5:04:40
