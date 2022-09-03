import { connect } from "mongoose";

export async function connectDB() {
  try {
    const db = await connect("mongodb://localhost:27017/mern-social");
    console.log(`Database connected ${db.connection.db.databaseName}`);
  } catch (error) {
    console.error(error);
  }
}
