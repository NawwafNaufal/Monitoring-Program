const db = require("../../config/connection")

const getProdukDb = () => {
    const query = "SELECT COUNT(jumlah) FROM produk";
        return db.execute(query)
}

module.exports = {getProdukDb}