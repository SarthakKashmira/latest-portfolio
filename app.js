const Express=require("express");
const cors=require("cors");
const mongoose = require("mongoose");

const UserModel=require("./mongo");
const app=Express();
app.use(Express.json());
app.use(Express.urlencoded({extended:true}))
app.use(cors());
const PORT=8000;
mongoose.connect("mongodb+srv://sarthakkashmira123:D$k7FfXRk2KAuzh@cluster0.r3fswnx.mongodb.net/test?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("connected");
})
.catch((error)=>{
    console.log(error);
 
    console.log('failed');
})

app.post("/connect_with_me",async(req,res)=>{ 
   try {
    const received =req.body

    console.log(received)
    const data = new UserModel(req.body.formDetails);
   const response = await data.save()
   
    res.send(response)

   

    
   } catch (error) {
    res.send(error)
    
   }

})
app.listen(PORT);
