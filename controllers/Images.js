const { Image } = require("../models/")

const index = async (req, res) => {
    const images = await Image.findAll()
    res.render("images/index.liquid", {images})
}

const form = async (req, res) => {
    if(req.params.id){
        const image = await Image.findByPk(req.params.id)
        res.render("images/edit.liquid", { image })
    } else {
        res.render("images/create.liquid")
    }
}

const show = async (req, res) => {
    const image = await Image.findByPk(req.params.id)
    res.render("images/show.liquid", { image })
}

const create = async (req, res) => {
    const image = await Image.create(req.body)
    res.redirect("/images/" + image.id)
}

const update = async (req, res) => {
    await Image.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    res.redirect("/images/" + req.params.id)
}

const remove = async (req, res) => {
    await Image.destroy({where: { id: req.params.id }})
    res.redirect("/images/")
}

module.exports = { index, form, show, create, update, remove }