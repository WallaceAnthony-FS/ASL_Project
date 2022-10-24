const { Router } = require('express')
const imageController = require("../controllers/Images")

const { uploadImage } = require("../middlewares")

const router = new Router()

router.get("/", imageController.index)
router.get("/new", imageController.form)
router.get("/:id", imageController.show)
router.get("/:id/edit", imageController.form)
router.post("/", imageController.create, uploadImage)
router.post("/:id", imageController.update, uploadImage)
router.delete("/:id", imageController.remove)
router.get("/:id/delete", imageController.remove)

module.exports = router
