import { connect } from "mongoose";
import { MONGODB_URI } from "./config";

export async function connectDB() {
  try {
    const db = await connect(MONGODB_URI);
    console.log(`Database connected ${db.connection.db.databaseName}`);
  } catch (error) {
    console.error(error);
  }
}
