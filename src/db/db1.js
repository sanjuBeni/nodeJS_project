import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect("url/dbname");
    console.log(`Connection is build on host : ${conn.connection.host}`);
  } catch (error) {
    console.log(`Connect not build some error : ${error.message}`);
    process.exit(1);
  }
};

export default connectDb;
