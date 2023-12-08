import { MongoClient } from 'mongodb'

const url = process.env.ORMONGO_URL || 'mongodb://localhost:27017/myorganizer';
let db = null;

export async function connectDB() {
  if (db) return db;
  let client = await MongoClient.connect(url, { userNewUrlParser: true });
  db = client.db();
  console.log('Got DB,', db)
  return db
}