-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 07 Jul 2021 pada 08.03
-- Versi server: 10.4.18-MariaDB
-- Versi PHP: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `be24`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `city`
--

CREATE TABLE `city` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `city`
--

INSERT INTO `city` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'jakarta', '2021-07-04 21:24:10', '2021-07-04 21:24:10');

-- --------------------------------------------------------

--
-- Struktur dari tabel `houses`
--

CREATE TABLE `houses` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `typeRent` varchar(255) DEFAULT NULL,
  `amenities` varchar(255) DEFAULT NULL,
  `bedroom` int(11) DEFAULT NULL,
  `bathroom` int(11) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `city_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `houses`
--

INSERT INTO `houses` (`id`, `name`, `address`, `price`, `typeRent`, `amenities`, `bedroom`, `bathroom`, `image`, `city_id`, `createdAt`, `updatedAt`) VALUES
(19, 'rumah alfian', 'jakpus', 10000, 'year', 'Furnished,pet Allowed,Shared Acomodities', 2, 1, '1625595262204-photo-1603574670812-d24560880210.jpg', 1, '2021-07-05 10:01:34', '2021-07-06 18:14:22');

-- --------------------------------------------------------

--
-- Struktur dari tabel `listas`
--

CREATE TABLE `listas` (
  `id` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `listas`
--

INSERT INTO `listas` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'owner', '2021-07-05 16:27:14', '2021-07-05 16:27:14'),
(2, 'user', '2021-07-05 16:27:29', '2021-07-05 16:27:29');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20210701022522-create-user.js'),
('20210703124026-create-city.js'),
('20210703153238-create-house.js'),
('20210705140945-create-list-as.js'),
('20210706062804-create-transaction.js');

-- --------------------------------------------------------

--
-- Struktur dari tabel `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `checkin` datetime DEFAULT NULL,
  `checkout` datetime DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `attachment` varchar(255) DEFAULT NULL,
  `user_id` int(255) DEFAULT NULL,
  `houseId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `transactions`
--

INSERT INTO `transactions` (`id`, `name`, `checkin`, `checkout`, `total`, `status`, `attachment`, `user_id`, `houseId`, `createdAt`, `updatedAt`) VALUES
(1, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-06 14:46:55', '2021-07-06 14:46:55'),
(2, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-06 14:47:16', '2021-07-06 14:47:16'),
(3, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-06 14:50:55', '2021-07-06 14:50:55'),
(4, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-06 15:17:08', '2021-07-06 15:17:08'),
(5, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-06 15:17:10', '2021-07-06 15:17:10'),
(6, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-06 15:18:04', '2021-07-06 15:18:04'),
(7, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-06 15:18:42', '2021-07-06 15:18:42'),
(8, 'trx1', '2021-06-30 17:00:00', '2022-06-30 17:00:00', NULL, NULL, '1625595268037-photo-1603574670812-d24560880210.jpg', 1, 19, '2021-07-06 15:22:23', '2021-07-06 18:14:28'),
(9, 'trx1', '2021-06-30 17:00:00', '2022-06-30 17:00:00', NULL, NULL, NULL, 1, 19, '2021-07-06 15:30:22', '2021-07-06 15:30:22'),
(10, 'trx1', '2021-06-30 17:00:00', '2022-06-30 17:00:00', NULL, NULL, NULL, 1, 19, '2021-07-06 15:30:49', '2021-07-06 15:30:49'),
(11, 'trx1', '2021-06-30 17:00:00', '2022-06-30 17:00:00', NULL, NULL, NULL, 1, 19, '2021-07-06 15:31:21', '2021-07-06 15:31:21'),
(12, 'trx1', '2021-06-30 17:00:00', '2022-06-30 17:00:00', NULL, NULL, NULL, 1, 19, '2021-07-06 15:32:12', '2021-07-06 15:32:12'),
(13, 'trx1', '2021-06-30 17:00:00', '2022-06-30 17:00:00', NULL, NULL, NULL, 1, 19, '2021-07-06 15:33:11', '2021-07-06 15:33:11'),
(14, 'trx1', '2021-06-30 17:00:00', '2022-06-30 17:00:00', NULL, NULL, NULL, 1, 19, '2021-07-06 15:34:59', '2021-07-06 15:34:59'),
(15, 'trx1', '2021-06-30 17:00:00', '2022-06-30 17:00:00', NULL, NULL, NULL, 1, 19, '2021-07-06 15:36:36', '2021-07-06 15:36:36'),
(16, 'trx1', '2021-06-30 17:00:00', '2022-06-30 17:00:00', NULL, NULL, NULL, 1, 19, '2021-07-06 15:50:27', '2021-07-06 15:50:27'),
(17, 'trx1', '2021-06-30 17:00:00', '2022-06-30 17:00:00', NULL, NULL, NULL, 1, 19, '2021-07-06 15:56:00', '2021-07-06 15:56:00'),
(18, 'trx1', '2021-06-30 17:00:00', '2022-06-30 17:00:00', NULL, NULL, NULL, 1, 19, '2021-07-06 16:35:33', '2021-07-06 16:35:33'),
(19, 'trx1', '2021-06-30 17:00:00', '2022-06-30 17:00:00', NULL, NULL, NULL, 1, 19, '2021-07-06 16:36:47', '2021-07-06 16:36:47'),
(20, 'trx1', '2021-06-30 17:00:00', '2022-06-30 17:00:00', NULL, NULL, NULL, 1, 19, '2021-07-06 16:37:14', '2021-07-06 16:37:14'),
(21, 'trx1', '2021-06-30 17:00:00', '2022-06-30 17:00:00', NULL, NULL, NULL, 1, 19, '2021-07-06 16:37:29', '2021-07-06 16:37:29'),
(22, 'trx1', '2021-06-30 17:00:00', '2022-06-30 17:00:00', NULL, NULL, NULL, 1, 19, '2021-07-06 16:37:47', '2021-07-06 16:37:47'),
(23, 'trx1', '2021-06-30 17:00:00', '2022-06-30 17:00:00', NULL, NULL, NULL, 1, 19, '2021-07-06 16:40:45', '2021-07-06 16:40:45'),
(24, 'trx1', '2021-06-30 17:00:00', '2022-06-30 17:00:00', NULL, NULL, NULL, 1, 19, '2021-07-06 16:44:33', '2021-07-06 16:44:33'),
(25, 'trx1', '2021-06-30 17:00:00', '2022-06-30 17:00:00', NULL, NULL, NULL, 1, 19, '2021-07-06 16:46:00', '2021-07-06 16:46:00'),
(26, 'trx1', '2021-06-30 17:00:00', '2022-06-30 17:00:00', NULL, NULL, NULL, 1, 19, '2021-07-06 16:47:56', '2021-07-06 16:47:56'),
(27, 'trx1', '2021-06-30 17:00:00', '2022-06-30 17:00:00', NULL, NULL, NULL, 1, 19, '2021-07-06 16:48:29', '2021-07-06 16:48:29'),
(28, 'trx1', '2021-06-30 17:00:00', '2022-06-30 17:00:00', NULL, NULL, NULL, 1, 19, '2021-07-06 16:50:02', '2021-07-06 16:50:02');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `listasid` int(11) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `house_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `fullname`, `username`, `email`, `password`, `image`, `listasid`, `gender`, `address`, `house_id`, `createdAt`, `updatedAt`) VALUES
(1, 'udin', '', 'alfian1@gmail.com', '$2b$10$k43C29fQEpn0QQHPDQU5kuUBrn..uO6PRDbdpsCdatjZXGVsNOgeC', '1625478104756-photo-1603574670812-d24560880210.jpg', 1, 'male', '', 0, '2021-07-04 16:47:41', '2021-07-05 09:41:44'),
(4, 'alfianuser', '', 'alfianuser@gmail.com', '$2b$10$9fC5OVpVps/2/fE8TJmmSujOcioLKtMdPZhrKghBPOWlT5ismufgK', NULL, 2, '', '', 0, '2021-07-05 15:35:30', '2021-07-05 15:35:30'),
(5, 'alfianuser2', '', 'alfianuser2@gmail.com', '$2b$10$fW5kecE./ggJK5NVCWFD1OByajCvNpnaQ2M0pNJn0GZxQ6Cg8LdJK', NULL, 2, 'female', '', 0, '2021-07-05 15:37:16', '2021-07-05 15:37:16'),
(6, 'alfianuser3', '', 'alfianuser4@gmail.com', '$2b$10$j75BJ361ZwLDJ9eI.c09zuRiyD8MCMuy.gbSLcNC/rhEvBvkyqJYy', NULL, 2, 'female', '', 0, '2021-07-05 15:39:42', '2021-07-05 15:39:42'),
(7, 'alfianuser5', '', 'alfianuser5@gmail.com', '$2b$10$JklO4u5/EwQf9a5BtvpifO7i/8MbSIrJSAftIKtCPCPsGmma5V9Sa', NULL, 2, 'female', '', 0, '2021-07-05 15:43:34', '2021-07-05 15:43:34'),
(8, 'alfianuser6', 'alfianuser6', 'alfianuser6@gmail.com', '$2b$10$fO6jih4.6L.aXSagmS17NeuY.7/eV496iWh2jPcwUHxwsfYda5yFS', NULL, 2, 'female', 'jakarta pusat ', 0, '2021-07-05 16:01:14', '2021-07-05 16:01:14');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `houses`
--
ALTER TABLE `houses`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indeks untuk tabel `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `houses`
--
ALTER TABLE `houses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT untuk tabel `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
