-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: dbselfpaypizzas
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB

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
  `idAdmin` int(11) NOT NULL AUTO_INCREMENT,
  `nomeAdmin` varchar(60) NOT NULL,
  `emailAdmin` varchar(40) NOT NULL,
  `loginAdmin` varchar(40) NOT NULL,
  `senhaAdmin` varchar(60) NOT NULL,
  PRIMARY KEY (`idAdmin`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbadmin`
--

LOCK TABLES `tbadmin` WRITE;
/*!40000 ALTER TABLE `tbadmin` DISABLE KEYS */;
INSERT INTO `tbadmin` VALUES (2,'marcilio','marbass18@gmail.com','marbass18@gmail.com','$2b$10$CDSnmNAW3nYP0Clnx4vXC.6Kr61E9j2ou0PYFR65Z9glKB2p8A/G2'),(4,'funcionario','funcionario@email.com','funciona','$2b$10$gxi0lOTlc/c4ThvEFstKyeE4q2OwebKOp5jnNeFNOHgqQe2ixtjUK'),(5,'funcionario','funcionario@email.com','funciona','$2b$10$XOxsnR6hZGtxYlz1wVSCHOAniisyvicvrOIxV.ejdDoy7f7LSbrhG'),(6,'funcionario','funcionario@email.com','funciona','$2b$10$ksHm1DxkL9moh17FKqjaK.Vmdl4NG0jAPiyn5nASvccwCj2YYjeKC'),(7,'novo','novo@email.com','novo','$2b$10$hr6lZ9470QK6sHQyOgX0KuZGhvQSKg9Oe0Eeh2N6kGv1S.1pCEAWS'),(8,'genesis','genesis@email.com','genesis123','$2b$10$oeVCqDGICXmDZgN2cLJmAOcb8qbwt1wbKcsDVFmZr9YNInY4mXjcS'),(9,'marbass18@gmail.com','marbass18@gmail.com','marcilio','$2b$10$3WAjbT4IdQLJ9smqicrlGuBnglIhAG33vSZY0r57DuhEmDYOjB1vG'),(10,'marbass18@gmail.com','marbass18@gmail.com','marcilio','$2b$10$PI3grpWED2/sLKD1SpivDulbV7PZu0uqLMvex0W40src0VCFZKA1u');
/*!40000 ALTER TABLE `tbadmin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbcliente`
--

DROP TABLE IF EXISTS `tbcliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbcliente` (
  `idCliente` int(11) NOT NULL AUTO_INCREMENT,
  `nomeCliente` varchar(60) NOT NULL,
  `telefone` varchar(40) NOT NULL,
  `endereco` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `senha` varchar(60) NOT NULL,
  PRIMARY KEY (`idCliente`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbcliente`
--

LOCK TABLES `tbcliente` WRITE;
/*!40000 ALTER TABLE `tbcliente` DISABLE KEYS */;
INSERT INTO `tbcliente` VALUES (30,'marcilio','84991383819','rua nova conquista','freitas.marcilio33@gmail.com',''),(32,'junior','84991383819','rua nova conquista','junior@email.com',''),(33,'dev','8499999999','rua nova conquista','dev@email.com',''),(34,'cliente','8499898799','rua do cliente','cliente@email.com',''),(35,'teste','8491999499','rua do fulano','teste@email.com',''),(36,'maria','84998989899','rua da maria','maria@email.com',''),(37,'bruno','84991383819','rua do bruno','bruno@email.com',''),(39,'outro','84979797989','rua do outro','outro@email.com',''),(41,'novoteste','84999999999','rua do fulano','novoteste@email.com',''),(42,'breno','8491999499','rua nova conquista','breno@email.com',''),(44,'juliana','84988887576','rua da ju,78','juliana@email.com',''),(45,'gustavo','8499999999','rua do fulano','gustavo@email.com',''),(46,'novo','8497877879','rua do novo, 23','novo@email.com',''),(47,'Customer da silva','84991383749','rua do fulano','customer@email.com','');
/*!40000 ALTER TABLE `tbcliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbestoque`
--

DROP TABLE IF EXISTS `tbestoque`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbestoque` (
  `idEstoque` int(11) NOT NULL AUTO_INCREMENT,
  `nomeInsumo` varchar(50) NOT NULL,
  `quantidade` int(11) NOT NULL,
  PRIMARY KEY (`idEstoque`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbestoque`
--

LOCK TABLES `tbestoque` WRITE;
/*!40000 ALTER TABLE `tbestoque` DISABLE KEYS */;
INSERT INTO `tbestoque` VALUES (1,'Queijo Mussarela',34),(2,'Presunto',130),(3,'Queijo Ralado',130),(4,'Calabresa Fatiada',130),(5,'Frango Desfiado',130),(6,'Catupiry',130),(7,'Molho de Tomate',130),(8,'Orégano',32),(9,'Cebola',130),(10,'Tomate',130),(11,'Massa de Pizza',33),(12,'Chocolate ao Leite',-35),(13,'Creme de Leite',70),(14,'Granulado',-35),(15,'Raspas de Chocolate',70),(16,'Confeitos',70),(17,'Morango',70),(18,'Banana',70),(19,'Leite Condensado',70),(20,'Sorvete de creme',-34),(21,'Calda de doce de leite',70);
/*!40000 ALTER TABLE `tbestoque` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbitem`
--

DROP TABLE IF EXISTS `tbitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbitem` (
  `idItem` int(11) NOT NULL AUTO_INCREMENT,
  `nomeItem` varchar(60) NOT NULL,
  `precoItem` float NOT NULL,
  `descricaoItem` varchar(120) NOT NULL,
  `imagemUrl` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`idItem`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
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
  `idLogPedido` int(11) NOT NULL AUTO_INCREMENT,
  `idAdmin` int(11) DEFAULT NULL,
  `idPedido` int(11) DEFAULT NULL,
  `statusAlteradoPara` varchar(50) DEFAULT NULL,
  `dataAlteracao` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`idLogPedido`),
  KEY `fk_pedido_logpedido` (`idPedido`),
  KEY `tbLogPedido_ibfk_1` (`idAdmin`),
  CONSTRAINT `fk_pedido_logpedido` FOREIGN KEY (`idPedido`) REFERENCES `tbpedido` (`idPedido`) ON DELETE CASCADE,
  CONSTRAINT `tbLogPedido_ibfk_1` FOREIGN KEY (`idAdmin`) REFERENCES `tbadmin` (`idAdmin`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblogpedido`
--

LOCK TABLES `tblogpedido` WRITE;
/*!40000 ALTER TABLE `tblogpedido` DISABLE KEYS */;
INSERT INTO `tblogpedido` VALUES (1,2,2,'em producao','2025-02-26 12:59:56'),(4,2,33,'em producao','2025-02-26 22:02:29'),(5,2,40,'em producao','2025-02-26 23:21:49'),(6,2,41,'em producao','2025-02-26 23:22:04'),(7,2,42,'em producao','2025-02-26 23:22:48'),(12,2,48,'em producao','2025-02-28 01:09:29'),(13,2,49,'em producao','2025-02-28 01:13:20'),(14,2,50,'em producao','2025-02-28 01:42:55'),(15,2,51,'em producao','2025-02-28 01:50:13'),(16,2,52,'em producao','2025-02-28 01:59:03'),(17,2,52,'em producao','2025-02-28 02:42:40'),(18,2,52,'em producao','2025-02-28 02:52:05'),(19,2,52,'em producao','2025-03-01 14:34:12'),(20,2,52,'em producao','2025-03-01 14:34:38'),(21,2,52,'em producao','2025-03-01 14:36:08'),(22,2,52,'em producao','2025-03-01 14:40:54'),(23,2,67,'em producao','2025-03-01 15:13:04'),(24,2,68,'em producao','2025-03-01 15:14:09'),(25,2,69,'em producao','2025-03-01 15:19:36'),(26,2,70,'em producao','2025-03-01 18:47:36'),(27,2,71,'em producao','2025-03-01 20:17:52'),(28,2,72,'em producao','2025-03-01 20:24:02'),(29,2,73,'em producao','2025-03-01 20:24:43'),(30,2,74,'em producao','2025-03-01 21:09:43'),(31,2,75,'em producao','2025-03-01 21:37:25'),(32,2,76,'em producao','2025-03-01 21:39:59'),(33,2,77,'em producao','2025-03-01 21:40:17'),(34,2,78,'em producao','2025-03-01 21:58:54'),(35,2,79,'em producao','2025-03-01 22:00:07'),(36,2,80,'em producao','2025-03-02 18:10:20'),(37,2,81,'em producao','2025-03-02 19:29:53'),(38,2,82,'em producao','2025-03-02 20:18:33'),(39,2,83,'em producao','2025-03-02 20:45:49'),(40,2,86,'em producao','2025-03-02 21:43:40'),(41,2,94,'em producao','2025-03-03 18:27:05'),(42,2,95,'em producao','2025-03-03 18:28:53'),(43,2,96,'em producao','2025-03-03 18:29:06'),(44,2,97,'em producao','2025-03-03 18:29:10'),(45,2,98,'em producao','2025-03-03 18:39:51'),(46,2,99,'em producao','2025-03-03 20:20:54'),(47,2,114,'em producao','2025-03-05 18:02:27'),(48,2,115,'em producao','2025-03-05 18:03:48'),(49,2,116,'em producao','2025-03-05 18:06:49'),(50,2,117,'em producao','2025-03-05 18:12:45'),(51,2,118,'em producao','2025-03-05 18:13:23'),(52,2,119,'em producao','2025-03-05 18:15:31'),(53,2,120,'em producao','2025-03-05 20:03:53'),(54,2,129,'em_preparação','2025-03-05 21:33:50'),(55,2,131,'em_preparação','2025-03-05 22:00:04'),(57,2,133,'em_preparação','2025-03-05 22:55:40'),(58,2,134,'em_preparação','2025-03-05 22:57:26'),(59,2,135,'em_preparação','2025-03-06 18:32:46'),(60,2,136,'em_preparação','2025-03-06 19:16:35'),(61,2,137,'em_preparação','2025-03-06 19:17:29'),(62,2,138,'em_preparação','2025-03-06 19:18:38'),(63,2,139,'em_preparação','2025-03-06 19:20:00'),(64,2,140,'em_preparação','2025-03-06 19:21:43'),(65,2,141,'em_preparação','2025-03-06 19:23:30'),(66,2,142,'em_preparação','2025-03-06 22:58:22'),(67,2,143,'em_preparação','2025-03-07 22:52:03'),(68,2,144,'em_preparação','2025-05-02 22:18:43'),(69,2,145,'em_preparação','2025-05-02 22:19:03'),(70,2,146,'em_preparação','2025-05-05 22:10:10'),(71,2,147,'em_preparação','2025-05-05 22:11:53'),(72,2,148,'em_preparação','2025-05-05 22:12:12'),(73,2,149,'em_preparação','2025-05-05 22:12:38'),(74,2,150,'em_preparação','2025-05-05 23:44:06'),(75,2,151,'em_preparação','2025-05-05 23:56:09'),(80,2,156,'em_preparação','2025-05-14 22:31:42'),(81,2,157,'em_preparação','2025-05-14 22:31:52'),(83,2,159,'em_preparação','2025-05-14 23:48:28'),(84,2,160,'em_preparação','2025-05-14 23:48:37'),(85,2,161,'em_preparação','2025-05-14 23:55:11');
/*!40000 ALTER TABLE `tblogpedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbpagamento`
--

DROP TABLE IF EXISTS `tbpagamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbpagamento` (
  `idPagamento` int(11) NOT NULL AUTO_INCREMENT,
  `idPedido` int(11) DEFAULT NULL,
  `valor` float NOT NULL,
  `formaPagamento` enum('pix','dinheiro','debito','credito','cupom') DEFAULT NULL,
  `dataPagametno` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`idPagamento`),
  KEY `fk_idPedido_pagamento` (`idPedido`),
  CONSTRAINT `fk_idPedido_pagamento` FOREIGN KEY (`idPedido`) REFERENCES `tbpedido` (`idPedido`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=136 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbpagamento`
--

LOCK TABLES `tbpagamento` WRITE;
/*!40000 ALTER TABLE `tbpagamento` DISABLE KEYS */;
INSERT INTO `tbpagamento` VALUES (1,42,100,'pix','2025-02-28 00:14:00'),(2,37,50.57,'pix','2025-03-01 12:17:01'),(3,37,89.15,'pix','2025-03-01 12:56:34'),(4,37,89.15,'pix','2025-03-01 12:57:49'),(5,37,89.15,'pix','2025-03-01 12:58:12'),(6,37,89.15,'pix','2025-03-01 12:58:51'),(7,37,89.15,'pix','2025-03-01 12:59:42'),(8,37,89.15,'pix','2025-03-01 13:00:15'),(9,37,89.15,'pix','2025-03-01 13:00:32'),(10,37,89.15,'pix','2025-03-01 13:01:38'),(11,37,89.15,'pix','2025-03-01 13:02:09'),(12,37,89.15,'pix','2025-03-01 13:02:44'),(13,37,89.15,'pix','2025-03-01 13:03:21'),(14,37,89.15,'pix','2025-03-01 13:04:30'),(15,37,89.15,'pix','2025-03-01 13:04:59'),(16,37,89.15,'pix','2025-03-01 13:05:31'),(17,37,89.15,'pix','2025-03-01 13:05:56'),(18,37,89.15,'pix','2025-03-01 13:06:22'),(19,37,89.15,'pix','2025-03-01 13:06:40'),(20,37,89.15,'pix','2025-03-01 13:08:04'),(21,37,89.15,'pix','2025-03-01 13:10:08'),(22,37,89.15,'pix','2025-03-01 13:10:10'),(23,37,89.15,'pix','2025-03-01 13:10:25'),(24,37,89.15,'pix','2025-03-01 13:10:37'),(25,37,89.15,'pix','2025-03-01 13:11:10'),(26,37,89.15,'pix','2025-03-01 13:11:34'),(27,37,89.15,'pix','2025-03-01 13:12:08'),(28,37,89.15,'pix','2025-03-01 13:15:34'),(29,37,89.15,'pix','2025-03-01 13:15:57'),(30,37,89.15,'pix','2025-03-01 13:16:13'),(31,37,89.15,'pix','2025-03-01 13:16:40'),(32,37,89.15,'pix','2025-03-01 13:19:33'),(33,37,89.15,'pix','2025-03-01 13:20:38'),(34,37,89.15,'pix','2025-03-01 13:22:26'),(35,37,89.15,'pix','2025-03-01 13:23:46'),(36,37,89.15,'pix','2025-03-01 13:25:29'),(37,37,89.15,'pix','2025-03-01 13:26:15'),(38,37,89.15,'pix','2025-03-01 13:28:37'),(39,37,89.15,'pix','2025-03-01 13:29:37'),(40,37,89.15,'pix','2025-03-01 13:30:05'),(41,37,89.15,'pix','2025-03-01 13:30:31'),(42,37,89.15,'pix','2025-03-01 13:30:53'),(43,37,89.15,'pix','2025-03-01 13:32:53'),(44,37,89.15,'pix','2025-03-01 13:33:09'),(45,37,89.15,'pix','2025-03-01 13:34:59'),(46,37,89.15,'pix','2025-03-01 13:35:02'),(47,37,89.15,'pix','2025-03-01 13:39:23'),(48,37,89.15,'pix','2025-03-01 13:39:24'),(49,37,89.15,'pix','2025-03-01 13:39:47'),(50,37,89.15,'pix','2025-03-01 13:48:46'),(51,37,89.15,'pix','2025-03-01 13:49:17'),(52,37,89.15,'pix','2025-03-01 13:58:56'),(53,37,89.15,'pix','2025-03-01 14:01:41'),(54,37,89.15,'pix','2025-03-01 14:01:48'),(55,37,89.15,'pix','2025-03-01 14:09:26'),(56,37,89.15,'pix','2025-03-01 14:09:32'),(57,37,89.15,'pix','2025-03-01 14:10:56'),(58,37,89.15,'pix','2025-03-01 14:11:35'),(59,37,89.15,'pix','2025-03-01 14:14:34'),(60,37,89.15,'pix','2025-03-01 14:15:09'),(61,37,89.15,'pix','2025-03-01 14:18:24'),(62,37,89.15,'pix','2025-03-01 14:18:31'),(63,37,89.15,'pix','2025-03-01 14:18:33'),(64,37,89.15,'pix','2025-03-01 14:18:58'),(65,37,89.15,'pix','2025-03-01 14:19:02'),(66,37,89.15,'pix','2025-03-01 14:25:30'),(67,37,89.15,'pix','2025-03-01 14:25:32'),(68,37,89.15,'pix','2025-03-01 14:35:04'),(69,37,89.15,'pix','2025-03-01 14:35:06'),(70,37,89.15,'pix','2025-03-01 14:38:13'),(71,37,89.15,'pix','2025-03-01 14:38:20'),(72,37,89.15,'pix','2025-03-01 14:39:46'),(73,37,89.15,'pix','2025-03-01 14:40:08'),(74,37,89.15,'pix','2025-03-01 14:41:52'),(75,37,89.15,'pix','2025-03-01 14:43:31'),(76,37,89.15,'pix','2025-03-01 15:29:21'),(77,37,89.15,'debito','2025-03-01 15:29:51'),(78,37,303.91,'pix','2025-03-01 19:03:36'),(79,37,303.91,'pix','2025-03-01 19:05:56'),(80,37,303.91,'pix','2025-03-01 23:06:03'),(81,37,303.91,'pix','2025-03-01 23:07:56'),(82,37,303.91,'pix','2025-03-01 23:10:14'),(83,37,303.91,'pix','2025-03-01 23:11:07'),(84,37,303.91,'pix','2025-03-01 23:13:52'),(85,37,303.91,'pix','2025-03-01 23:17:05'),(86,37,303.91,'pix','2025-03-01 23:18:29'),(87,37,303.91,'debito','2025-03-01 23:21:12'),(88,37,303.91,'pix','2025-03-01 23:26:45'),(89,37,303.91,'pix','2025-03-01 23:46:32'),(90,37,303.91,'pix','2025-03-01 23:51:10'),(91,39,64.3,'pix','2025-03-02 17:53:30'),(92,41,112.84,'pix','2025-03-02 18:44:25'),(93,42,52.16,'pix','2025-03-03 14:30:06'),(94,42,52.16,'dinheiro','2025-03-03 14:31:08'),(95,42,52.16,'pix','2025-03-03 14:33:10'),(96,42,68.36,'pix','2025-03-03 14:44:10'),(97,42,68.36,'credito','2025-03-03 14:53:49'),(98,42,68.36,'debito','2025-03-03 14:58:48'),(99,42,68.36,'pix','2025-03-03 14:59:50'),(100,42,103.95,'pix','2025-03-03 15:16:24'),(101,42,103.95,'pix','2025-03-03 15:19:49'),(102,100,263.38,'pix','2025-03-05 17:22:34'),(103,100,384.92,'dinheiro','2025-03-05 17:29:41'),(104,2,481.75,'pix','2025-03-05 18:55:57'),(105,100,473.45,'credito','2025-03-05 19:00:36');
/*!40000 ALTER TABLE `tbpagamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbpedido`
--

DROP TABLE IF EXISTS `tbpedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbpedido` (
  `idPedido` int(11) NOT NULL AUTO_INCREMENT,
  `idClient` int(11) DEFAULT NULL,
  `dataPedido` datetime DEFAULT current_timestamp(),
  `valorTotal` float NOT NULL,
  `statusPedido` enum('pendente','em_preparação','saiu_para_entrega','entregue','cancelado') NOT NULL,
  `quantidade` int(11) DEFAULT NULL,
  PRIMARY KEY (`idPedido`),
  KEY `fk_idclient` (`idClient`),
  CONSTRAINT `fk_idclient` FOREIGN KEY (`idClient`) REFERENCES `tbcliente` (`idCliente`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=162 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbpedido`
--

LOCK TABLES `tbpedido` WRITE;
/*!40000 ALTER TABLE `tbpedido` DISABLE KEYS */;
INSERT INTO `tbpedido` VALUES (2,30,'2025-03-05 18:58:04',17.45,'saiu_para_entrega',1),(3,30,'2025-03-05 18:58:04',17.45,'saiu_para_entrega',1),(4,30,'2025-03-05 18:58:04',20.19,'saiu_para_entrega',1),(5,30,'2025-03-05 18:58:04',18,'saiu_para_entrega',1),(6,30,'2025-03-05 18:58:04',19.77,'saiu_para_entrega',1),(7,30,'2025-03-05 18:58:04',25.36,'saiu_para_entrega',1),(8,30,'2025-03-05 18:58:04',20.19,'saiu_para_entrega',1),(9,30,'2025-03-05 18:58:04',18,'saiu_para_entrega',1),(10,30,'2025-03-05 18:58:04',36,'saiu_para_entrega',2),(11,30,'2025-03-05 18:58:04',18,'saiu_para_entrega',1),(12,30,'2025-03-05 18:58:04',18.55,'saiu_para_entrega',1),(13,32,'0000-00-00 00:00:00',60.57,'pendente',3),(14,32,'0000-00-00 00:00:00',18,'pendente',1),(15,32,'0000-00-00 00:00:00',18,'pendente',1),(16,32,'0000-00-00 00:00:00',40.38,'pendente',2),(17,32,'0000-00-00 00:00:00',20.19,'pendente',1),(18,32,'0000-00-00 00:00:00',20.19,'pendente',1),(19,32,'0000-00-00 00:00:00',20.19,'pendente',1),(20,32,'0000-00-00 00:00:00',20.19,'pendente',1),(21,32,'0000-00-00 00:00:00',20.19,'pendente',1),(22,32,'0000-00-00 00:00:00',20.19,'pendente',1),(23,32,'0000-00-00 00:00:00',20.19,'pendente',1),(24,32,'0000-00-00 00:00:00',20.19,'pendente',1),(25,32,'0000-00-00 00:00:00',18,'pendente',1),(26,32,'0000-00-00 00:00:00',18,'pendente',1),(27,32,'0000-00-00 00:00:00',34.9,'pendente',1),(28,32,'0000-00-00 00:00:00',20.19,'pendente',1),(29,32,'0000-00-00 00:00:00',20.19,'pendente',1),(30,32,'0000-00-00 00:00:00',20.19,'pendente',1),(31,32,'0000-00-00 00:00:00',20.19,'pendente',1),(32,32,'0000-00-00 00:00:00',20.19,'pendente',1),(33,32,'0000-00-00 00:00:00',20.19,'pendente',1),(34,33,'2025-03-02 10:37:09',20.19,'em_preparação',1),(35,33,'2025-03-02 10:37:09',20.19,'em_preparação',1),(37,34,'0000-00-00 00:00:00',18,'pendente',1),(38,34,'0000-00-00 00:00:00',18,'pendente',1),(39,34,'0000-00-00 00:00:00',20.19,'pendente',1),(40,35,'0000-00-00 00:00:00',20.19,'pendente',1),(41,35,'0000-00-00 00:00:00',18,'pendente',1),(42,35,'0000-00-00 00:00:00',17.45,'pendente',1),(48,36,'0000-00-00 00:00:00',20.19,'pendente',1),(49,36,'0000-00-00 00:00:00',36,'pendente',2),(50,36,'0000-00-00 00:00:00',20.19,'pendente',1),(51,36,'0000-00-00 00:00:00',52.35,'pendente',3),(52,36,'0000-00-00 00:00:00',42.86,'pendente',2),(53,36,'0000-00-00 00:00:00',25.36,'pendente',1),(54,36,'0000-00-00 00:00:00',25.36,'pendente',1),(67,37,'2025-03-02 11:38:47',20.19,'saiu_para_entrega',1),(68,37,'2025-03-02 11:38:47',36,'saiu_para_entrega',2),(69,37,'2025-03-02 11:38:47',42.86,'saiu_para_entrega',2),(70,37,'2025-03-02 11:38:47',17.45,'saiu_para_entrega',1),(71,37,'2025-03-02 11:38:47',20.19,'saiu_para_entrega',1),(72,37,'2025-03-02 11:38:47',18.55,'saiu_para_entrega',1),(73,37,'2025-03-02 11:38:47',50.72,'saiu_para_entrega',2),(74,37,'2025-03-02 11:38:47',17.45,'saiu_para_entrega',1),(75,37,'2025-03-02 11:38:47',18,'saiu_para_entrega',1),(76,37,'2025-03-02 11:38:47',25.36,'saiu_para_entrega',1),(77,37,'2025-03-02 11:38:47',25.36,'saiu_para_entrega',1),(78,37,'2025-03-02 11:38:47',20.19,'saiu_para_entrega',1),(79,37,'2025-03-02 11:38:47',25.36,'saiu_para_entrega',1),(80,39,'2025-03-02 17:53:30',18,'em_preparação',1),(81,39,'2025-03-02 17:53:30',18,'em_preparação',1),(82,39,'2025-03-02 17:53:30',18,'em_preparação',1),(83,39,'2025-03-02 17:53:30',17.45,'em_preparação',1),(84,41,'2025-03-02 18:45:38',100.95,'saiu_para_entrega',5),(85,41,'2025-03-02 18:45:38',6.98,'saiu_para_entrega',2),(86,41,'2025-03-02 18:45:38',17.45,'saiu_para_entrega',1),(87,42,'2025-03-03 15:19:49',18,'em_preparação',1),(88,42,'2025-03-03 15:19:49',20.19,'em_preparação',1),(89,42,'2025-03-03 15:19:49',19.77,'em_preparação',1),(90,42,'2025-03-03 15:19:49',18,'em_preparação',1),(91,42,'2025-03-03 15:19:49',19.77,'em_preparação',1),(92,42,'2025-03-03 15:19:49',19.77,'em_preparação',1),(93,42,'2025-03-03 15:22:10',18.55,'pendente',1),(94,44,'2025-03-03 17:21:04',20.19,'em_preparação',1),(95,44,'2025-03-03 17:21:04',40.38,'em_preparação',2),(96,44,'2025-03-03 17:21:04',52.35,'em_preparação',3),(97,44,'2025-03-03 17:21:04',18,'em_preparação',1),(98,44,'2025-03-03 17:21:04',19.77,'em_preparação',1),(99,44,'2025-03-03 17:20:48',20.19,'pendente',1),(100,45,'2025-03-05 19:00:36',20.19,'em_preparação',1),(101,45,'2025-03-05 19:00:36',20.19,'em_preparação',1),(102,45,'2025-03-05 19:00:36',17.45,'em_preparação',1),(103,45,'2025-03-05 19:00:36',19.77,'em_preparação',1),(104,45,'2025-03-05 19:00:36',20.19,'em_preparação',1),(105,45,'2025-03-05 19:00:36',20.19,'em_preparação',1),(106,45,'2025-03-05 19:00:36',25.36,'em_preparação',1),(114,45,'2025-03-05 19:00:36',25.36,'em_preparação',1),(115,45,'2025-03-05 19:00:36',25.36,'em_preparação',1),(116,45,'2025-03-05 19:00:36',25.36,'em_preparação',1),(117,45,'2025-03-05 19:00:36',17.45,'em_preparação',1),(118,45,'2025-03-05 19:00:36',19.77,'em_preparação',1),(119,45,'2025-03-05 19:00:36',17.45,'em_preparação',1),(120,45,'2025-03-05 19:00:36',18.55,'em_preparação',1),(121,45,'2025-03-05 19:00:36',54,'em_preparação',3),(122,45,'2025-03-05 19:00:36',20.19,'em_preparação',1),(123,45,'2025-03-05 19:00:36',18,'em_preparação',1),(124,45,'2025-03-05 19:00:36',42.86,'em_preparação',2),(125,45,'2025-03-05 19:00:36',20.19,'em_preparação',1),(126,45,'2025-03-05 19:00:36',21.43,'em_preparação',1),(127,45,'2025-03-05 19:00:36',20.19,'em_preparação',1),(128,45,'2025-03-05 19:00:36',18.55,'em_preparação',1),(129,45,'2025-03-05 19:00:36',18,'em_preparação',1),(130,30,'2025-03-05 18:58:04',20.19,'saiu_para_entrega',1),(131,45,'2025-03-05 18:59:47',18,'pendente',1),(133,46,'2025-05-12 21:44:44',21.43,'em_preparação',1),(134,46,'2025-05-12 21:44:44',20.19,'em_preparação',1),(135,45,'2025-03-06 15:31:41',19.77,'pendente',1),(136,45,'2025-03-06 16:15:56',50.72,'pendente',2),(137,45,'2025-03-06 16:17:21',25.36,'pendente',1),(138,45,'2025-03-06 16:18:28',50.72,'pendente',2),(139,45,'2025-03-06 16:19:41',25.36,'pendente',1),(140,45,'2025-03-06 16:20:55',18.55,'pendente',1),(141,45,'2025-03-06 16:23:24',20.19,'pendente',1),(142,46,'2025-05-12 21:44:44',20.19,'em_preparação',1),(143,46,'2025-05-12 21:44:44',20.19,'em_preparação',1),(144,46,'2025-05-12 21:44:44',20.19,'em_preparação',1),(145,46,'2025-05-12 21:44:44',18,'em_preparação',1),(146,46,'2025-05-12 21:44:44',18,'em_preparação',1),(147,46,'2025-05-12 21:44:44',52.35,'em_preparação',3),(148,46,'2025-05-12 21:44:44',40.38,'em_preparação',2),(149,46,'2025-05-12 21:44:44',18.55,'em_preparação',1),(150,46,'2025-05-12 21:44:44',18,'em_preparação',1),(151,46,'2025-05-12 21:44:44',20.19,'em_preparação',1),(156,46,'2025-05-14 19:32:39',39.54,'em_preparação',2),(157,46,'2025-05-14 19:32:39',76.08,'em_preparação',3),(159,46,'2025-05-14 20:49:19',21.43,'em_preparação',1),(160,46,'2025-05-14 20:49:19',50.72,'em_preparação',2),(161,46,'2025-05-14 20:54:42',20.19,'pendente',1);
/*!40000 ALTER TABLE `tbpedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbpedidoitem`
--

DROP TABLE IF EXISTS `tbpedidoitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbpedidoitem` (
  `idPedidoItem` int(11) NOT NULL AUTO_INCREMENT,
  `pedidoIdItem` int(11) DEFAULT NULL,
  `itemId` int(11) DEFAULT NULL,
  `quantidade` int(11) NOT NULL,
  `subtotal` float NOT NULL,
  PRIMARY KEY (`idPedidoItem`),
  KEY `fk_tbPedidoItem_item` (`itemId`),
  KEY `fk_tbPedidoItem_pedido` (`pedidoIdItem`),
  CONSTRAINT `fk_tbPedidoItem_item` FOREIGN KEY (`itemId`) REFERENCES `tbitem` (`idItem`),
  CONSTRAINT `fk_tbPedidoItem_pedido` FOREIGN KEY (`pedidoIdItem`) REFERENCES `tbpedido` (`idPedido`)
) ENGINE=InnoDB AUTO_INCREMENT=133 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbpedidoitem`
--

LOCK TABLES `tbpedidoitem` WRITE;
/*!40000 ALTER TABLE `tbpedidoitem` DISABLE KEYS */;
INSERT INTO `tbpedidoitem` VALUES (9,7,2,2,212.8),(10,7,2,1,50.08),(12,8,3,1,50.08),(13,8,3,1,100.15),(14,8,3,1,150.23),(15,8,3,1,50.08),(16,8,3,1,50.08),(17,8,3,1,50.08),(18,8,3,1,50.08),(19,8,3,1,50.08),(20,8,3,1,50.08),(21,8,3,1,50.08),(22,8,3,1,50.08),(23,8,3,1,50.08),(24,8,3,1,50.08),(25,8,3,1,50.08),(26,8,3,1,50.08),(27,8,3,1,50.08),(28,8,3,1,16.2),(29,8,3,1,16.2),(30,8,3,1,16.2),(31,8,3,1,16.2),(32,8,3,1,31.9),(33,8,3,1,31.9),(34,8,3,1,31.9),(35,8,3,1,31.9),(36,49,2,2,36),(37,50,1,1,20.19),(38,51,3,3,52.35),(39,52,5,2,42.86),(44,67,1,1,20.19),(45,68,2,2,36),(46,69,5,2,42.86),(47,70,3,1,17.45),(49,71,1,1,20.19),(50,72,6,1,18.55),(51,73,8,2,50.72),(52,74,3,1,17.45),(53,75,2,1,18),(54,76,7,1,25.36),(55,77,7,1,25.36),(56,78,1,1,20.19),(57,79,8,1,25.36),(58,80,2,1,18),(59,81,2,1,18),(60,82,2,1,18),(61,83,3,1,17.45),(62,84,1,5,100.95),(63,85,3,2,6.98),(64,86,3,1,17.45),(65,87,2,1,18),(66,88,1,1,20.19),(67,89,4,1,19.77),(68,90,2,1,18),(69,91,4,1,19.77),(70,92,4,1,19.77),(71,93,6,1,18.55),(72,94,1,1,20.19),(73,95,1,2,40.38),(74,96,3,3,52.35),(75,97,2,1,18),(76,98,4,1,19.77),(77,99,1,1,20.19),(78,100,1,1,20.19),(79,101,1,1,20.19),(80,102,3,1,17.45),(81,103,4,1,19.77),(82,104,1,1,20.19),(83,105,1,1,20.19),(84,106,8,1,25.36),(85,114,7,1,25.36),(86,115,7,1,25.36),(87,116,8,1,25.36),(88,117,3,1,17.45),(89,118,4,1,19.77),(90,119,3,1,17.45),(91,120,6,1,18.55),(92,121,2,3,54),(93,122,1,1,20.19),(94,123,2,1,18),(95,124,5,2,42.86),(96,125,1,1,20.19),(97,126,5,1,21.43),(98,127,1,1,20.19),(99,128,6,1,18.55),(100,129,2,1,18),(101,130,1,1,20.19),(102,131,2,1,18),(106,135,4,1,19.77),(107,136,7,2,50.72),(108,137,7,1,25.36),(109,138,7,2,50.72),(110,139,8,1,25.36),(111,140,6,1,18.55),(112,141,1,1,20.19),(132,161,1,1,20.19);
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
-- Dumping routines for database 'dbselfpaypizzas'
--
/*!50003 DROP PROCEDURE IF EXISTS `spInsertLogPedido` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spInsertLogPedido`(IN spIdAdmin int, IN spIdPedido int,
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
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spInsertPedido` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spInsertPedido`(IN spIdCliente int, IN spNomeItem varchar(60),
                                                      IN spDataPedido datetime, IN spValorTotal float,
                                                      IN spStatusProduto varchar(20))
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
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spInsertTbPagamento` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spInsertTbPagamento`(IN spIdPedido int, IN spValor float, IN spFormaPagamento varchar(30))
BEGIN
    IF EXISTS(SELECT 1 FROM tbPedido WHERE idPedido = spIdPedido) THEN
        INSERT INTO tbPagamento(idPedido, valor, formaPagamento)
            VALUES (spIdPedido,spValor,spFormaPagamento);
        SELECT 'Pagamento adicionado' AS mensagem;
    ELSE
        SELECT 'Pagamento não foi adicionado' AS mensagem;
    end if ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spUpDateAdmin` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spUpDateAdmin`(IN spIdAmin int, IN spNomeAdmin varchar(60),
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
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spUpdateCliente` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spUpdateCliente`(IN spIdcliente int, IN spNomeCliente varchar(60),
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
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spUpdateEstoque` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spUpdateEstoque`(IN spIdEstoque int, IN spNomeEstoque varchar(40), IN spQuantidade int)
BEGIN
    IF EXISTS(SELECT 1 FROM tbEstoque tE WHERE tE.idEstoque = spIdEstoque) THEN
        UPDATE tbEstoque tE SET tE.nomeInsumo= spNomeEstoque,
                                tE.quantidade= spQuantidade WHERE tE.idEstoque = spIdEstoque;
        SELECT 'Estoque alterado com sucesso' as messagem;
    ELSE
        SELECT 'idEsto não existe' As mensagem;
    end if ;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spUpdateItem` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spUpdateItem`(IN spIdItem int, IN spNomeItem varchar(50), IN spPrecoItem float,
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
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spUpdatePagamento` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spUpdatePagamento`(IN spIdPagamento int, IN spIdPedido int, IN spValor float,
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
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spUpdatePedido` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spUpdatePedido`(
    IN spIdPedido INT,
    IN spIdClient INT,
    IN spDataPedido DATETIME,
    IN spValorTotal FLOAT,
    IN spStatusPedido VARCHAR(40),
    IN spQUantidade INT
)
BEGIN
    -- Verifica se o pedido existe
    IF EXISTS (SELECT 1 FROM tbPedido WHERE idPedido = spIdPedido) THEN
        -- Atualiza o pedido
        UPDATE tbPedido
        SET idClient = spIdClient,
            dataPedido = spDataPedido,
            valorTotal = spValorTotal,
            statusPedido = spStatusPedido,
            quantidade = spQuantidade
        WHERE idPedido = spIdPedido;

        SELECT 'Pedido Alterado Com Sucesso' AS mensagem;
    ELSE
        SELECT 'idPedido não existe' AS mensagem;
    END IF;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spUpdatePedidoItem` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spUpdatePedidoItem`(IN spIdPedidoItem int, IN spPedidoIdItem int, IN spItemId int,
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
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spUpdatePedidosItem` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spUpdatePedidosItem`(IN spIdPedidoItem int, IN spIdPedido int, IN spIdItem int,
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
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spViewPedido` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spViewPedido`(IN spIdPedido int)
BEGIN
    SELECT * FROM vwPedido pe WHERE pe.idClient = spIdPedido;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

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
/*!50001 VIEW `vwpedido` AS select `pe`.`idClient` AS `idClient`,`tc`.`nomeCliente` AS `nomeCliente` from (`tbpedido` `pe` join `tbcliente` `tc` on(0 <> `tc`.`idCliente`)) */;
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

-- Dump completed on 2025-05-20  9:37:01
