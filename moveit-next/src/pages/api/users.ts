import { NowRequest, NowResponse } from "@vercel/node";
import { MongoClient, Db } from "mongodb";
import url from "url";

let cachedDb: Db = null;

async function connectToDatabase(uri: string) {
  if (cachedDb) return cachedDb;

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const dbName = url.parse(uri).pathname.substr(1);

  const db = client.db(dbName);
  cachedDb = db;
  return db;
}

export default async (request: NowRequest, response: NowResponse) => {
  const db = await connectToDatabase(process.env.MONGODB_URI);
  const collection = db.collection("users");
  if (request.method === "POST") {
    const { user } = request.body;

    await collection.insertOne({
      ...user,
      created_at: new Date(),
    });

    return response.status(201).json(user);
  } else if (request.method === "GET") {
    const { login } = request.query;
    let user = await collection.findOne({ login });
    return response.json(user);
  } else if (request.method === "PATCH") {
    const { user } = request.body;
    await collection.updateOne({ login: user.login }, { $set: user });
    return response.json(user);
  }
};
