const Lab = require("../models/LabDb")


const getLabControl = async (req,res) => {
    try {
        const [result] = await Lab.getLabkDb()
            res.status(200).json({
                data : result,
                message : "Data Lab Ikan"
            })  
    } catch (error) {
        res.status(500).json(`Ada Masalah Server ${error}`)
    }
        
    }


const postLabControl =async (req,res) => {
    const {id_produk,tanggal,gr1,cm1,zero,gr2,cm2,
        numb40,impurity,filth,them_product,ph,
        moisture,whitness,remark} = req.body
        try {
            const [result] = await Lab.postLabDb(id_produk,tanggal,gr1,cm1,zero,gr2,cm2,
                numb40,impurity,filth,them_product,ph,
                moisture,whitness,remark)
                res.status(200).json({
                    data : result[0],
                    message : `Data Berhasil di Tambahkan ${result}` 
                })
        } catch (error) {
            res.status(500).json(`Ada Masalah Server ${error}`)
        }
}

const patchLabControl = async(req,res) => {
    const {id_produk,tanggal,gr1,cm1,zero,gr2,cm2,
        numb40,impurity,filth,them_product,ph,
        moisture,whitness,remark} = req.body
    const {id} = req.params
    const result = await Lab.patchLabDb(id_produk,tanggal,gr1,cm1,zero,gr2,cm2,
        numb40,impurity,filth,them_product,ph,
        moisture,whitness,remark,id)
    res.status(201).json({
        data : result,
        message : "Data Berhasil Update"
    })

}

const deleteLabControl = async(req,res) => {
    const {id} = req.params 
    const result = await Lab.deleteLabDb(id)
        res.status(200).json({
            data : result ,
            message : `Data id ${id} Berhasil Di Hapus`
        })
}

module.exports = {getLabControl,postLabControl,patchLabControl,deleteLabControl}