const db = require("../config/connection")

const getProsesRekapDb = () => {
    const query = `SELECT 
    tanggal,
    COUNT(CASE WHEN organoleptik_receiving < 7 THEN 1 END) AS Tidak_Sesuai,
    COUNT(CASE WHEN organoleptik_receiving >= 7 THEN 1 END) AS Sesuai,
    temp_of_fish_receiving
FROM proses
GROUP BY tanggal, temp_of_fish_receiving;;
`;
        return db.execute(query)
}

module.exports = {getProsesRekapDb}