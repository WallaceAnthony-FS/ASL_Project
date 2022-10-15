const { Router } = require('express')
const variantController = require("../controllers/Variant")

const router = new Router()

router.get("/", variantController.index)
router.get("/new", variantController.form)
router.get("/:id", variantController.show)
router.get("/:id/edit", variantController.form)
router.post("/", variantController.create)
router.post("/:id", variantController.update)
router.delete("/:id", variantController.remove)
router.get("/:id/delete", variantController.remove)

module.exports = router
