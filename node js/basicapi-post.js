const express=require('express')
const getData=require('./aana')

const app=express()

app.use(express.json())

app.post('',async(res,resp)=>{
    let db=await getData();
    let result=await db.insertOne(res.body)
    resp.send(result)
})
app.listen(5000)