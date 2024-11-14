const db = require("../config/connection")

const getProdukDb = () => {
    const query = "SELECT * FROM produk"
        return db.execute(query)
}

const postProdukDb = ( id_produk,status) => {
    const query  = `INSERT INTO produk (id_produk,status)
                    VALUES (?,?)`
    const value = [id_produk,status]
    return db.execute(query,value)
}

const patchProdukDb = (id_produk,jumlah,tanggal,saldo,kg,komposisi,
    keterangan,gram,cm,js40,impurity,filth,temp,
    ph,moisture,whitness,grade,id) => {
    
    const query = `UPDATE produk SET id_produk=?,jumlah=?,tanggal=?,saldo=?,kg=?,komposisi=?,
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
    
                    