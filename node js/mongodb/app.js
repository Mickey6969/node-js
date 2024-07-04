const getData=require('../aaman')

//getData().then((resp)=>{
  //  resp.find().toArray().then((data)=>{
 //       console.log(data);
  //  });

//});
//console.log(getData());

const main=async ()=>{
    let data=await getData();
    data=await data.find().toArray();
    console.log(data);
}
main();