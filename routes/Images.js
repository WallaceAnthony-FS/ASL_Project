const { Router } = require('express')
const imageController = require("../controllers/Images")

const router = new Router()

router.get("/", imageController.index)
router.get("/new", imageController.form)
router.get("/:id", imageController.show)
router.get("/:id/edit", imageController.form)
router.post("/", imageController.create)
router.post("/:id", imageController.update)
router.delete("/:id", imageController.remove)
router.get("/:id/delete", imageController.remove)

module.exports = router
