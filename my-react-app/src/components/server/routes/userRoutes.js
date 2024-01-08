const router=require("express").Router();
const User=require("../models/userModel");
const bcrypt=require("bcryptjs");

router.post("/register",async (req,res)=>{
    try{
        const userExists= await User.findOne({email:req.body.email});

        if(userExists){
            res.status(403).send({
                sucess:false,
                message:"user already exists"
            }
            )
            return;
        }
        //hashoing the password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(req.body.password,salt)
        req.body.password= hashedPassword;
        const newUser=new User(req.body);
        await newUser.save();
        res.status(200).send({
            success:true,
            message:"Regsitration successfull"
        })
    } catch(err){
       console.log(err);
       res.status(500).send({
        success:false,
        message:"something went wrong"
       })
    }
   
})

module.exports = router;
//token=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