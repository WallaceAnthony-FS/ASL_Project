const { Router } = require('express')
const productController = require("../controllers/Products")

const router = new Router()

router.get("/", productController.index)
router.get("/new", productController.form)
router.get("/:id", productController.show)
router.get("/:id/edit", productController.form)
router.post("/", productController.create)
router.post("/:id", productController.update)
router.delete("/:id", productController.remove)
router.post("/:id/delete", productController.remove)

module.exports = router
