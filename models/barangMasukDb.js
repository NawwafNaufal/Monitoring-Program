const db = require("../config/connection")

const getProdukDb = () => {
    const query = "SELECT * FROM produk WHERE status = 'masuk' OR status = 'Barang Masuk'";
        return db.execute(query)
}

module.exports = {getProdukDb}