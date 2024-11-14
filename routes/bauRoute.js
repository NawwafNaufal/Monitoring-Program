const express = require("express")
const routes = express.Router()
const produk = require("../controller/bauControl")

routes.route("/").get(produk.getProdukControl).post()
routes.route("/:id").patch().delete()

module.exports = routes