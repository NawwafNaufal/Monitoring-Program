const express = require("express");
require("dotenv").config();
const db = require("./config/connection");
const cors = require("cors")

const app = express();
app.use(express.json());
const PORT = process.env.PORT;
app.use(cors())

// app.get("/Produk", async (req, res) => {
//     const query = "SELECT * FROM produk";
//     try {
//         const [result] = await db.execute(query);
//         res.json(result);
//     } catch (err) {
//         res.status(500).send("Ada Masalah Di Server");
//     }
// });

app.use("/Produk",require("./routes/produkRoute"))
app.use("/AddProduk",require("./routes/produksRoute"))
app.use("/BarangMasuk",require("./routes/barangMasuk"))
app.use("/BarangKeluar",require("./routes/barangKeluar"))
app.use("/BarangKembali",require("./routes/barangKembali"))
app.use("/Lab",require("./routes/labRoute"))
app.use("/TotalProduct",require("./routes/Home/totalPoductRoute"))
app.use("/TotalBarangMasuk",require("./routes/Home/totalMasukRoute"))
app.use("/TotalBarangKeluar",require("./routes/Home/totalKeluarRoute"))
app.use("/Diagram",require("./routes/Home/DiagramRoute"))
app.use("/TotalStok",require("./routes/Home/totalRoute"))
app.use("/DataUji",require("./routes/rekapLabRoute"))
app.use("/Moisture",require("./routes/rekapLabMoisture"))
app.use("/Gel",require("./routes/gel"))
app.use("/Witness",require("./routes/gel"))
app.use("/Bau",require("./routes/bauRoute"))
app.use("/Prosess",require("./routes/prosesRoute"))
app.use("/RekapBulanan",require("./routes/rekapBulananRoute"))
app.use("/DetailLab",require("./routes/detailLab"))


app.listen(PORT, () => {
    console.log(`Server Connect in PORT ${PORT}`);
});