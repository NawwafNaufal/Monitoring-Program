const Lab = require("../models/DetailLab")


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



module.exports = {getLabControl}