const express = require('express')
const authController = require('../controller/auth-controller')
const router = express.Router();

const validate = require('../middleware/valid-middleware')
const userSchema = require('../validators/user-validator')
// const loginSchema = require('../middleware/')
// router.get("/",(req,res)=>{
//     res.status(200).send(`welcome to home page by router`)
//     })


// router.route('/').get((req,res) =>{
// res.status(200).send(`welcome to home page by router`);
// })

router.route('/').get(authController.home);
router.route('/register').post(validate(userSchema.signupSchema) ,  authController.register);
router.route('/login').post(validate(userSchema.loginSchema) , authController.login);




module.exports = router;