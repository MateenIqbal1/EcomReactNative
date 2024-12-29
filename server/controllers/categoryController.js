import Category from "../models/categoryModel.js";
import Product from "../models/productModel.js";


export const createCategoryController = async (req, res) => {
    try {
        const { category } = req.body
        if (!category) {
            return res.status(404).send({
                success: false,
                message: 'please provide category name'
            })
        }
        await Category.create({ category })
        res.status(201).send({
            success: true,
            message: `${category} category created successfully`
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Create Cat Api'
        })
    }
}

export const getAllCategoriesController = async (req, res) => {
    try {
        const categories = await Category.find({})
        res.status(200).send({
            success: true,
            message: 'categories fetched successfully',
            totalCategories: categories.length,
            categories
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in get all categories Api'
        })
    }
}

export const deleteCategoryController = async (req, res) => {
    try {
         const category = await Category.findById(req.params.id)
         if (!category) {
            return res.status(404).send({
                success: false,
                message: 'category not found'
            })
        }
        const products = await Product.find({category:category._id})
        for(let i=0;i<products.length ;i++){
          const product = products[i]
          product.category = undefined
          await product.save()
        }
        await category.deleteOne()
        res.status(200).send({
            success:true,
            message:'Category deleted successfully'
        })
    } catch (error) {
        console.log(error);
        if (error.name === 'CastError') {
            return res.status(500).send({
                success: false,
                message: 'invalid id'
            })
        }
        res.status(500).send({
            success: false,
            message: 'Error in delete product deletion api',
            error
        })
    }
}

export const updateCategoryController = async(req,res)=>{
    try {
        const category = await Category.findById(req.params.id)
        if (!category) {
           return res.status(404).send({
               success: false,
               message: 'category not found'
           })
       }
       const {updatedCategory}=req.body
       const products = await Product.find({category:category._id})
       for(let i=0;i<products.length ;i++){
         const product = products[i]
         product.category = updatedCategory
         await product.save()
       }

       if(updatedCategory) category.category = updatedCategory
       await category.save({category : updatedCategory})
       res.status(200).send({
           success:true,
           message:'Category updated successfully'
       })
   } catch (error) {
       console.log(error);
       if (error.name === 'CastError') {
           return res.status(500).send({
               success: false,
               message: 'invalid id'
           })
       }
       res.status(500).send({
           success: false,
           message: 'Error in update  category api',
           error
       })
   }
}