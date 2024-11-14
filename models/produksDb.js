const db = require("../config/connection")

const getProdukDb = () => {
    const query = "SELECT * FROM nama_products"
        return db.execute(query)
}

const postProdukDb = (nama_product,kode_barang) => {
    const query  = `INSERT INTO nama_products (nama_product,kode_barang)
                    VALUES (?,?)`
    const value = [nama_product,kode_barang]
    return db.execute(query,value)
}

const patchProdukDb = (nama_product,kode_barang,id) => {
    
    const query = `UPDATE nama_products SET nama_product=?,kode_barang=?  WHERE id =?`
    const value = [nama_product,kode_barang,id]
    return db.execute(query,value)
}

const deleteProdukDb = (id) => {
    const query = `DELETE FROM nama_products WHERE id = ?`
    const value = [id]
        return db.execute(query,value)
}


module.exports = {getProdukDb,postProdukDb,patchProdukDb,deleteProdukDb}
    
                    