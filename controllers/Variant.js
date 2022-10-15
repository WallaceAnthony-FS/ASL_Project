const { Variant, Product } = require("../models/")

const index = async (req, res) => {
    const variants = await Variant.findAll()
    res.render("variants/index.liquid", {variants})
}

const form = async (req, res) => {
    const products = await Product.findAll()
    if(req.params.id){
        const variant = await Variant.findByPk(req.params.id)
        res.render("variants/edit.liquid", { variant, products })
    } else {
        res.render("variants/create.liquid", { products })
    }
}

const show = async (req, res) => {
    const variant = await Variant.findByPk(req.params.id)
    const product = await variant.getProduct()
    console.log("PRODUCT:",variant.productId)
    res.render("variants/show.liquid", { variant, product })
}

const create = async (req, res) => {
    const variant = await Variant.create(req.body)
    res.redirect("/variants/" + variant.id)
}

const update = async (req, res) => {
    console.log("REQUEST BODY", req.body)
    await Variant.update(req.body, {
        where: {
            id: Number(req.params.id)
        }
    })
    res.redirect("/variants/" + req.params.id)
}

const remove = async (req, res) => {
    await Variant.destroy({where: { id: req.params.id }})
    res.redirect("/variants/")
}

module.exports = { index, form, show, create, update, remove }