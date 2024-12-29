import { token } from "morgan";
import { User } from "../models/userModel.js";
import { getDataUri } from "../utils/features.js";
import cloudinary from 'cloudinary'

export const registerController = async(req,res) =>{
    try {
        const {name,email,password,address,city,country,phone}=req.body

        if(!name || !email || !password || !city || !country || !address || !phone){
        return res.status(500).send({
            success:false,
            message:'Please provide all the fields'
        })
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).send({
            success: false,
            message: 'Email already exists. Please login.',
          });
        }
        const user = await User.create({
            name,email,password,address,city,country,phone
        })
        res.status(201).send({
            success:true,
            message:'Registered successfully ...please login',
            user
        })
    } catch (error) {
         console.log(error);
         res.status(500).send({
            success:false,
            message:'Error in Register api'
         })
    }
}

export const loginController = async(req,res)=>{
   try {
    const {email , password} = req.body
    if(!email || !password){
        return res.status(500).send({
            success:false,
            message:'Please provide all the fields'
        })
    }
    const user = await User.findOne({email})
    if(!user){
        return res.status(404).send({
            success:false,
            message:'User not found'
        })
    }
    const isMatch=await user.comparePassword(password)
    if(!isMatch){
        return res.status(500).send({
            success:false,
            message:'Invalid credentails'
        })
    }
    const token=user.generateToken()
    res.status(200).cookie('token',token,{expiresIn : new Date(Date.now()+15*24*60*60*1000)}).json({
        success:true,
        message:'logged In succesfully',
        token,
        user 
    })
   } catch(error) {
    console.log(error);
    res.status(500).send({
       success:false,
       message:'Error in Login api'
    })
   }
}

export const getUserProfile=async(req,res)=>{
    try {
        const user = await User.findById(req.user._id)
        user.password=undefined
        res.status(200).send({
            success:true,
            message:"User profile updated successfully",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
           success:false,
           message:'Error in Profile api'
        })
    }
}

export const logoutController = async( req ,res )=>{

try {
    res.status(200).cookie('token',"",{
        expires: new Date(), // Expire the cookie immediately
        httpOnly: true, // Make it secure (if applicable)
      }).send({
        success:true ,
        message:'Logged out successfully'
    })
} catch (error) {
    console.log(error);
    res.status(500).send({
       success:false,
       message:'Error in Logout api'
    })
}

}
export const updateProfileController =async(req,res)=>{
try {
    const user = await User.findById(req.user._id)
    const {name , email , address , city , country ,phone} =req.body
    if(name)user.name=name
    if(email)user.email=email
    if(address)user.address=address
    if(city)user.city=city
    if(country)user.country=country
    if(phone)user.phone=phone

    await user.save()
    res.status(200).send({
        success:true,
        message:'User profile updated successfully '
    })

} catch (error) {
    res.status(500).send({
        success:false,
        message:'Error in Update api'
     })
}
}

export const updatePasswordController=async(req,res)=>{
    try {
        const user = await User.findById(req.user._id)
        const {oldPassword , newPassword} = req.body

        if(!oldPassword || !newPassword){
           return res.status(500).send({
                success:false,
                message:'please provide lod or new password'
             })
        }
      
        const isMatch=await user.comparePassword(oldPassword)
        if(!isMatch){
            return res.status(500).send({
                success:false,
                message:'Invalid old password'
            })
        }
     user.password = newPassword
     await user.save()
     res.status(200).send({
        success:true,
        message:'Password updated successfully'
     }
     )
    } catch (error) {
        res.status(500).send({
            success:false,
            message:'Error in update password api'
         })
    }
}

export const updateProfilePicController = async(req,res)=>{
    try {
        const user = await User.findById(req.user._id)
        const file = getDataUri(req.file)
       
        
        //deleteing prev profile image 
        if (user.profilePic && user.profilePic.public_id) {
            await cloudinary.v2.uploader.destroy(user.profilePic.public_id);
        }
        

        const cdb = await cloudinary.v2.uploader.upload(file.content)
        user.profilePic = {
            public_id :cdb.public_id,
            url:cdb.secure_url
        }
        await user.save()

        res.status(200).send({
            success:true,
            message:'Profile pic updated'
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:'Error in update profile picture api'
         })
    }
}