import express from 'express'
import { isAuth ,isAdmin} from '../middlewares/authMiddleware.js'
import { createCategoryController, deleteCategoryController, getAllCategoriesController, updateCategoryController } from '../controllers/categoryController.js'

const router=express.Router()

router.post('/create',isAuth,isAdmin,createCategoryController)
router.get('/get-all',getAllCategoriesController)
router.delete('/delete/:id',isAuth,isAdmin,deleteCategoryController)
router.put('/update/:id',isAuth,isAdmin,updateCategoryController)




export default router