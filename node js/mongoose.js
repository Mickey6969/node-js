const { count } = require('console')
const mongoose=require('mongoose')

 mongoose.connect("mongodb://localhost:27017/aman")
  const productscme=new mongoose.Schema({
        name:String,
        cou:String
    })
    const updataData=async()=>{
        const productmodel=mongoose.model('aana',productscme)
    
        console.log(productmodel)
        let data=await productmodel.updateOne({name:"anamika"},{$set:{post:'computer'}})
        console.log(data)
    }
   
    const finddb=async()=>{
        const productmodel=mongoose.model('ankit',productscme)
        let data=await productmodel.find()
        console.log(data)
    }
    finddb()