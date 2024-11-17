const db = require("../config/connection")

const getLabkDb = () => {
    const query = `SELECT 
    lab.id,
    lab.tanggal,
    np.nama_ikan,
    lab.gr1,
    lab.cm1,
    lab.gr1 * lab.cm1 AS nol,  -- Hasil perkalian gr1 dan cm1
    lab.gr2,
    lab.cm2,
    lab.gr2 * lab.cm2 AS empat,  -- Hasil perkalian gr2 dan cm2
    lab.remark,
    lab.impurity,
    lab.filth,
    lab.them_product,
    lab.ph,
    lab.moisture,
    lab.whitness
FROM lab
JOIN ikan np ON lab.id_produk = np.id;`
        return db.execute(query)
}

module.exports = {getLabkDb}
