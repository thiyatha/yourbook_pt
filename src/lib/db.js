import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://admin:y5LONIquQsIvflKt@cluster0.v8gsf.mongodb.net/yourbook?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const dbName = "yourbook";

export async function getCollection(name) {
  if (!client.topology?.isConnected()) {
    await client.connect();
  }
  return client.db(dbName).collection(name);
}
