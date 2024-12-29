import express from 'express'
import { createproductController, deleteProductController, deleteProductImageController, getAllProductsController, getSingleProductController, updateProductController, updateProductImageController } from '../controllers/productController.js'
import { isAdmin, isAuth} from '../middlewares/authMiddleware.js'
import { singleUpload } from '../middlewares/multer.js'

const router = express.Router()

router.get('/get-all',getAllProductsController)

router.get('/:id',getSingleProductController)

router.post('/create',isAuth,isAdmin,singleUpload,createproductController)
//product details updatingg
router.put('/:id',isAuth,isAdmin ,updateProductController )
//here is image updating
router.put('/image/:id',isAuth ,isAdmin,singleUpload,updateProductImageController )

router.delete('/delete-image/:id',isAuth,isAdmin,deleteProductImageController)

router.delete('/delete/:id',isAuth,isAdmin, deleteProductController)

export default router