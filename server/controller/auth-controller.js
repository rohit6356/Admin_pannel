const user = require('../model/user-model')
const bcrypt = require("bcrypt");

const home = async (req, res) => {
    try {
        res.status(200).send(`welcome on home by auth controller`);
    } catch (error) {
        res.status(400).send(`${error}`)
    }
}


// register 


const register = async (req, res) => {
    try {

        const { username, email, password, isAdmin } = req.body;
        const userExist = await user.findOne({ email: email });
        if (userExist) {
            return res.status(400).send("user already register");
        }

        const userdata = await user.create({ username, email, password, isAdmin });

        res.status(200).json({
            msg: "registration successfully",
            token: await userdata.genrateToken(),
            userId: userdata._id.toString()
        });
    } catch (error) {
        res.status(400).send(`${error}`)
    }
}



// user login
const login = async (req, res) =>{
    try {
        const {email , password } = req.body;
        const userExist = await user.findOne({email : email})

        if(!userExist){
            return  res.status(400).json({
                msg: "invalid credentials"
            })
        }    
      const match = await bcrypt.compare(password , userExist.password); 
      
            if(match){
                res.status(201).json({
                    msg: "login successfully",
                    token : await userExist.genrateToken(),
                    userId : userExist._id.toString()
                })
            }
            else{
                res.status(400).json({
                    msg: "invalid email or password",
                })
            }
        
    } catch (error) {
        res.status(500).send(`${error}`)
    }
}



module.exports = { home, register, login };