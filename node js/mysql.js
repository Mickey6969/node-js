const mysql=require('mysql')

const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    passward:"",
    database:"aankit"
})
module.exports=con;