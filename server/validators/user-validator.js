const  z  = require('zod');

const signupSchema = z.object({
     username : z
    .string({ required_error : "name is required " })
    .trim()
    .min(3 , {message : "name should be atleast 3 character"})
    .max(255, {message : "name should not be greater than 255 character"}) ,

    email : z
    .string({required_error : "email is required"})
    .trim()
    .email({message : "invalid email address"})
    .min(3 , {message : "email should be atleast 3 character"})
    .max(255, {message : "email should not be greater than 255 character"}) ,

    password : z
    .string({required_error : "password is required"})
    .trim()
    .min(8 , {message : "password should be atleast 8 character"})
    .max(255, {message : "password should not be greater than 255 character"}) ,

    // phone : z
    // .string({required_error : "phone is required"}) 
    // .min(10 , {message : "phone should be atleast 10 character"})
    // .max(20, {message : "phone should not be greater than 20 character"})
})
const loginSchema = z.object({
       email : z
    .string({required_error : "email is required"})
    .trim()
    .email({message : "invalid email address"})
    .min(3 , {message : "email should be atleast 3 character"})
    .max(255, {message : "email should not be greater than 255 character"}) ,

    password : z
    .string({required_error : "password is required"})
    .trim()
    .min(8 , {message : "password should be atleast 8 character"})
    .max(255, {message : "password should not be greater than 255 character"}) 

})

module.exports = {signupSchema, loginSchema};