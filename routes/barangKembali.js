const express = require("express")
const routes = express.Router()
const produk = require("../controller/barangKembaliControl")

routes.route("/").get(produk.getProdukControl).post(produk.postProdukControl)
routes.route("/:id").patch(produk.patchProdukControl).delete(produk.deleteProdukControl)

module.exports = routes