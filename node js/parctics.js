const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'youtube';
const client = new MongoClient(url);

async function getData() {
    try {
        await client.connect();
        const db = client.db(database);
        const collection = db.collection('aman');
        const data = await collection.find({}).toArray();
        return data;
    } finally {
        await client.close();
    }
}

module.exports = getData;
