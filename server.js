//imports in the backend
const mongoose = require("mongoose");
const express = require("express");
const Mainrouter = require("./app.js");
const cors = require("cors");
const PORT=process.env.PORT || 5000;
//middlwewares used
const app = express();
app.use(cors());
app.use(express.json());
//routes directed 
app.use("/", Mainrouter);
app.use(express.urlencoded({extended:true}))


//connected to database
const url=process.env.MONGODB_URL;
mongoose.connect("mongodb+srv://sarthakkashmira123:cb3DWIamVeQvw8dV@portfolio.ksrwaof.mongodb.net/?retryWrites=true&w=majority&appName=Portfolio")
.then(()=>{
  console.log("connected");
})
.catch((error)=>{
  console.log(error);
  console.log('failed');
})

//listening on app
app.listen(PORT,()=>{console.log(`Running on server ${PORT}`)});
