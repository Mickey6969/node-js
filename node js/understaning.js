const express=require('express');
const path=require('path');
const app=express();
const filepath=path.join(__dirname,'folder');

app.set('view engine','ejs');

app.get('',(res,resp)=>{
  resp.sendFile( `${filepath}/forget.html`)
})
app.get('/profile',(res,resp)=>{
  const user={
    name:'ankit',
    email:'fdsfsdfsdfsd',
    city:'dhaqurahra',
    skile:['php','c++','jav']
  }
  resp.render('profile',{user})
})
//app.use(express.static(filepath));
app.listen(5000);