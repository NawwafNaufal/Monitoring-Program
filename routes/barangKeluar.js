const express = require("express")
const routes = express.Router()
const produk = require("../controller/barangKeluarControl")

routes.route("/").get(produk.getProdukControl).post()
routes.route("/:id").patch().delete(produk.deleteProdukControl)

module.exports = routes