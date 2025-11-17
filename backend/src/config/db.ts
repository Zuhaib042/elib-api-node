import mongoose from "mongoose"
import { config } from "./config.ts";

const connectDb = async () => {
  try {
    
    mongoose.connection.on('connection', () => {
      console.log("Connected successfully to database")
    })
    
    mongoose.connection.on('error', (err) => {
      console.log("Error in connnecting to database", err)
    })
    await mongoose.connect(config.database as string)
  } catch(err) {
    console.log("Failed to connect to database", err)
    process.exit(1);
  }
}

export default connectDb;