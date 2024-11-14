const db = require("../../config/connection")

const getProdukDb = () => {
    const query = "SELECT COUNT(id_produk) FROM produk WHERE status = 'keluar' OR status = 'Barang Keluar'";
        return db.execute(query)
}

module.exports = {getProdukDb}