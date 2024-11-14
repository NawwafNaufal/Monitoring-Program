const db = require("../config/connection")

const getProdukDb = () => {
    const query = `SELECT
    EXTRACT(YEAR FROM tanggal) AS tahun,
    EXTRACT(MONTH FROM tanggal) AS bulan,
    SUM(CASE WHEN id_produk IN (3, 5, 6, 7) THEN count ELSE 0 END) AS KNR,
    SUM(CASE WHEN id_produk = 1 THEN count ELSE 0 END) AS ML,
    SUM(CASE WHEN id_produk = 2 THEN count ELSE 0 END) AS KRS,
    SUM(CASE WHEN id_produk = 4 THEN count ELSE 0 END) AS KPS,
    SUM(CASE WHEN id_produk = 8 THEN count ELSE 0 END) AS COKL,
    SUM(CASE WHEN id_produk = 9 THEN count ELSE 0 END) AS KD,
    SUM(CASE WHEN id_produk = 10 THEN count ELSE 0 END) AS LAINYA
FROM (
    SELECT tanggal, id_produk, COUNT(*) AS count
    FROM lab
    WHERE id_produk IN (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    GROUP BY tanggal, id_produk
) AS subquery
GROUP BY EXTRACT(YEAR FROM tanggal), EXTRACT(MONTH FROM tanggal)`;
        return db.execute(query)
}

module.exports = {getProdukDb}