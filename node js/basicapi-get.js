const express=require('express')
const getData=require('./aaman')
const app=express()

app.get('',async(res,resp)=>{
    let db=await getData();
    let data =await db.find().toArray();
    resp.send(data);
}) 
app.listen(5000);