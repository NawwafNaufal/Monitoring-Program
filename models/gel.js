const db = require("../config/connection")

const getProdukDb = () => {
    const query = `SELECT
    EXTRACT(YEAR FROM lab.tanggal) AS tahun,
    EXTRACT(MONTH FROM lab.tanggal) AS bulan,
    SUM(CASE 
        WHEN lab.id_produk IN (3, 5, 6, 7) AND (lab.gr1 * lab.cm1) < 300 
        THEN lab.count ELSE 0 END) AS KNR,
    SUM(CASE 
        WHEN lab.id_produk = 1 AND (lab.gr1 * lab.cm1) < 300 
        THEN lab.count ELSE 0 END) AS ML,
    SUM(CASE 
        WHEN lab.id_produk = 2 AND (lab.gr1 * lab.cm1) < 300 
        THEN lab.count ELSE 0 END) AS KRS,
    SUM(CASE 
        WHEN lab.id_produk = 4 AND (lab.gr1 * lab.cm1) < 300 
        THEN lab.count ELSE 0 END) AS KPS,
    SUM(CASE 
        WHEN lab.id_produk = 8 AND (lab.gr1 * lab.cm1) < 300 
        THEN lab.count ELSE 0 END) AS COKL,
    SUM(CASE 
        WHEN lab.id_produk = 9 AND (lab.gr1 * lab.cm1) < 300 
        THEN lab.count ELSE 0 END) AS KD,
    SUM(CASE 
        WHEN lab.id_produk = 10 AND (lab.gr1 * lab.cm1) < 300 
        THEN lab.count ELSE 0 END) AS LAINYA,
    SUM(CASE 
        WHEN (lab.gr1 * lab.cm1) < 300 
        THEN lab.count ELSE 0 END) AS jumlah_nol
FROM (
    SELECT 
        lab.tanggal, 
        lab.id_produk, 
        COUNT(*) AS count,
        lab.gr1, 
        lab.cm1
    FROM lab
    JOIN ikan np ON lab.id_produk = np.id
    WHERE lab.id_produk IN (1, 2, 3, 4, 5, 6, 7, 8, 9, 10) 
    GROUP BY lab.tanggal, lab.id_produk, lab.gr1, lab.cm1
) AS lab
GROUP BY EXTRACT(YEAR FROM lab.tanggal), EXTRACT(MONTH FROM lab.tanggal);
`;
        return db.execute(query)
}

module.exports = {getProdukDb}