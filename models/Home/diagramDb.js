const db = require("../../config/connection")

const getProdukDb = () => {
    const query = "SELECT COUNT(id_produk) FROM barang_kembali";
        return db.execute(query)
}

module.exports = {getProdukDb}