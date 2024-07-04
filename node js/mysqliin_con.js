const express = require('express')
const con = require('./mysql')
const app = express()
app.use(express.json())
app.get('', (res, resp) => {
    con.query("select * from login", (err, result) => {
        if (err) {
            resp.send(err)
        }
        else {
            resp.send(result)
        }
    })
})
//app.post('',(res,resp)=>{
//  const data={name:"anman",email:"fasdgdnhbvmjhgbbfdjgf"}
//   con.query('insert into login   set ?',data,(error,result,field)=>{
//     if(error) {resp.send(error)}
//       else{resp.send(result)}
// })
//})

// postman se data insert

//app.post('',(res,resp)=>{
//    const data=res.body
//   con.query('insert into login   set ?',data,(error,result,field)=>{
//     if(error) {resp.send(error)}
//   else{resp.send(result)}
// })
//})

//put method

//app.put('', (res, resp) => {
//   const data = ["aman", "aman@gmail.con", "anman"]
// con.query('update login set name=?,email=? where name=?', data, (error, result, field) => {
//      if (error) { console.log(error) }
//       else { resp.send(result) }
//   })
//})

//postman se

//app.put('/:name',(res,resp)=>{   
//  const data=[res.body.name,res.body.email,res.params.name]
//con.query('update login set name=?,email=? where name=?',data,(error,result,field)=>{
//  if(error) {console.log(error)} 
//else
//{resp.send(result)
//  console.log(result)
//       }
//  })
//})

//delete 
app.delete('/',(res,resp)=>{
    con.query("delete from login where name=?","aman",(error,result,field)=>{
        if(error){
            resp.send(error)
        }
        else{
            resp.send(result)
            console.log(result)
        }
    })
})
app.listen(5000)