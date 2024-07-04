const express=require('express')
const getData=require('./aaman')
const app=express()

app.use(express.json)

app.put('/',async(res,resp)=>{
    let db=await getData();
    let result=await db.updateOne({name:'anamika'},{$set:res.body})
    resp.send(result)
})
app.listen(5000)