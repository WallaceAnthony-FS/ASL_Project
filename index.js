const express = require("express")
const app = require("liquid-express-views")(express())
const fileUpload = require('express-fileupload')

const productRouter = require("./routes/Products")
const variantRouter = require("./routes/Variants")
const imageRouter = require("./routes/Images")

app.use(express.urlencoded({ extended: false }))
app.use(fileUpload())


app.use("/public", express.static('public'))

app.use("/products", productRouter)
app.use("/variants", variantRouter)
app.use("/images", imageRouter)

app.listen(3000, () => {
    console.log('🚀 Server listening on port 3000')
})