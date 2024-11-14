const produk = require("../models/prosesDb")


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
    const {jam,tanggal,
        id_ikan,organoleptik_receiving,temp_of_fish_receiving,reject_receiving,temp_of_fish_deheading,
        temp_of_product_washing_I,ph_leaching,temp_of_product_leaching,temp_of_product_mixing,
        bad_smell_mixing,bad_colour_mixing,moisture_forming,temp_of_product_forming,
        foreign_material_forming,temp_of_CPF_freezing,metal_calibration_packing,metal_inclusion_reject_packing,
        labeling_packing,temp_of_anteroom_storing,temp_of_CSR_1_storing,temp_of_CSR_2_storing,product_dehydration_storing,
        condensation_storing,container_check_stuffing,quality_stuffing,broken_stuffing,remark} = req.body

        try {
            const [result] = await produk.postProdukDb(jam,tanggal,
                id_ikan,organoleptik_receiving,temp_of_fish_receiving,reject_receiving,temp_of_fish_deheading,
                temp_of_product_washing_I,ph_leaching,temp_of_product_leaching,temp_of_product_mixing,
                bad_smell_mixing,bad_colour_mixing,moisture_forming,temp_of_product_forming,
                foreign_material_forming,temp_of_CPF_freezing,metal_calibration_packing,metal_inclusion_reject_packing,
                labeling_packing,temp_of_anteroom_storing,temp_of_CSR_1_storing,temp_of_CSR_2_storing,product_dehydration_storing,
                condensation_storing,container_check_stuffing,quality_stuffing,broken_stuffing,remark)
                res.status(200).json({
                    data : result[0],
                    message : `Data Berhasil di Tambahkan ${result}` 
                })
        } catch (error) {
            res.status(500).json(`Ada Masalah Server ${error}`)
        }
}

const patchProdukControl = async(req,res) => {
    const {jam,tanggal,
        id_ikan,organoleptik_receiving,temp_of_fish_receiving,reject_receiving,temp_of_fish_deheading,
        temp_of_product_washing_I,ph_leaching,temp_of_product_leaching,temp_of_product_mixing,
        bad_smell_mixing,bad_colour_mixing,moisture_forming,temp_of_product_forming,
        foreign_material_forming,temp_of_CPF_freezing,metal_calibration_packing,metal_inclusion_reject_packing,
        labeling_packing,temp_of_anteroom_storing,temp_of_CSR_1_storing,temp_of_CSR_2_storing,product_dehydration_storing,
        condensation_storing,container_check_stuffing,quality_stuffing,broken_stuffing,remark} = req.body
    const {id} = req.params
    const result = await produk.patchProdukDb(jam,tanggal,
        id_ikan,organoleptik_receiving,temp_of_fish_receiving,reject_receiving,temp_of_fish_deheading,
        temp_of_product_washing_I,ph_leaching,temp_of_product_leaching,temp_of_product_mixing,
        bad_smell_mixing,bad_colour_mixing,moisture_forming,temp_of_product_forming,
        foreign_material_forming,temp_of_CPF_freezing,metal_calibration_packing,metal_inclusion_reject_packing,
        labeling_packing,temp_of_anteroom_storing,temp_of_CSR_1_storing,temp_of_CSR_2_storing,product_dehydration_storing,
        condensation_storing,container_check_stuffing,quality_stuffing,broken_stuffing,remark,id)
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