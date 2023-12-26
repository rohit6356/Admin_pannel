const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')       

const userSchema = new mongoose.Schema({
    username:{
        type : String,
        require : true
    },
    email:{
        type : String,
        require : true
    },
    password:{
        type : String,
        require : true
    },
    isAdmin:{
        type : Boolean,
        default : false
    }
})

userSchema.pre("save" , async function(next){
      
    if(!this.isModified("password")){
        next();
    }
        try {           
            const saltRound = await bcrypt.genSalt(10);
            const hash_password = await bcrypt.hash(this.password , saltRound);
            this.password = hash_password; 
        } catch (error) {
            next(error)
        }
})

userSchema.methods.genrateToken = async function (){
    try {
    return jwt.sign({
        userId : this._id.toString(),
        email  : this.email,
        isAdmin : this.isAdmin,
    },
    process.env.JWT_SECRET_KEY ,
    {
        expiresIn : "5d"
    }
    )  
    

    } catch (error) {
        console.log("jwt building is failed");
    }
}



const User = mongoose.model("User" , userSchema);
module.exports = User;
