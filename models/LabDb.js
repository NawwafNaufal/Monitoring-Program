const db = require("../config/connection")

const getLabkDb = () => {
    const query = `SELECT 
    lab.id,
    lab.tanggal,
    np.nama_ikan,
    lab.gr1,
    lab.cm1,
    lab.gr1 * lab.cm1 AS nol,
    lab.gr2,
    lab.cm2,
    lab.gr2 * lab.cm2 AS empat,
    lab.remark
FROM lab
JOIN ikan np ON lab.id_produk = np.id
GROUP BY 
    lab.id, 
    lab.tanggal, 
    np.nama_ikan, 
    lab.gr1, 
    lab.cm1, 
    lab.gr2, 
    lab.cm2, 
    lab.remark;`
        return db.execute(query)
}

const postLabDb = (id_produk,tanggal,gr1,cm1,zero,gr2,cm2,
    numb40,impurity,filth,them_product,ph,
    moisture,whitness,remark) => {
    const query  = `INSERT INTO lab (
    id_produk,tanggal,gr1,cm1,zero,gr2,cm2,
    numb40,impurity,filth,them_product,ph,
    moisture,whitness,remark
)
VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
    const value = [id_produk,tanggal,gr1,cm1,zero,gr2,cm2,
        numb40,impurity,filth,them_product,ph,
        moisture,whitness,remark]
    return db.execute(query,value)
}

const patchLabDb = (id_produk,tanggal,gr1,cm1,zero,gr2,cm2,
    numb40,impurity,filth,them_product,ph,
    moisture,whitness,remark,id) => {
    
    const query = `UPDATE lab SET id_produk =?,tanggal=?,gr1=?,cm1=?,zero=?,gr2=?,cm2=?,
    numb40=?,impurity=?,filth=?,them_product=?,ph=?,
    moisture=?,whitness=?,remark=? WHERE id =?`
    const value = [id_produk,tanggal,gr1,cm1,zero,gr2,cm2,
        numb40,impurity,filth,them_product,ph,
        moisture,whitness,remark,id]
    return db.execute(query,value)
}

const deleteLabDb = (id) => {
    const query = `DELETE FROM lab WHERE id = ?`
    const value = [id]
        return db.execute(query,value)
}


module.exports = {getLabkDb,postLabDb,patchLabDb,deleteLabDb}
    
                    