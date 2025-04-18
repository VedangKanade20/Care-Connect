import mongoose from "mongoose";

const connDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected : ${connectionInstance.connection.host}`);
  } catch (err) {
    console.error(`Error : ${err.message}`);
    process.exit(1);
  }
};

export default connDB;
