const express = require("express")

const app = express()

app.get('/', (req, res) => {
    res.send("Home Page")
})

// curl -X GET -H "Page: 2" -H "Sort: 'price'" -H "Order: 'desc'" http://localhost:3000/products/all
app.get('/products/all', (req, res) => {
    const { page, sort, order } = req.headers
    res.send(`GET Products: ${page}, ${sort}, ${order}`)
})

// curl -X GET http://localhost:3000/products/8719
app.get('/products/:productId', (req, res) => {
    const { productId } = req.params
    res.send(`GET Products: ${productId}`)
})

app.listen(3000, () => {
    console.log('🚀 Server listening on port 3000')
})