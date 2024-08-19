import {getProducts,getProduct,addProduct,deleteProduct,updateProduct} from '../controller/productController.js'
import express from 'express'

const router = express.Router()

router.get('/getProducts', getProducts)

router.get('/getProduct/:id', getProduct)

router.post('/addProduct/:id', addProduct)

router.delete('/:id',deleteProduct)