const db = require("../config/connection")

const getProdukDb = () => {
    const query = "SELECT * FROM produk WHERE status = 'keluar' OR status = 'Barang Keluar'";
        return db.execute(query)
}


const deleteProdukDb = (id) => {
    const query = `DELETE FROM produk WHERE id = ?`
    const value = [id]
        return db.execute(query,value)
}

module.exports = {getProdukDb,deleteProdukDb}