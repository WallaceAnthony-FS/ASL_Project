const express = require("express")

const app = express()

app.get('/', (req, res) => {
    res.send("Home Page")
})

// curl -X GET -H "Page: 2" -H "Sort: 'price'" -H "Order: 'desc'" http://localhost:3000/products/all
app.get('/products/all', (req, res) => {
    const { page, sort, order } = req.headers
    console.log(page)
    res.send(`GET Products: ${page}, ${sort}, ${order}`)
})

app.listen(3000, () => {
    console.log('🚀 Server listening on port 3000')
})