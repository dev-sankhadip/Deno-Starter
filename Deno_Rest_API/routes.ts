import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getProducts, getProduct, addProduct, updateProduct, deleteProduct } from './controller/product.ts'
import { GetProducts as GP } from './DBController/product.ts';

const router = new Router()

router.get('/api/v1/products', GP)
router.get('/api/v1/products/:id', getProduct)
router.post('/api/v1/products', addProduct)
router.put('/api/v1/products/:id', updateProduct)
router.delete('/api/v1/products/:id', deleteProduct)

export{ router }