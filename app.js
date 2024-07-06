const express=require("express");
const nodemailer=require('nodemailer');
const router = express.Router()
const UserModel=require("./mongo");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: process.env.emailPORT || 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "sarthakkashmira123@gmail.com",
      pass: "yzxy mtoc gcya vdgn",
    },
  });



router.post("/connect_with_me",async(req,res)=>{ 
   try {
    const received =req.body;
    console.log(received);
    if(received.formDetails.email.length===0){
        console.log("Error of no email")
        res.status(400).send("Enter your email first")
    }

    const data = new UserModel(req.body.formDetails);
    const response = await data.save()
    console.log(response)
    if(response.email){
        try{
            const info = await transporter.sendMail({
                from: '"Sarthak Kashmira 👻" <rockerz99883311@gmail.com>', // sender address
                to: response.email, // list of receivers
                subject: "Confirmation of connect.", // Subject line
                text: "Than you for connecting.Lets build a better community ahead.", // plain text body
                html: "<b>Than you for connecting.Lets build a better community ahead. It is a no-reply email</b>", // html body
              });
            
              console.log("Message sent: %s", info.messageId);
        }
        catch(err){
            console.log(err);
        }
    }
    res.send(response)
   } catch (error) {
    res.send(error);
   }
})
module.exports=router;

