const produk = require("../models/produksDb")


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
    const {nama_product,kode_barang} = req.body

        try {
            const [result] = await produk.postProdukDb(nama_product,kode_barang)
                res.status(200).json({
                    data : result[0],
                    message : `Data Berhasil di Tambahkan ${result}` 
                })
        } catch (error) {
            res.status(500).json(`Ada Masalah Server ${error}`)
        }
}

const patchProdukControl = async(req,res) => {
    const {nama_product,kode_barang} = req.body
    const {id} = req.params
    const result = await produk.patchProdukDb(nama_product,kode_barang,id)
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