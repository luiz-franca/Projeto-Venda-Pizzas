-- MySQL dump 10.13  Distrib 8.0.41, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: dbselfpaypizzas
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
-- Table structure for table `tbadmin`
--

DROP TABLE IF EXISTS `tbadmin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbadmin` (
  `idAdmin` int NOT NULL AUTO_INCREMENT,
  `nomeAdmin` varchar(60) NOT NULL,
  `emailAdmin` varchar(40) NOT NULL,
  `loginAdmin` varchar(40) NOT NULL,
  `senhaAdmin` varchar(60) NOT NULL,
  PRIMARY KEY (`idAdmin`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbadmin`
--

LOCK TABLES `tbadmin` WRITE;
/*!40000 ALTER TABLE `tbadmin` DISABLE KEYS */;
INSERT INTO `tbadmin` VALUES (2,'marcilio','marbass18@gmail.com','marbass18@gmail.com','$2b$10$CDSnmNAW3nYP0Clnx4vXC.6Kr61E9j2ou0PYFR65Z9glKB2p8A/G2');
/*!40000 ALTER TABLE `tbadmin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbcliente`
--

DROP TABLE IF EXISTS `tbcliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbcliente` (
  `idCliente` int NOT NULL AUTO_INCREMENT,
  `nomeCliente` varchar(60) NOT NULL,
  `telefone` varchar(40) NOT NULL,
  `endereco` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `senha` varchar(60) NOT NULL,
  PRIMARY KEY (`idCliente`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbcliente`
--

LOCK TABLES `tbcliente` WRITE;
/*!40000 ALTER TABLE `tbcliente` DISABLE KEYS */;
INSERT INTO `tbcliente` VALUES (8,'novato','8491889878','rua dos chinas, 123','novato@email.com',''),(30,'marcilio','84991383819','rua nova conquista','freitas.marcilio33@gmail.com',''),(32,'junior','84991383819','rua nova conquista','junior@email.com',''),(33,'dev','8499999999','rua nova conquista','dev@email.com',''),(34,'cliente','8499898799','rua do cliente','cliente@email.com',''),(35,'teste','8491999499','rua do fulano','teste@email.com',''),(36,'maria','84998989899','rua da maria','maria@email.com',''),(37,'bruno','84991383819','rua do bruno','bruno@email.com',''),(39,'outro','84979797989','rua do outro','outro@email.com',''),(40,'gustavo','84999988888','rua nova teste,68','gustavo@email.com',''),(41,'novoteste','84999999999','rua do fulano','novoteste@email.com',''),(42,'breno','8491999499','rua nova conquista','breno@email.com','');
/*!40000 ALTER TABLE `tbcliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbestoque`
--

DROP TABLE IF EXISTS `tbestoque`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbestoque` (
  `idEstoque` int NOT NULL AUTO_INCREMENT,
  `nomeInsumo` varchar(50) NOT NULL,
  `quantidade` int NOT NULL,
  PRIMARY KEY (`idEstoque`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbestoque`
--

LOCK TABLES `tbestoque` WRITE;
/*!40000 ALTER TABLE `tbestoque` DISABLE KEYS */;
INSERT INTO `tbestoque` VALUES (1,'Queijo Mussarela',96),(2,'Presunto',130),(3,'Queijo Ralado',130),(4,'Calabresa Fatiada',130),(5,'Frango Desfiado',130),(6,'Catupiry',130),(7,'Molho de Tomate',130),(8,'Orégano',96),(9,'Cebola',130),(10,'Tomate',130),(11,'Massa de Pizza',95),(12,'Chocolate ao Leite',28),(13,'Creme de Leite',70),(14,'Granulado',28),(15,'Raspas de Chocolate',70),(16,'Confeitos',70),(17,'Morango',70),(18,'Banana',70),(19,'Leite Condensado',70),(20,'Sorvete de creme',28),(21,'Calda de doce de leite',70);
/*!40000 ALTER TABLE `tbestoque` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbitem`
--

DROP TABLE IF EXISTS `tbitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbitem` (
  `idItem` int NOT NULL AUTO_INCREMENT,
  `nomeItem` varchar(60) NOT NULL,
  `precoItem` float NOT NULL,
  `descricaoItem` varchar(120) NOT NULL,
  `imagemUrl` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`idItem`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbitem`
--

LOCK TABLES `tbitem` WRITE;
/*!40000 ALTER TABLE `tbitem` DISABLE KEYS */;
INSERT INTO `tbitem` VALUES (1,'Mussarela',20.19,'Descrição da pizza em mais de uma linha muito legal bem interessante','images/pizza.png'),(2,'Calabresa',18,'Descrição da pizza em mais de uma linha muito legal bem interessante','images/pizza2.png'),(3,'Quatro Queijos',17.45,'Descrição da pizza em mais de uma linha muito legal bem interessante','images/pizza3.png'),(4,'Americana',19.77,'Descrição da pizza em mais de uma linha muito legal bem interessante','images/pizza4.png'),(5,'Sorvete',21.43,'Descrição da pizza em mais de uma linha muito legal bem interessante','images/pizza5.png'),(6,'Moda da Casa',18.55,'Descrição da pizza em mais de uma linha muito legal bem interessante','images/pizza6.png'),(7,'Chocolate',25.36,'Descrição da pizza em mais de uma linha muito legal bem interessante','images/pizza7.png'),(8,'Frango c/ Catupiry',25.36,'Descrição da pizza em mais de uma linha muito legal bem interessante','images/pizza.png');
/*!40000 ALTER TABLE `tbitem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblogpedido`
--

DROP TABLE IF EXISTS `tblogpedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblogpedido` (
  `idLogPedido` int NOT NULL AUTO_INCREMENT,
  `idAdmin` int DEFAULT NULL,
  `idPedido` int DEFAULT NULL,
  `statusAlteradoPara` varchar(50) DEFAULT NULL,
  `dataAlteracao` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idLogPedido`),
  KEY `fk_pedido_logpedido` (`idPedido`),
  KEY `tbLogPedido_ibfk_1` (`idAdmin`),
  CONSTRAINT `fk_pedido_logpedido` FOREIGN KEY (`idPedido`) REFERENCES `tbpedido` (`idPedido`) ON DELETE CASCADE,
  CONSTRAINT `tbLogPedido_ibfk_1` FOREIGN KEY (`idAdmin`) REFERENCES `tbadmin` (`idAdmin`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblogpedido`
--

LOCK TABLES `tblogpedido` WRITE;
/*!40000 ALTER TABLE `tblogpedido` DISABLE KEYS */;
INSERT INTO `tblogpedido` VALUES (1,2,2,'em producao','2025-02-26 12:59:56'),(2,2,1,'em producao','2025-02-26 21:53:21'),(3,2,1,'em producao','2025-02-26 22:01:15'),(4,2,33,'em producao','2025-02-26 22:02:29'),(5,2,40,'em producao','2025-02-26 23:21:49'),(6,2,41,'em producao','2025-02-26 23:22:04'),(7,2,42,'em producao','2025-02-26 23:22:48'),(12,2,48,'em producao','2025-02-28 01:09:29'),(13,2,49,'em producao','2025-02-28 01:13:20'),(14,2,50,'em producao','2025-02-28 01:42:55'),(15,2,51,'em producao','2025-02-28 01:50:13'),(16,2,52,'em producao','2025-02-28 01:59:03'),(17,2,52,'em producao','2025-02-28 02:42:40'),(18,2,52,'em producao','2025-02-28 02:52:05'),(19,2,52,'em producao','2025-03-01 14:34:12'),(20,2,52,'em producao','2025-03-01 14:34:38'),(21,2,52,'em producao','2025-03-01 14:36:08'),(22,2,52,'em producao','2025-03-01 14:40:54'),(23,2,67,'em producao','2025-03-01 15:13:04'),(24,2,68,'em producao','2025-03-01 15:14:09'),(25,2,69,'em producao','2025-03-01 15:19:36'),(26,2,70,'em producao','2025-03-01 18:47:36'),(27,2,71,'em producao','2025-03-01 20:17:52'),(28,2,72,'em producao','2025-03-01 20:24:02'),(29,2,73,'em producao','2025-03-01 20:24:43'),(30,2,74,'em producao','2025-03-01 21:09:43'),(31,2,75,'em producao','2025-03-01 21:37:25'),(32,2,76,'em producao','2025-03-01 21:39:59'),(33,2,77,'em producao','2025-03-01 21:40:17'),(34,2,78,'em producao','2025-03-01 21:58:54'),(35,2,79,'em producao','2025-03-01 22:00:07'),(36,2,80,'em producao','2025-03-02 18:10:20'),(37,2,81,'em producao','2025-03-02 19:29:53'),(38,2,82,'em producao','2025-03-02 20:18:33'),(39,2,83,'em producao','2025-03-02 20:45:49'),(40,2,86,'em producao','2025-03-02 21:43:40');
/*!40000 ALTER TABLE `tblogpedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbpagamento`
--

DROP TABLE IF EXISTS `tbpagamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbpagamento` (
  `idPagamento` int NOT NULL AUTO_INCREMENT,
  `idPedido` int DEFAULT NULL,
  `valor` float NOT NULL,
  `formaPagamento` enum('pix','dinheiro','debito','credito','cupom') DEFAULT NULL,
  `dataPagametno` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idPagamento`),
  KEY `fk_idPedido_pagamento` (`idPedido`),
  CONSTRAINT `fk_idPedido_pagamento` FOREIGN KEY (`idPedido`) REFERENCES `tbpedido` (`idPedido`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbpagamento`
--

LOCK TABLES `tbpagamento` WRITE;
/*!40000 ALTER TABLE `tbpagamento` DISABLE KEYS */;
INSERT INTO `tbpagamento` VALUES (1,42,100,'pix','2025-02-28 00:14:00'),(2,37,50.57,'pix','2025-03-01 12:17:01'),(3,37,89.15,'pix','2025-03-01 12:56:34'),(4,37,89.15,'pix','2025-03-01 12:57:49'),(5,37,89.15,'pix','2025-03-01 12:58:12'),(6,37,89.15,'pix','2025-03-01 12:58:51'),(7,37,89.15,'pix','2025-03-01 12:59:42'),(8,37,89.15,'pix','2025-03-01 13:00:15'),(9,37,89.15,'pix','2025-03-01 13:00:32'),(10,37,89.15,'pix','2025-03-01 13:01:38'),(11,37,89.15,'pix','2025-03-01 13:02:09'),(12,37,89.15,'pix','2025-03-01 13:02:44'),(13,37,89.15,'pix','2025-03-01 13:03:21'),(14,37,89.15,'pix','2025-03-01 13:04:30'),(15,37,89.15,'pix','2025-03-01 13:04:59'),(16,37,89.15,'pix','2025-03-01 13:05:31'),(17,37,89.15,'pix','2025-03-01 13:05:56'),(18,37,89.15,'pix','2025-03-01 13:06:22'),(19,37,89.15,'pix','2025-03-01 13:06:40'),(20,37,89.15,'pix','2025-03-01 13:08:04'),(21,37,89.15,'pix','2025-03-01 13:10:08'),(22,37,89.15,'pix','2025-03-01 13:10:10'),(23,37,89.15,'pix','2025-03-01 13:10:25'),(24,37,89.15,'pix','2025-03-01 13:10:37'),(25,37,89.15,'pix','2025-03-01 13:11:10'),(26,37,89.15,'pix','2025-03-01 13:11:34'),(27,37,89.15,'pix','2025-03-01 13:12:08'),(28,37,89.15,'pix','2025-03-01 13:15:34'),(29,37,89.15,'pix','2025-03-01 13:15:57'),(30,37,89.15,'pix','2025-03-01 13:16:13'),(31,37,89.15,'pix','2025-03-01 13:16:40'),(32,37,89.15,'pix','2025-03-01 13:19:33'),(33,37,89.15,'pix','2025-03-01 13:20:38'),(34,37,89.15,'pix','2025-03-01 13:22:26'),(35,37,89.15,'pix','2025-03-01 13:23:46'),(36,37,89.15,'pix','2025-03-01 13:25:29'),(37,37,89.15,'pix','2025-03-01 13:26:15'),(38,37,89.15,'pix','2025-03-01 13:28:37'),(39,37,89.15,'pix','2025-03-01 13:29:37'),(40,37,89.15,'pix','2025-03-01 13:30:05'),(41,37,89.15,'pix','2025-03-01 13:30:31'),(42,37,89.15,'pix','2025-03-01 13:30:53'),(43,37,89.15,'pix','2025-03-01 13:32:53'),(44,37,89.15,'pix','2025-03-01 13:33:09'),(45,37,89.15,'pix','2025-03-01 13:34:59'),(46,37,89.15,'pix','2025-03-01 13:35:02'),(47,37,89.15,'pix','2025-03-01 13:39:23'),(48,37,89.15,'pix','2025-03-01 13:39:24'),(49,37,89.15,'pix','2025-03-01 13:39:47'),(50,37,89.15,'pix','2025-03-01 13:48:46'),(51,37,89.15,'pix','2025-03-01 13:49:17'),(52,37,89.15,'pix','2025-03-01 13:58:56'),(53,37,89.15,'pix','2025-03-01 14:01:41'),(54,37,89.15,'pix','2025-03-01 14:01:48'),(55,37,89.15,'pix','2025-03-01 14:09:26'),(56,37,89.15,'pix','2025-03-01 14:09:32'),(57,37,89.15,'pix','2025-03-01 14:10:56'),(58,37,89.15,'pix','2025-03-01 14:11:35'),(59,37,89.15,'pix','2025-03-01 14:14:34'),(60,37,89.15,'pix','2025-03-01 14:15:09'),(61,37,89.15,'pix','2025-03-01 14:18:24'),(62,37,89.15,'pix','2025-03-01 14:18:31'),(63,37,89.15,'pix','2025-03-01 14:18:33'),(64,37,89.15,'pix','2025-03-01 14:18:58'),(65,37,89.15,'pix','2025-03-01 14:19:02'),(66,37,89.15,'pix','2025-03-01 14:25:30'),(67,37,89.15,'pix','2025-03-01 14:25:32'),(68,37,89.15,'pix','2025-03-01 14:35:04'),(69,37,89.15,'pix','2025-03-01 14:35:06'),(70,37,89.15,'pix','2025-03-01 14:38:13'),(71,37,89.15,'pix','2025-03-01 14:38:20'),(72,37,89.15,'pix','2025-03-01 14:39:46'),(73,37,89.15,'pix','2025-03-01 14:40:08'),(74,37,89.15,'pix','2025-03-01 14:41:52'),(75,37,89.15,'pix','2025-03-01 14:43:31'),(76,37,89.15,'pix','2025-03-01 15:29:21'),(77,37,89.15,'debito','2025-03-01 15:29:51'),(78,37,303.91,'pix','2025-03-01 19:03:36'),(79,37,303.91,'pix','2025-03-01 19:05:56'),(80,37,303.91,'pix','2025-03-01 23:06:03'),(81,37,303.91,'pix','2025-03-01 23:07:56'),(82,37,303.91,'pix','2025-03-01 23:10:14'),(83,37,303.91,'pix','2025-03-01 23:11:07'),(84,37,303.91,'pix','2025-03-01 23:13:52'),(85,37,303.91,'pix','2025-03-01 23:17:05'),(86,37,303.91,'pix','2025-03-01 23:18:29'),(87,37,303.91,'debito','2025-03-01 23:21:12'),(88,37,303.91,'pix','2025-03-01 23:26:45'),(89,37,303.91,'pix','2025-03-01 23:46:32'),(90,37,303.91,'pix','2025-03-01 23:51:10'),(91,39,64.3,'pix','2025-03-02 17:53:30'),(92,41,112.84,'pix','2025-03-02 18:44:25');
/*!40000 ALTER TABLE `tbpagamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbpedido`
--

DROP TABLE IF EXISTS `tbpedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbpedido` (
  `idPedido` int NOT NULL AUTO_INCREMENT,
  `idClient` int DEFAULT NULL,
  `dataPedido` datetime DEFAULT CURRENT_TIMESTAMP,
  `valorTotal` float NOT NULL,
  `statusPedido` enum('pendente','em_preparação','saiu_para_entrega','entregue','cancelado') NOT NULL,
  `quantidade` int DEFAULT NULL,
  PRIMARY KEY (`idPedido`),
  KEY `fk_idclient` (`idClient`),
  CONSTRAINT `fk_idclient` FOREIGN KEY (`idClient`) REFERENCES `tbcliente` (`idCliente`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbpedido`
--

LOCK TABLES `tbpedido` WRITE;
/*!40000 ALTER TABLE `tbpedido` DISABLE KEYS */;
INSERT INTO `tbpedido` VALUES (1,8,'2025-03-02 11:11:56',18,'em_preparação',1),(2,30,'2025-03-02 11:12:08',17.45,'entregue',1),(3,30,'2025-03-02 11:12:08',17.45,'entregue',1),(4,30,'2025-03-02 11:12:08',20.19,'entregue',1),(5,30,'2025-03-02 11:12:08',18,'entregue',1),(6,30,'2025-03-02 11:12:08',19.77,'entregue',1),(7,30,'2025-03-02 11:12:08',25.36,'entregue',1),(8,30,'2025-03-02 11:12:08',20.19,'entregue',1),(9,30,'2025-03-02 11:12:08',18,'entregue',1),(10,30,'2025-03-02 11:12:08',36,'entregue',2),(11,30,'2025-03-02 11:12:08',18,'entregue',1),(12,30,'2025-03-02 11:12:08',18.55,'entregue',1),(13,32,'0000-00-00 00:00:00',60.57,'pendente',3),(14,32,'0000-00-00 00:00:00',18,'pendente',1),(15,32,'0000-00-00 00:00:00',18,'pendente',1),(16,32,'0000-00-00 00:00:00',40.38,'pendente',2),(17,32,'0000-00-00 00:00:00',20.19,'pendente',1),(18,32,'0000-00-00 00:00:00',20.19,'pendente',1),(19,32,'0000-00-00 00:00:00',20.19,'pendente',1),(20,32,'0000-00-00 00:00:00',20.19,'pendente',1),(21,32,'0000-00-00 00:00:00',20.19,'pendente',1),(22,32,'0000-00-00 00:00:00',20.19,'pendente',1),(23,32,'0000-00-00 00:00:00',20.19,'pendente',1),(24,32,'0000-00-00 00:00:00',20.19,'pendente',1),(25,32,'0000-00-00 00:00:00',18,'pendente',1),(26,32,'0000-00-00 00:00:00',18,'pendente',1),(27,32,'0000-00-00 00:00:00',34.9,'pendente',1),(28,32,'0000-00-00 00:00:00',20.19,'pendente',1),(29,32,'0000-00-00 00:00:00',20.19,'pendente',1),(30,32,'0000-00-00 00:00:00',20.19,'pendente',1),(31,32,'0000-00-00 00:00:00',20.19,'pendente',1),(32,32,'0000-00-00 00:00:00',20.19,'pendente',1),(33,32,'0000-00-00 00:00:00',20.19,'pendente',1),(34,33,'2025-03-02 10:37:09',20.19,'em_preparação',1),(35,33,'2025-03-02 10:37:09',20.19,'em_preparação',1),(37,34,'0000-00-00 00:00:00',18,'pendente',1),(38,34,'0000-00-00 00:00:00',18,'pendente',1),(39,34,'0000-00-00 00:00:00',20.19,'pendente',1),(40,35,'0000-00-00 00:00:00',20.19,'pendente',1),(41,35,'0000-00-00 00:00:00',18,'pendente',1),(42,35,'0000-00-00 00:00:00',17.45,'pendente',1),(48,36,'0000-00-00 00:00:00',20.19,'pendente',1),(49,36,'0000-00-00 00:00:00',36,'pendente',2),(50,36,'0000-00-00 00:00:00',20.19,'pendente',1),(51,36,'0000-00-00 00:00:00',52.35,'pendente',3),(52,36,'0000-00-00 00:00:00',42.86,'pendente',2),(53,36,'0000-00-00 00:00:00',25.36,'pendente',1),(54,36,'0000-00-00 00:00:00',25.36,'pendente',1),(67,37,'2025-03-02 11:38:47',20.19,'saiu_para_entrega',1),(68,37,'2025-03-02 11:38:47',36,'saiu_para_entrega',2),(69,37,'2025-03-02 11:38:47',42.86,'saiu_para_entrega',2),(70,37,'2025-03-02 11:38:47',17.45,'saiu_para_entrega',1),(71,37,'2025-03-02 11:38:47',20.19,'saiu_para_entrega',1),(72,37,'2025-03-02 11:38:47',18.55,'saiu_para_entrega',1),(73,37,'2025-03-02 11:38:47',50.72,'saiu_para_entrega',2),(74,37,'2025-03-02 11:38:47',17.45,'saiu_para_entrega',1),(75,37,'2025-03-02 11:38:47',18,'saiu_para_entrega',1),(76,37,'2025-03-02 11:38:47',25.36,'saiu_para_entrega',1),(77,37,'2025-03-02 11:38:47',25.36,'saiu_para_entrega',1),(78,37,'2025-03-02 11:38:47',20.19,'saiu_para_entrega',1),(79,37,'2025-03-02 11:38:47',25.36,'saiu_para_entrega',1),(80,39,'2025-03-02 17:53:30',18,'em_preparação',1),(81,39,'2025-03-02 17:53:30',18,'em_preparação',1),(82,39,'2025-03-02 17:53:30',18,'em_preparação',1),(83,39,'2025-03-02 17:53:30',17.45,'em_preparação',1),(84,41,'2025-03-02 18:45:38',100.95,'saiu_para_entrega',5),(85,41,'2025-03-02 18:45:38',6.98,'saiu_para_entrega',2),(86,41,'2025-03-02 18:45:38',17.45,'saiu_para_entrega',1);
/*!40000 ALTER TABLE `tbpedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbpedidoitem`
--

DROP TABLE IF EXISTS `tbpedidoitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbpedidoitem` (
  `idPedidoItem` int NOT NULL AUTO_INCREMENT,
  `pedidoIdItem` int DEFAULT NULL,
  `itemId` int DEFAULT NULL,
  `quantidade` int NOT NULL,
  `subtotal` float NOT NULL,
  PRIMARY KEY (`idPedidoItem`),
  KEY `fk_tbPedidoItem_item` (`itemId`),
  KEY `fk_tbPedidoItem_pedido` (`pedidoIdItem`),
  CONSTRAINT `fk_tbPedidoItem_item` FOREIGN KEY (`itemId`) REFERENCES `tbitem` (`idItem`),
  CONSTRAINT `fk_tbPedidoItem_pedido` FOREIGN KEY (`pedidoIdItem`) REFERENCES `tbpedido` (`idPedido`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbpedidoitem`
--

LOCK TABLES `tbpedidoitem` WRITE;
/*!40000 ALTER TABLE `tbpedidoitem` DISABLE KEYS */;
INSERT INTO `tbpedidoitem` VALUES (4,1,2,3,4),(5,1,2,2,31.41),(6,1,2,2,31.41),(7,1,2,2,31.41),(8,1,2,2,31.41),(9,7,2,2,212.8),(10,7,2,1,50.08),(12,8,3,1,50.08),(13,8,3,1,100.15),(14,8,3,1,150.23),(15,8,3,1,50.08),(16,8,3,1,50.08),(17,8,3,1,50.08),(18,8,3,1,50.08),(19,8,3,1,50.08),(20,8,3,1,50.08),(21,8,3,1,50.08),(22,8,3,1,50.08),(23,8,3,1,50.08),(24,8,3,1,50.08),(25,8,3,1,50.08),(26,8,3,1,50.08),(27,8,3,1,50.08),(28,8,3,1,16.2),(29,8,3,1,16.2),(30,8,3,1,16.2),(31,8,3,1,16.2),(32,8,3,1,31.9),(33,8,3,1,31.9),(34,8,3,1,31.9),(35,8,3,1,31.9),(36,49,2,2,36),(37,50,1,1,20.19),(38,51,3,3,52.35),(39,52,5,2,42.86),(44,67,1,1,20.19),(45,68,2,2,36),(46,69,5,2,42.86),(47,70,3,1,17.45),(49,71,1,1,20.19),(50,72,6,1,18.55),(51,73,8,2,50.72),(52,74,3,1,17.45),(53,75,2,1,18),(54,76,7,1,25.36),(55,77,7,1,25.36),(56,78,1,1,20.19),(57,79,8,1,25.36),(58,80,2,1,18),(59,81,2,1,18),(60,82,2,1,18),(61,83,3,1,17.45),(62,84,1,5,100.95),(63,85,3,2,6.98),(64,86,3,1,17.45);
/*!40000 ALTER TABLE `tbpedidoitem` ENABLE KEYS */;
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
/*!50001 VIEW `vwpedido` AS select `pe`.`idClient` AS `idClient`,`tc`.`nomeCliente` AS `nomeCliente` from (`tbpedido` `pe` join `tbcliente` `tc` on((0 <> `tc`.`idCliente`))) */;
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

-- Dump completed on 2025-03-05  4:50:31
