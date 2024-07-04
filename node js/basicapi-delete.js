const express=require('express')
const getData=require('./aaman')
const mongodb=require('mongodb')
const app=express()

app.use(express.json)

app.delete('',async(res,resp)=>{
    let db=await getData();
    let result=await db.deleteOne({_id: new mongodb.ObjectId(res.params.id)})
    resp.send(result)
})
app.listen(5000)
