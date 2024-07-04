const { MongoClient } = require('mongodb');
const { collection } = require('./product');
const url = 'mongodb://localhost:27017';
const database = 'youtube';
const client = new MongoClient(url);

async function getData() {
    let result=await client.connect()
    let dbh=result.db(database)
    return dbh=collection('aana')
}
module.exports = getData;
