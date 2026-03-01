import { MongoClient, Db } from 'mongodb';

export interface IUser {
  _id?: string;
  email: string;
  password: string;
  fullName: string;
  phone?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export async function getDatabase(): Promise<Db> {
  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    throw new Error('MONGODB_URI is not set');
  }
  const client = new MongoClient(mongoUri);
  await client.connect();
  return client.db('wanderluxe');
}

export async function createUsersCollection() {
  try {
    const db = await getDatabase();
    const collections = await db.listCollections().toArray();
    const exists = collections.some(col => col.name === 'users');
    
    if (!exists) {
      await db.createCollection('users');
      await db.collection('users').createIndex({ email: 1 }, { unique: true });
    }
  } catch (error) {
    console.error('Error creating users collection:', error);
  }
}

export async function getUserByEmail(email: string): Promise<IUser | null> {
  try {
    const db = await getDatabase();
    const user = await db.collection('users').findOne({ email });
    return user as IUser | null;
  } catch (error) {
    console.error('Error finding user:', error);
    return null;
  }
}

export async function createUser(user: IUser): Promise<string> {
  try {
    const db = await getDatabase();
    const result = await db.collection('users').insertOne({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return result.insertedId.toString();
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}
