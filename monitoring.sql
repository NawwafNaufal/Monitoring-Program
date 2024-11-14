-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 14, 2024 at 09:08 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `monitoring`
--

-- --------------------------------------------------------

--
-- Table structure for table `barang_kembali`
--

CREATE TABLE `barang_kembali` (
  `id` int NOT NULL,
  `id_produk` int DEFAULT NULL,
  `jumlah` decimal(7,2) DEFAULT NULL,
  `tanggal` date DEFAULT NULL,
  `saldo` decimal(7,2) DEFAULT NULL,
  `kg` decimal(7,2) DEFAULT NULL,
  `komposisi` varchar(200) DEFAULT NULL,
  `keterangan` text,
  `tujuan` varchar(100) DEFAULT NULL,
  `penerima_barang` varchar(100) DEFAULT NULL,
  `gram` decimal(7,2) DEFAULT NULL,
  `cm` decimal(7,2) DEFAULT NULL,
  `js40` decimal(7,2) DEFAULT NULL,
  `impurity` decimal(7,2) DEFAULT NULL,
  `filth` decimal(7,2) DEFAULT NULL,
  `temp` decimal(7,2) DEFAULT NULL,
  `ph` decimal(7,2) DEFAULT NULL,
  `moisture` decimal(7,2) DEFAULT NULL,
  `whitness` decimal(7,2) DEFAULT NULL,
  `grade` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `barang_kembali`
--

INSERT INTO `barang_kembali` (`id`, `id_produk`, `jumlah`, `tanggal`, `saldo`, `kg`, `komposisi`, `keterangan`, `tujuan`, `penerima_barang`, `gram`, `cm`, `js40`, `impurity`, `filth`, `temp`, `ph`, `moisture`, `whitness`, `grade`) VALUES
(1, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `ikan`
--

CREATE TABLE `ikan` (
  `id` int NOT NULL,
  `nama_ikan` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `ikan`
--

INSERT INTO `ikan` (`id`, `nama_ikan`) VALUES
(1, 'Mata Lebar'),
(2, 'Kurisi'),
(3, 'Kuniran Kuning'),
(4, 'Kapasan'),
(5, 'Kuniran Putih'),
(6, 'Kuniran Mix'),
(7, 'Kuniran Merah'),
(8, 'Coklatan'),
(9, 'Kd'),
(10, 'Lainya'),
(11, 'GEL STRENGHT'),
(12, 'Moisture'),
(13, 'Whiteness'),
(14, 'Bau');

-- --------------------------------------------------------

--
-- Table structure for table `lab`
--

CREATE TABLE `lab` (
  `id` int NOT NULL,
  `id_produk` int DEFAULT NULL,
  `tanggal` date DEFAULT NULL,
  `gr1` decimal(7,2) DEFAULT NULL,
  `cm1` decimal(7,2) DEFAULT NULL,
  `zero` decimal(7,2) DEFAULT NULL,
  `gr2` decimal(7,2) DEFAULT NULL,
  `cm2` decimal(7,2) DEFAULT NULL,
  `numb40` decimal(7,2) DEFAULT NULL,
  `impurity` decimal(7,2) DEFAULT NULL,
  `filth` decimal(7,2) DEFAULT NULL,
  `them_product` decimal(7,2) DEFAULT NULL,
  `ph` decimal(7,2) DEFAULT NULL,
  `moisture` decimal(7,2) DEFAULT NULL,
  `whitness` decimal(7,2) DEFAULT NULL,
  `remark` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `lab`
--

INSERT INTO `lab` (`id`, `id_produk`, `tanggal`, `gr1`, `cm1`, `zero`, `gr2`, `cm2`, `numb40`, `impurity`, `filth`, `them_product`, `ph`, `moisture`, `whitness`, `remark`) VALUES
(2, 3, '2024-11-09', '1.00', '2.00', '1.00', '2.00', '1.00', '2.00', '1.00', '2.00', '1.00', '2.00', '2.00', '1.00', '1'),
(3, 1, '2024-11-01', '2.00', '2.00', '2.00', '2.00', '2.00', '2.00', '2.00', '2.00', '2.00', '2.00', '2.00', '2.00', 'AAA'),
(4, 6, '2024-11-09', '2.00', '1.00', '2.00', '1.00', '2.00', '1.00', '2.00', '1.00', '2.00', '1.00', '1.00', '32.00', 'SSS'),
(5, 7, '2024-11-02', '2.00', '2.00', '2.00', '2.00', '2.00', '2.00', '2.00', '2.00', '2.00', '2.00', '1.00', '2.00', 'AAA'),
(6, 2, '2024-11-15', '1.00', '1.00', '1.00', '1.00', '1.00', '1.00', '1.00', '1.00', '1.00', '1.00', '88.00', '1.00', 'AAA'),
(7, 2, '2024-11-02', '200.00', '300.00', '2.00', '2.00', '1.00', '1.00', '1.00', '1.00', '1.00', '1.00', '1.00', '1.00', 'AAA'),
(8, 5, '2024-11-02', '1.00', '2.00', '1.00', '2.00', '1.00', '2.00', '1.00', '1.00', '1.00', '1.00', '1.00', '1.00', 'Bau'),
(9, 2, '2024-10-10', '2.00', '2.00', '2.00', '2.00', '2.00', '2.00', '2.00', '2.00', '2.00', '2.00', '2.00', '2.00', 'Bau'),
(10, 5, '2024-11-15', '4.00', '1.00', '2.00', '2.00', '1.00', '2.00', '1.00', '2.00', '1.00', '3.00', '2.00', '2.00', 'AAA');

-- --------------------------------------------------------

--
-- Table structure for table `nama_products`
--

CREATE TABLE `nama_products` (
  `id` int NOT NULL,
  `nama_product` varchar(100) DEFAULT NULL,
  `kode_barang` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nama_products`
--

INSERT INTO `nama_products` (`id`, `nama_product`, `kode_barang`) VALUES
(1, 'Surimi', 'S002'),
(2, 'Scalop', '23232'),
(3, '09:32', '1'),
(4, '09:49', '1');

-- --------------------------------------------------------

--
-- Table structure for table `produk`
--

CREATE TABLE `produk` (
  `id` int NOT NULL,
  `id_produk` int DEFAULT NULL,
  `jumlah` decimal(7,2) DEFAULT NULL,
  `tanggal` date DEFAULT NULL,
  `saldo` decimal(7,2) DEFAULT NULL,
  `kg` decimal(7,2) DEFAULT NULL,
  `komposisi` varchar(200) DEFAULT NULL,
  `keterangan` text,
  `tujuan` varchar(100) DEFAULT NULL,
  `gram` decimal(7,2) DEFAULT NULL,
  `cm` decimal(7,2) DEFAULT NULL,
  `js40` decimal(7,2) DEFAULT NULL,
  `impurity` decimal(7,2) DEFAULT NULL,
  `filth` decimal(7,2) DEFAULT NULL,
  `temp` decimal(7,2) DEFAULT NULL,
  `ph` decimal(7,2) DEFAULT NULL,
  `moisture` decimal(7,2) DEFAULT NULL,
  `whitness` decimal(7,2) DEFAULT NULL,
  `grade` varchar(100) DEFAULT NULL,
  `status` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `produk`
--

INSERT INTO `produk` (`id`, `id_produk`, `jumlah`, `tanggal`, `saldo`, `kg`, `komposisi`, `keterangan`, `tujuan`, `gram`, `cm`, `js40`, `impurity`, `filth`, `temp`, `ph`, `moisture`, `whitness`, `grade`, `status`) VALUES
(1, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'masuk'),
(3, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Barang Masuk'),
(5, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Barang Masuk'),
(9, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(10, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(20, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Barang Masuk'),
(21, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Barang Masuk'),
(22, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Barang Masuk'),
(23, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Barang Masuk'),
(24, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Barang Keluar'),
(25, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Barang Keluar'),
(26, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Barang Masuk');

-- --------------------------------------------------------

--
-- Table structure for table `proses`
--

CREATE TABLE `proses` (
  `id` int NOT NULL,
  `jam` time DEFAULT NULL,
  `tanggal` date DEFAULT NULL,
  `id_ikan` int DEFAULT NULL,
  `organoleptik_receiving` int DEFAULT NULL,
  `temp_of_fish_receiving` int DEFAULT NULL,
  `reject_receiving` int DEFAULT NULL,
  `temp_of_fish_deheading` int DEFAULT NULL,
  `temp_of_product_washing_I` int DEFAULT NULL,
  `ph_leaching` int DEFAULT NULL,
  `temp_of_product_leaching` int DEFAULT NULL,
  `temp_of_product_mixing` int DEFAULT NULL,
  `bad_smell_mixing` int DEFAULT NULL,
  `bad_colour_mixing` int DEFAULT NULL,
  `moisture_forming` int DEFAULT NULL,
  `temp_of_product_forming` int DEFAULT NULL,
  `foreign_material_forming` int DEFAULT NULL,
  `temp_of_CPF_freezing` int DEFAULT NULL,
  `metal_calibration_packing` int DEFAULT NULL,
  `metal_inclusion_reject_packing` int DEFAULT NULL,
  `labeling_packing` int DEFAULT NULL,
  `temp_of_anteroom_storing` int DEFAULT NULL,
  `temp_of_CSR_1_storing` int DEFAULT NULL,
  `temp_of_CSR_2_storing` int DEFAULT NULL,
  `product_dehydration_storing` int DEFAULT NULL,
  `condensation_storing` int DEFAULT NULL,
  `container_check_stuffing` int DEFAULT NULL,
  `quality_stuffing` int DEFAULT NULL,
  `broken_stuffing` int DEFAULT NULL,
  `remark` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `proses`
--

INSERT INTO `proses` (`id`, `jam`, `tanggal`, `id_ikan`, `organoleptik_receiving`, `temp_of_fish_receiving`, `reject_receiving`, `temp_of_fish_deheading`, `temp_of_product_washing_I`, `ph_leaching`, `temp_of_product_leaching`, `temp_of_product_mixing`, `bad_smell_mixing`, `bad_colour_mixing`, `moisture_forming`, `temp_of_product_forming`, `foreign_material_forming`, `temp_of_CPF_freezing`, `metal_calibration_packing`, `metal_inclusion_reject_packing`, `labeling_packing`, `temp_of_anteroom_storing`, `temp_of_CSR_1_storing`, `temp_of_CSR_2_storing`, `product_dehydration_storing`, `condensation_storing`, `container_check_stuffing`, `quality_stuffing`, `broken_stuffing`, `remark`) VALUES
(1, '10:10:00', NULL, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, '1'),
(2, '10:26:00', '2024-11-07', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, '1');

-- --------------------------------------------------------

--
-- Table structure for table `value_lab`
--

CREATE TABLE `value_lab` (
  `id` int NOT NULL,
  `nama` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `barang_kembali`
--
ALTER TABLE `barang_kembali`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_barang` (`id_produk`);

--
-- Indexes for table `ikan`
--
ALTER TABLE `ikan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lab`
--
ALTER TABLE `lab`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_lab` (`id_produk`),
  ADD KEY `fk_lab_value` (`remark`);

--
-- Indexes for table `nama_products`
--
ALTER TABLE `nama_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_produk` (`id_produk`);

--
-- Indexes for table `proses`
--
ALTER TABLE `proses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_proses` (`id_ikan`);

--
-- Indexes for table `value_lab`
--
ALTER TABLE `value_lab`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `barang_kembali`
--
ALTER TABLE `barang_kembali`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `ikan`
--
ALTER TABLE `ikan`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `lab`
--
ALTER TABLE `lab`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `nama_products`
--
ALTER TABLE `nama_products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `produk`
--
ALTER TABLE `produk`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `proses`
--
ALTER TABLE `proses`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `value_lab`
--
ALTER TABLE `value_lab`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `barang_kembali`
--
ALTER TABLE `barang_kembali`
  ADD CONSTRAINT `fk_barang` FOREIGN KEY (`id_produk`) REFERENCES `nama_products` (`id`);

--
-- Constraints for table `lab`
--
ALTER TABLE `lab`
  ADD CONSTRAINT `fk_lab` FOREIGN KEY (`id_produk`) REFERENCES `ikan` (`id`);

--
-- Constraints for table `produk`
--
ALTER TABLE `produk`
  ADD CONSTRAINT `fk_produk` FOREIGN KEY (`id_produk`) REFERENCES `nama_products` (`id`);

--
-- Constraints for table `proses`
--
ALTER TABLE `proses`
  ADD CONSTRAINT `fk_proses` FOREIGN KEY (`id_ikan`) REFERENCES `ikan` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
