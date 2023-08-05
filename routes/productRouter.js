const router = require('express').Router()
const productsController = require('../controllers/productsController')

// CRUD <===> POST, GET, PUT , DELETE

router.route('/')
    .get(productsController.getProducts)
    .post(productsController.createProducts) 

router.route('/:id')
    .delete(productsController.deleteProducts)
    .put(productsController.updateProducts)
    .get(productsController.getProduct)
module.exports = router