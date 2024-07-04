const express=require('express')
const eventemitrer=require('events')

const app=express()
const events=new eventemitrer()

let count=0

events.on("countapi",()=>{
    count++;
    console.log("cont apl",count)
})

app.get('',(res,resp)=>{
    resp.send("hoine page")
    events.emit("countapi")
})

app.get('about',(res,resp)=>(
    resp.send("about page")
))
app.listen(5000)