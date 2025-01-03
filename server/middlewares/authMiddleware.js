import JWt from 'jsonwebtoken'
import { User } from '../models/userModel.js'

export const isAuth = async(req,res,next)=>{
    const {token}=req.cookies

    if(!token){
        return res.status(401).send({
            success:false,
            message:'Unauthorized User'
        })
    }
    const decodeData  = JWt.verify(token , process.env.JWT_SECRET)
    req.user = await User.findById(decodeData._id);
    next()
}

export const isAdmin = async(req,res,next)=>{
if(req.user.role !== 'admin'){
    return res.status(401).send({
        success:false,
        message:'only admin is  authorized for this role '
    })
}
next()
}