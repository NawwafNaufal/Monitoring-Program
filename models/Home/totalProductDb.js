const db = require("../../config/connection")

const getProdukDb = () => {
    const query = "SELECT COUNT(nama_product) FROM nama_products";
        return db.execute(query)
}

module.exports = {getProdukDb}