const { Image, Variant } = require("../models/")

const index = async (req, res) => {
    const images = await Image.findAll()
    res.render("images/index.liquid", {images})
}

const form = async (req, res) => {
    const variants = await Variant.findAll()
    if(req.params.id){
        const image = await Image.findByPk(req.params.id)
        res.render("images/edit.liquid", { image, variants })
    } else {
        res.render("images/create.liquid", { variants })
    }
}

const show = async (req, res) => {
    const image = await Image.findByPk(req.params.id)
    const variant = await image.getVariant()
    res.render("images/show.liquid", { image, variant })
}

const create = async (req, res, next) => {
    const image = await Image.create(req.body)
    // Sets a pretext "imageId" for our upload middleware
    req.imageId = image.id
    // Invoke our upload middleware with next()
    next()
    res.redirect('/images/' + image.id)
}

const update = async (req, res, next) => {
    const image = await Image.update(req.body, {
        where: { id: req.params.id }
      })
      // Sets a pretext "imageId" for our upload middleware
      req.imageId = req.params.id
      // Invoke our upload middleware with next()
      next()
      res.redirect('/images/' + req.params.id)
}

const remove = async (req, res) => {
    await Image.destroy({where: { id: req.params.id }})
    res.redirect("/images/")
}

module.exports = { index, form, show, create, update, remove }