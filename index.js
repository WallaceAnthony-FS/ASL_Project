const express = require("express")

const app = require("liquid-express-views")(express())
app.use(express.urlencoded({ extended: false }))

const productRouter = require("./routes/Products")
const variantRouter = require("./routes/Variants")
const imageRouter = require("./routes/Images")
app.use("/products", productRouter)
app.use("/variants", variantRouter)
app.use("/images", imageRouter)

app.listen(3000, () => {
    console.log('🚀 Server listening on port 3000')
})