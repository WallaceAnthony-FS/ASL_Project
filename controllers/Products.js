const Products = require("../models/Products")

const index = (req, res) => {
    const products = Products.all()
    res.render("products/index.liquid", {products})
}

const form = (req, res) => {
    if(req.params.id){
        const product = Products.find(req.params.id)
        res.render("products/edit.liquid", { product })
    } else {
        res.render("products/create.liquid")
    }
}

const show = (req, res) => {
    const product = Products.find(req.params.id)
    res.render("products/show.liquid", {product})
}

const create = (req, res) => {
    const product = Products.create(req.body)
    res.redirect("/products/" + product.id)
}

const update = (req, res) => {
    const product = Products.update(req.params.id, req.body)
    res.redirect("/products/" + req.params.id)
}

const remove = (req, res) => {
    const products = Products.remove(req.params.id)
    res.json(products)
}

module.exports = { index, form, show, create, update, remove }