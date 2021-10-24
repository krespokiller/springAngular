-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-10-2021 a las 06:21:30
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bootyapp`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(14);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tabla1`
--

CREATE TABLE `tabla1` (
  `REGid` int(6) NOT NULL,
  `REGIdentifica` int(12) NOT NULL,
  `REGNombres` varchar(20) NOT NULL,
  `REGApellidos` varchar(20) NOT NULL,
  `REGCorreo` varchar(40) NOT NULL,
  `REGMovil` int(10) NOT NULL,
  `REGDireccion` varchar(100) NOT NULL,
  `REGMunicipio` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tabla1`
--

INSERT INTO `tabla1` (`REGid`, `REGIdentifica`, `REGNombres`, `REGApellidos`, `REGCorreo`, `REGMovil`, `REGDireccion`, `REGMunicipio`) VALUES
(6, 123456789, 'David', 'Vargas', 'david@david.com', 1234567892, 'avenida siempre viva', 1111),
(7, 9856312, 'Sergio', 'Pachon', 'sergio@sergio.com', 678921234, 'avenida siempre viva', 1111),
(8, 685744563, 'Jhonatan', 'Ortiz', 'Jhonatan@jhonatan.com', 123547821, 'avenida siempre viva', 1111),
(9, 654235, 'Edgar', 'Vivar', 'asdasd@asdasd.com', 123456789, 'kli', 1111),
(13, 25478635, 'Cristina', 'Vargas', 'davidsantiago@asdasd', 320379347, 'asdasdasd', 1234);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tabla1`
--
ALTER TABLE `tabla1`
  ADD PRIMARY KEY (`REGid`),
  ADD UNIQUE KEY `REGIdentifica` (`REGIdentifica`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tabla1`
--
ALTER TABLE `tabla1`
  MODIFY `REGid` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
