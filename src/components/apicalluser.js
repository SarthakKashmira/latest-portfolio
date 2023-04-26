import firestoreDatabase from "..//firebase_config.js";
import {collection,addDoc,getDocs,query,where} from "firebase/firestore";
import CryptoJS from "crypto-js";
export const  CreateUser=async(payload)=>{
    try{ 
    //check if user alreday exists using email
    const qry=query(collection(firestoreDatabase,"users"),where("email","==",payload.email));
    const querySnapshot=await getDocs(qry);
    if(querySnapshot.size>0)
    {
       throw new Error("user already exists");
    }
       const docRef=collection(firestoreDatabase,"users");
       await addDoc(docRef,payload);
       return{
           success: true,
           message:"user connected successfully",
       };
   }
   catch(error){
       return error;
   }
};