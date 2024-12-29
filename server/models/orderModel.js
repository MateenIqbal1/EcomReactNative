import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({ 
      
    shippingInfo:{
        address:{
            type:String,
            required:[true,'address is required']
        },
        city:{
            type:String,
            required:[true , 'city name is required']
        },
        country:{
           type:String,
           required:[true,'country name is required'] 
        }
    },
    orderItems:[ 
        {
         name:{
            type:String,
            required:[true,'product name is required']
         },
         price:{
            type:String,
            required:[true,'product price is required']
         },
         quantity:{
            type:Number,
            required:[true,'product quantity is required']
         },
         image:{
            type:String,
            required:[true,'product image is required']
         },
         product:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product',
            required:true
        }

        }
    ],
    paymentMethod:{
        type:String,
        enum:["COD","ONLINE"],
        default:"COD"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:[true,'User id is required']
    },
    paidAt:Date,
    paymentInfo:{
        id:String,
        status:String
    },
    itemPrice:{
        type:Number,
        required:[true,'item price is required']
    },
    tax:{
        type:Number,
        required:[true,'tax price is required']
    },
    shippingCharges:{
        type:Number,
        required:[true,'shipping charges is required']
    },
    totalAmount:{
        type:Number,
        required:[true,'item total Amount is required']
    },
    orderStatus:{
        type:String,
        enum:['processing','shipping','delievered'],
        default:'processing',

    },
    deliverdAt:Date
     
},{timestamps:true})

export const Order = mongoose.model('Order',orderSchema)
export default Order
