const produk = require("../models/barangKembaliDb")


const getProdukControl = async (req,res) => {
    try {
        const [result] = await produk.getProdukDb()
            res.status(200).json({
                data : result,
                message : "Data Produk"
            })  
    } catch (error) {
        res.status(500).json(`Ada Masalah Server ${error}`)
    }
        
    }


const postProdukControl =async (req,res) => {
    const {id_produk,jumlah,tanggal,saldo,kg,komposisi,
        keterangan,tujuan,penerima_barang,gram,cm,js40,impurity,filth,
        temp,ph,moisture,whitness,grade} = req.body
        try {
            const [result] = await produk.postProdukDb(id_produk,jumlah,tanggal,saldo,kg,komposisi,
                keterangan,tujuan,penerima_barang,gram,cm,js40,impurity,filth,
                temp,ph,moisture,whitness,grade)
                res.status(200).json({
                    data : result[0],
                    message : `Data Berhasil di Tambahkan ${result}` 
                })
        } catch (error) {
            res.status(500).json(`Ada Masalah Server ${error}`)
        }
}

const patchProdukControl = async(req,res) => {
    const {id_produk,jumlah,tanggal,saldo,kg,komposisi,
        keterangan,gram,cm,js40,impurity,filth,temp,
        ph,moisture,whitness,grade} = req.body
    const {id} = req.params
    const result = await produk.patchProdukDb(id_produk,jumlah,tanggal,saldo,kg,komposisi,
        keterangan,gram,cm,js40,impurity,filth,temp,
        ph,moisture,whitness,grade,id)
    res.status(201).json({
        data : result,
        message : "Data Berhasil Update"
    })

}

const deleteProdukControl = async(req,res) => {
    const {id} = req.params 
    const result = await produk.deleteProdukDb(id)
        res.status(200).json({
            data : result ,
            message : `Data id ${id} Berhasil Di Hapus`
        })
}

module.exports = {getProdukControl,postProdukControl,patchProdukControl,deleteProdukControl}