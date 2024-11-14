const produk = require("../models/rekapProsesBulanan")


const getProdukControl = async (req,res) => {
    try {
        const [result] = await produk.getProsesRekapDb()
            res.status(200).json({
                data : result,
                message : "Total Produk"
            })  
    } catch (error) {
        res.status(500).json(`Ada Masalah Server ${error}`)
    }
        
    }
module.exports = {getProdukControl}