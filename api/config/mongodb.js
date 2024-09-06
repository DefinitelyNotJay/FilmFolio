import { MongoClient } from 'mongodb';

// MongoClient now auto-connects so no need to store the connect()
// promise anywhere and reference it.
const client = new MongoClient(process.env.MONGO_URL);

export const listDatabases = async () => {
  const databases = await client.db('filmfolio').command({ listDatabases: 1 });
  return databases;
};
