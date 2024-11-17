const express = require("express")
const routes = express.Router()
const {getLabControl} = require("../controller/detailLab")

routes.route("/:id").get(getLabControl)


module.exports = routes