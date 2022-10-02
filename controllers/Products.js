

const index = (req, res) => {
    res.send('products.index')
}

const form = (req, res) => {
    res.send('products.form')
}

const show = (req, res) => {
    res.send('products.show')
}

const create = (req, res) => {
    res.send('products.create')
}

const update = (req, res) => {
    res.send('products.update')
}

const remove = (req, res) => {
    res.send('products.remove')
}

module.exports = { index, form, show, create, update, remove }