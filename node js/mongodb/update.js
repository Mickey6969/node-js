const getData=require('../aaman');

const updataData= async() =>{
    let db = await getData();
        console.log(db);
        let result = await db.updateOne(
            { NAME: 'ankit' },
            {
                $set: { class: 'qqwerty' }
            }
        );
}
updataData();