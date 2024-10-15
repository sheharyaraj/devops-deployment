const express=require('express')
const router = express.Router()
const User=require('../models/user')
const {body,validationResult}=require('express-validator');

const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken');

const jwtSecret = "mynameiszaeemulislam";

router.post("/createuser",
  body('name', 'incorrect name').isLength({min: 3}),
  body('password', 'incorrect password').isLength({min: 3}),
  body('email', 'incorrect email').isEmail(),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcryptjs.genSalt(10);
    let secPassword = await bcryptjs.hash(req.body.password, salt);

    try {
      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        return res.status(400).json({ success: false, message: "Account already exists" });
      }

      await User.create({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
      });

      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post("/loginuser", async(req,res)=>{
    let email = req.body.email;
    let password = req.body.password;
    try{
        let userdata = await User.findOne({email});
        if(!userdata){
            return res.status(400).json({success:false,message:"Invalid credentials"});
        }

        const isMatch = await bcryptjs.compare(req.body.password,userdata.password);

        if(!isMatch){
            return res.status(400).json({success:false,message:"Invaliiid credentials"});
        }

        const data = {
            user:{
                id:userdata.id
            }
        }

        const authToken = jwt.sign(data,jwtSecret);

        return res.json({success:true,authToken:authToken});

    } catch(error) {
        console.log(error);
        res.json({success:false});
    }
});


  
module.exports=router;
