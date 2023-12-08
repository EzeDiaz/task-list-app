import { MongoClient } from 'mongodb'

let url = process.env.ORMONGO_URL || 'mongodb://localhost:27017/myorganizer';
let db = null;

export async function connectDB() {
  if (process.env.ORMONGO_URL) { // Meaning we are in production
    url = 'mongodb://ezequiel:ezequiel@iad2-c17-0.mongo.objectrocket.com:53014,iad2-c17-1.mongo.objectrocket.com:53014,iad2-c17-2.mongo.objectrocket.com:53014/myorganizer?replicaSet=ee49cdbf054645d7a4765a7ee2a36786'
  }
  if (db) return db;
  let client = await MongoClient.connect(url, { useNewUrlParser: true });
  db = client.db();
  console.log('Got DB,', db)
  return db
}