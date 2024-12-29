import mongoose from "mongoose";

const productSchema = new mongoose.Schema({ 
      name:{
        type:String,
        required:[true,'product name is require ']
      },
      description:{
        type:String,
        required:[true , 'product description is required']
      },
      price:{
        type:Number,
        required:[true,'Product price is required']
      },
      stock:{
        type:Number,
        required:[true,'product stock is required']
      },
      // quantity:{
      //   type:Number,
      //   required:[true,'product stock is required']
      // },
      category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
      },
      images:[ 
        {
            public_id:String,
            url:String
        }
      ]

      
},{timestamps:true})

export const Product = mongoose.model('Product',productSchema)
export default Product
