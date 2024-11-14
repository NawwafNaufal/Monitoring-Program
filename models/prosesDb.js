const db = require("../config/connection")

const getProdukDb = () => {
    const query = "SELECT * FROM proses"
        return db.execute(query)
}

const postProdukDb = (jam,tanggal,
    id_ikan,organoleptik_receiving,temp_of_fish_receiving,reject_receiving,temp_of_fish_deheading,
    temp_of_product_washing_I,ph_leaching,temp_of_product_leaching,temp_of_product_mixing,
    bad_smell_mixing,bad_colour_mixing,moisture_forming,temp_of_product_forming,
    foreign_material_forming,temp_of_CPF_freezing,metal_calibration_packing,metal_inclusion_reject_packing,
    labeling_packing,temp_of_anteroom_storing,temp_of_CSR_1_storing,temp_of_CSR_2_storing,product_dehydration_storing,
    condensation_storing,container_check_stuffing,quality_stuffing,broken_stuffing,remark) => {
    const query  = `INSERT INTO proses (jam,tanggal,
    id_ikan,organoleptik_receiving,temp_of_fish_receiving,reject_receiving,temp_of_fish_deheading,
    temp_of_product_washing_I,ph_leaching,temp_of_product_leaching,temp_of_product_mixing,
    bad_smell_mixing,bad_colour_mixing,moisture_forming,temp_of_product_forming,
    foreign_material_forming,temp_of_CPF_freezing,metal_calibration_packing,metal_inclusion_reject_packing,
    labeling_packing,temp_of_anteroom_storing,temp_of_CSR_1_storing,temp_of_CSR_2_storing,product_dehydration_storing,
    condensation_storing,container_check_stuffing,quality_stuffing,broken_stuffing,remark)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
    const value = [jam,tanggal,
        id_ikan,organoleptik_receiving,temp_of_fish_receiving,reject_receiving,temp_of_fish_deheading,
        temp_of_product_washing_I,ph_leaching,temp_of_product_leaching,temp_of_product_mixing,
        bad_smell_mixing,bad_colour_mixing,moisture_forming,temp_of_product_forming,
        foreign_material_forming,temp_of_CPF_freezing,metal_calibration_packing,metal_inclusion_reject_packing,
        labeling_packing,temp_of_anteroom_storing,temp_of_CSR_1_storing,temp_of_CSR_2_storing,product_dehydration_storing,
        condensation_storing,container_check_stuffing,quality_stuffing,broken_stuffing,remark]
    return db.execute(query,value)
}

const patchProdukDb = (jam,tanggal,
    id_ikan,organoleptik_receiving,temp_of_fish_receiving,reject_receiving,temp_of_fish_deheading,
    temp_of_product_washing_I,ph_leaching,temp_of_product_leaching,temp_of_product_mixing,
    bad_smell_mixing,bad_colour_mixing,moisture_forming,temp_of_product_forming,
    foreign_material_forming,temp_of_CPF_freezing,metal_calibration_packing,metal_inclusion_reject_packing,
    labeling_packing,temp_of_anteroom_storing,temp_of_CSR_1_storing,temp_of_CSR_2_storing,product_dehydration_storing,
    condensation_storing,container_check_stuffing,quality_stuffing,broken_stuffing,remark,id) => {
    
    const query = `UPDATE proses SET jam=?,tanggal=?,
    id_ikan=?,organoleptik_receiving=?,temp_of_fish_receiving=?,reject_receiving=?,temp_of_fish_deheading=?,
    temp_of_product_washing_I=?,ph_leaching=?,temp_of_product_leaching=?,temp_of_product_mixing=?,
    bad_smell_mixing=?,bad_colour_mixing=?,moisture_forming=?,temp_of_product_forming=?,
    foreign_material_forming=?,temp_of_CPF_freezing=?,metal_calibration_packing=?,metal_inclusion_reject_packing=?,
    labeling_packing=?,temp_of_anteroom_storing=?,temp_of_CSR_1_storing=?,temp_of_CSR_2_storing=?,product_dehydration_storing=?,
    condensation_storing=?,container_check_stuffing=?,quality_stuffing=?,broken_stuffing=?,remark=?  WHERE id =?`
    const value = [jam,tanggal,
        id_ikan,organoleptik_receiving,temp_of_fish_receiving,reject_receiving,temp_of_fish_deheading,
        temp_of_product_washing_I,ph_leaching,temp_of_product_leaching,temp_of_product_mixing,
        bad_smell_mixing,bad_colour_mixing,moisture_forming,temp_of_product_forming,
        foreign_material_forming,temp_of_CPF_freezing,metal_calibration_packing,metal_inclusion_reject_packing,
        labeling_packing,temp_of_anteroom_storing,temp_of_CSR_1_storing,temp_of_CSR_2_storing,product_dehydration_storing,
        condensation_storing,container_check_stuffing,quality_stuffing,broken_stuffing,remark,id]
    return db.execute(query,value)
}

const deleteProdukDb = (id) => {
    const query = `DELETE FROM proses WHERE id = ?`
    const value = [id]
        return db.execute(query,value)
}


module.exports = {getProdukDb,postProdukDb,patchProdukDb,deleteProdukDb}
    
                    