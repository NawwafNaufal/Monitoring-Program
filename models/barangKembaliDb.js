const db = require("../config/connection")

const getProdukDb = () => {
    const query = "SELECT * FROM barang_kembali JOIN nama_products ON barang_kembali.id_produk = nama_products.id"
        return db.execute(query)
}

const postProdukDb = (id_produk,jumlah,tanggal,saldo,kg,komposisi,
    keterangan,tujuan,penerima_barang,gram,cm,js40,impurity,filth,
    temp,ph,moisture,whitness,grade) => {
    const query  = `INSERT INTO barang_kembali (
    id_produk,jumlah,tanggal,saldo,kg,komposisi,
    keterangan,tujuan,penerima_barang,gram,cm,js40,impurity,filth,
    temp,ph,moisture,whitness,grade)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
    const value = [
        id_produk || null,
        jumlah || null,
        tanggal || null,
        saldo || null,
        kg || null,
        komposisi || null,
        keterangan || null,
        tujuan || null,
        penerima_barang || null,
        gram || null,
        cm || null,
        js40 || null,
        impurity || null,
        filth || null,
        temp || null,
        ph || null,
        moisture || null,
        whitness || null,
        grade || null]
    return db.execute(query,value)
}

const patchProdukDb = (id_produk,jumlah,tanggal,saldo,kg,komposisi,
    keterangan,gram,cm,js40,impurity,filth,temp,
    ph,moisture,whitness,grade,id) => {
    
    const query = `UPDATE barang_kembali SET id_produk=?,jumlah=?,tanggal=?,saldo=?,kg=?,komposisi=?,
                        keterangan=?,gram=?,cm=?,js40=?,impurity=?,filth=?,temp=?,
                        ph=?,moisture=?,whitness=?,grade=? WHERE id =?`
    const value = [id_produk,jumlah,tanggal,saldo,kg,komposisi,
        keterangan,gram,cm,js40,impurity,filth,temp,
        ph,moisture,whitness,grade,id]
    return db.execute(query,value)
}

const deleteProdukDb = (id) => {
    const query = `DELETE FROM produk WHERE id = ?`
    const value = [id]
        return db.execute(query,value)
}


module.exports = {getProdukDb,postProdukDb,patchProdukDb,deleteProdukDb}
    
                    