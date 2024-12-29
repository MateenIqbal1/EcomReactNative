import Order from "../models/orderModel.js";
import Product from "../models/productModel.js";

export const createOrderController = async(req,res) =>{
    try {
        const {shippingInfo,orderitems,paymentMethod,paymentInfo,itemPrice,tax,shippingCharges,totalAmount,orderStatus}=req.body 
        
        await Order.create({
            user:req.user._id,
            shippingInfo,
            orderitems,
            paymentMethod,
            paymentInfo,
            itemPrice,
            tax,
            shippingCharges,
            totalAmount,
            orderStatus
        })
        for(let i=0;i<orderitems.length;i++){
            const product = await Product.findById(orderitems[i].product)
            product.stock -= orderitems[i].quantity
            await product.save()

        }
        res.status(201).send({
            success:true,
            message:'order placed successfully'
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error occured in create order api'
        })
    }
}

export const getMyOrdersController = async(req,res)=>{
    try {
         const orders = await Order.find({user:req.user._id})
         if(!orders){
            return res.status(404).send({
                success:false,
                message:'no order found'
            })
         }
         res.status(200).send({
            success:true,
            message:'your orders data : ',
            totalOrders:orders.length,
            orders

         })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error in my orders api'
        })
    }
}

export const singleOrderDetailsController = async(req,res) =>{
try {
    const order = await Order.findById(req.params.id)
    if(!order){
        return res.status(404).send(
            {
                success:false,
                message:'no order found'
            }
        )
    }
    res.status(200).send({
        success:true,
        message:'your order fetched',
        order 
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
        message: 'Error in geting single  product api',
        error
    })
}
}

export const getAllOrdersController = async(req,res) =>{
try {
    const orders = await Order.find({})
    res.status(200).send({
        success:true,
        message:'All Order Data',
        totalOrders :Order.length,
        orders
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
        message: 'Error in geting single  product api',
        error
    })
}
}

//chacge order status
export const changeOrderStatusController = async(req,res)=>{
    try {
        const order = await Order.findById(req.params.id)
        if(!order){
            return res.status(404).send({
                success:false,
                message:'order not found'
            })
        }
        if(order.orderStatus === 'processing') order.orderStatus  = 'shipping'
        else if(order.orderStatus === 'shipped'){
            order.orderStatus = 'delievered'
            order.deliverdAt = Date.now()
        }else{
            return res.status(500).send({
                success:false,
                message:'Order already delievered'
            })
        }
        await  order.save()
        res.status(200).send({
            success:true,
            message:'order status updated successfully'
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
            message: 'Error in geting single  product api',
            error
        })
    }
}