const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    product_id: {
        type: String,
        unique: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    images: {
        type: Array,
        default: 'https://edravn.com/media/product/438_egm24f75_4.jpg',
    },
    description: String,
    content: String,
    colors: Array,
    sizes: Array,
    price: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('Products',productSchema)