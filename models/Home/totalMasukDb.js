const db = require("../../config/connection")

const getProdukDb = () => {
    const query = "SELECT COUNT(id_produk) FROM produk WHERE status = 'masuk' OR status = 'Barang Masuk'";
        return db.execute(query)
}

module.exports = {getProdukDb}