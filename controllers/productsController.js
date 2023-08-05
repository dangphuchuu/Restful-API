const Products = require('../models/productModel')

const productsController = {
    getProducts: async (req, res) => {
        const products = await Products.find()
        res.json(products)
    },
    createProducts: async (req, res) => {
        const { product_id, title, images, description, content, colors, sizes, price } = req.body;
        const product = await Products.findOne({ product_id: product_id })

        if (product)
            return res.status(400).json({ "msg": " the product already exists" })

        const newProduct = new Products({
            product_id,
            title,
            images,
            description,
            content,
            colors,
            sizes,
            price
        })
        await newProduct.save()
        // res.json(newProduct)
        res.json({ msg: "Create a Product" })
    },
    deleteProducts: async (req, res) => {
        const product = await Products.findByIdAndDelete(req.params.id)
        res.json({ msg: "Delete Successfully" })
    },
    updateProducts: async (req, res) => {
        const { product_id, title, images, description, content, colors, sizes, price } = req.body;
        await Products.findOneAndUpdate({ _id: req.params.id }, {
            title,
            images,
            description,
            content,
            colors,
            sizes,
            price
        })
        res.json({ msg: "Updated a Product" })
    },
    getProduct: async (req, res) => {
        const product = await Products.findById(req.params.id)
        res.json(product)
    }
}

module.exports = productsController;