const getData=require('./aaman')

const deletedb=async()=>{
    let db=await getData();

    let result=await db.deleteOne({NAME:'ankit'})
}
deldete()