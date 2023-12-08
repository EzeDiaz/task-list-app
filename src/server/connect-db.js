import { MongoClient } from 'mongodb'

const url = process.env.ORMONGO_URL || 'mongodb://localhost:27017/myorganizer';
let db = null;

export async function connectDB() {
  console.log('Database URL to use: ', url)
  if (db) return db;
  let client = await MongoClient.connect(url, { useNewUrlParser: true, dbName: 'myorganizer' });
  db = client.db();
  console.log('Got DB,', db)
  return db
}