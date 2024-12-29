import mongoose from "mongoose";
import bcryptjs from 'bcryptjs'
import JWT from 'jsonwebtoken'
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    email: {
        type: String,
        required: [true, 'name is required'],
        unique: [true, 'email already taken']
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        minLength: [6, 'password length must be 6 character']
    },
    address: {
        type: String,
        required: [true, 'address is required']
    },
    city: {
        type: String,
        required: [true, 'city name is required']
    },
    country: {
        type: String,
        required: [true, 'country name is required']
    },
    phone: {
        type: String,
        required: [true, 'phone number is required']
    },
    profilePic: {
       public_id:{
        type:String
       },
       url:{
        type:String
       }

    },
    role:{
        type:String,
        default :"user"
    }
},{timestamps:true})

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return;
    this.password = await bcryptjs.hash(this.password, 10);
    next();
  });
  

userSchema.methods.comparePassword=async function(plainPassword){
    return await bcryptjs.compare(plainPassword,this.password)
}
userSchema.methods.generateToken=function(){
    return JWT.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'7d'})
}
export const User = mongoose.model('User',userSchema)
