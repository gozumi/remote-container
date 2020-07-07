import { MongoClient } from 'mongodb'


console.log('>>>> setting connection url')

const { DB_HOSTNAME } = process.env
const url = `mongodb://${DB_HOSTNAME}:27017`


MongoClient.connect(url, { useUnifiedTopology: true  })
  .then((client) => {
    const db = client.db('sr')
    const collection = db.collection('demo')
    console.log('>>>>> inserting into mongo')
    collection.insertOne({ hello: 'world' })
  })
  .catch((error) => console.log('>>>>> error', error))


