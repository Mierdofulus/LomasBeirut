-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: lomas_beirut
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `category` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Poker',5500.00,'Cerveza','2024-08-20 00:50:34'),(2,'Club Colombia dorada',6500.00,'Cerveza','2024-08-20 00:50:34'),(3,'Club Colombia roja',6500.00,'Cerveza','2024-08-20 00:50:34'),(4,'Club Colombia negra',6500.00,'Cerveza','2024-08-20 00:50:34'),(5,'Corona',10000.00,'Cerveza','2024-08-20 00:50:34'),(6,'Stella Artois',10000.00,'Cerveza','2024-08-20 00:50:34'),(7,'BBC Cajica',10000.00,'Cerveza','2024-08-20 00:50:34'),(8,'BBC Chapinero',10000.00,'Cerveza','2024-08-20 00:50:34'),(9,'BBC Monserrate',10000.00,'Cerveza','2024-08-20 00:50:34'),(10,'Gin-tonic',30000.00,'Cocteleria','2024-08-20 00:50:34'),(11,'Martini',30000.00,'Cocteleria','2024-08-20 00:50:34'),(12,'Margarita',25000.00,'Cocteleria','2024-08-20 00:50:34'),(13,'Orgasmo',25000.00,'Cocteleria','2024-08-20 00:50:34'),(14,'Mojito',25000.00,'Cocteleria','2024-08-20 00:50:34'),(15,'Tequila sunrise',25000.00,'Cocteleria','2024-08-20 00:50:34'),(16,'Daiquiri',25000.00,'Cocteleria','2024-08-20 00:50:34'),(17,'Jack Daniels',210000.00,'Licor','2024-08-20 00:50:34'),(18,'Jaggermeifter',210000.00,'Licor','2024-08-20 00:50:34'),(19,'Olmeca reposado',160000.00,'Licor','2024-08-20 00:50:34'),(20,'Olmeca silver',160000.00,'Licor','2024-08-20 00:50:34'),(21,'Absolut',210000.00,'Licor','2024-08-20 00:50:34'),(22,'Smirnoff',210000.00,'Licor','2024-08-20 00:50:34');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-19 19:55:18
