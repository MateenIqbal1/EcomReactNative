import Product from "../models/productModel.js";
import { getDataUri } from "../utils/features.js";
import cloudinary from 'cloudinary'
export const getAllProductsController = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).send({
            success: true,
            message: 'all products fetched successfully',
            products
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in getting All products api',
            error
        })
    }
}
export const getSingleProductController = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(404).send({
                success: false,
                message: 'product not found'
            })
        }
        res.status(200).send({
            success: true,
            message: 'Product found',
            product
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
            message: 'Error in Get Single products api',
            error
        })
    }
}

export const createproductController = async (req, res) => {
    try {
        const { name, description, price, stock, category } = req.body
        if (!name || !description || !price || !stock) {
            return res.status(500).send({
                success: false,
                message: 'please provide all fields'
            })
        }

        const file = getDataUri(req.file)
        const cdb = await cloudinary.v2.uploader.upload(file.content)
        const image = {
            public_id: cdb.public_id,
            url: cdb.secure_url
        }
        if (!req.file) {
            return res.status(500).send({
                success: false,
                message: "please provide product images"
            })
        }
        await Product.create({
            name, description, price, stock, category, images: [image]
        })
        res.status(201).send({
            success: true,
            message: 'product created successfully'
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Get Single products api',
            error
        })
    }
}

export const updateProductController = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)

        if (!product) {
            return res.status(404).send({
                success: false,
                message: 'Product not found'
            })
        }

        const { name, description, price, stock, category } = req.body
        if (name) product.name = name
        if (description) product.description = description
        if (price) product.price = price
        if (stock) product.stock = stock
        if (category) product.category = category

        await product.save()
        res.status(200).send({
            success: true,
          message:'product details updated'

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
            message: 'Error in update product api',
            error
        })
    }
}


export const updateProductImageController = async(req,res)=>{
    try {
        
        
        const product = await Product.findById(req.params.id)

        if (!product) {
            return res.status(404).send({
                success: false,
                message: 'Product not found'
            })
        }

        if(!req.file){
            return res.status(404).send({
                success:false,
                message:'Product not found'
            })
        }
       
        const file = getDataUri(req.file)
        const cdb = await cloudinary.v2.uploader.upload(file.content)
        const image={
            public_id:cdb.public_id,
            url:cdb.secure_url
        }
         
        product.images.push(image)
        await product.save()
         res.status(200).send({
            success:true,
            message:'Product image updated'
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
            message: 'Error in update product api',
            error
        })
    }
}

export const deleteProductImageController = async(req,res)=>{
    try {
        const product = await Product.findById(req.params.id)

        if(!product){
            return res.status(404).send({
                success:false,
                message:'Product not found'
            })
        }
        const id = req.query.id

        if(!id){
            return res.status(404).send({
                success:false,
                message:'product image not found'
            })
        }
        let isExist = -1;
        product.images.forEach((item,index) =>{
            if(item._id.toString()===id.toString()) isExist = index
        })
        if(isExist < 0){
            return res.status(404).send({
                success:false,
                message:'Image not found'
            })
        }
        //delete product image
        await cloudinary.v2.uploader.destroy(product.images[isExist].public_id)
        product.images.splice(isExist , 1)
        await product.save()
        return res.status(200).send({
            success:true,
            message:'Product Image Deleted successfully'
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
            message: 'Error in delete product image api',
            error
        })
    }
}

export const deleteProductController = async(req,res) =>{
    try {
        const product = await Product.findById(req.params.id)
        if(!product){
            return res.status(404).send({
                success:false,
                message:'Product not found'
            })
        }
        for(let index=0;index<product.images.length ;index++){
         await cloudinary.v2.uploader.destroy(product.images[index].public_id)
        }
        await product.deleteOne()
        res.status(200).send({
            success:true,
            message:'Product deleted successfully'
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