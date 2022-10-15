const { Product } = require("../models/")

const index = async (req, res) => {
    const products = await Product.findAll()
    res.render("products/index.liquid", {products})
}

const form = async (req, res) => {
    if(req.params.id){
        const product = await Product.findByPk(req.params.id)
        res.render("products/edit.liquid", { product })
    } else {
        res.render("products/create.liquid")
    }
}

const show = async (req, res) => {
    const product = await Product.findByPk(req.params.id)
    res.render("products/show.liquid", { product })
}

const create = async (req, res) => {
    const product = await Product.create(req.body)
    res.redirect("/products/" + product.id)
}

const update = async (req, res) => {
    await Product.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    res.redirect("/products/" + req.params.id)
}

const remove = async (req, res) => {
    await Product.destroy({where: { id: req.params.id }})
    res.redirect("/products/")
}

module.exports = { index, form, show, create, update, remove }