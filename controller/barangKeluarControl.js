const produk = require("../models/barangKeluarDb")


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

    const deleteProdukControl = async(req,res) => {
        const {id} = req.params 
        const result = await produk.deleteProdukDb(id)
            res.status(200).json({
                data : result ,
                message : `Data id ${id} Berhasil Di Hapus`
            })
    }
module.exports = {getProdukControl,deleteProdukControl}