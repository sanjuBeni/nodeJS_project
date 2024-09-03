import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectionDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(connectionInstance.connection.host);
  } catch (error) {
    console.log("Error connection to MongoDB: ", error.message);
    process.exit(1);
  }

  // try {
  //     await mongoose.connect(process.env.MONGODB_URI, {
  //         useNewUrlParser: true,
  //         useUnifiedTopology: true,
  //         useCreateIndex: true,
  //         useFindAndModify: false,
  //     });
  //     console.log("MongoDB Connected...");
  // } catch (error) {
  //     console.error("Error connecting to MongoDB:", error.message);
  //     process.exit(1);
  // }
};
export default connectionDB;
