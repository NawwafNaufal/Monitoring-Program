const express = require("express")
const routes = express.Router()
const lab = require("../controller/LabControl")

routes.route("/").get(lab.getLabControl).post(lab.postLabControl)
routes.route("/:id").patch(lab.patchLabControl).delete(lab.deleteLabControl)

module.exports = routes