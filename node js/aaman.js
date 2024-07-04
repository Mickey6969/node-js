const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const database='aman';
const clinet=new MongoClient(url);

async function getData(){
    let result=await clinet.connect();
    let dbh=result.db(database);
    return dbh.collection('aana');                                                              
}
module.exports=getData;