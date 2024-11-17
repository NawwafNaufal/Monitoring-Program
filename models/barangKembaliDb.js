const db = require("../config/connection")

const getProdukDb = () => {
    const query = `SELECT bk.id,np.nama_product,bk.tanggal,bk.kg,bk.komposisi,bk.keterangan,bk.tujuan,bk.penerima_barang
,bk.gram,bk.cm,bk.js40,bk.impurity,bk.filth,bk.temp,bk.ph,bk.moisture,bk.whitness,bk.grade
FROM barang_kembali bk JOIN nama_products np ON bk.id_produk = np.id`
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
    const query = `DELETE FROM barang_kembali WHERE id = ?`
    const value = [id]
        return db.execute(query,value)
}


module.exports = {getProdukDb,postProdukDb,patchProdukDb,deleteProdukDb}
    
                    