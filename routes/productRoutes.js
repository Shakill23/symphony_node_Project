import {getProducts,getProduct,addProduct,deleteProduct,updateProduct} from '../controller/productController.js'
import express from 'express'

const router = express.Router()

router.get('/', getProducts)

router.get('/:id', getProduct)

router.post('/addProduct', addProduct)

router.delete('/delete/:id',deleteProduct)

router.patch('/update/:id', updateProduct)

export{router}