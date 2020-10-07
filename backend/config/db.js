import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host} \n`.cyan.underline);
  } catch (err) {
    console.log(`Error: ${err.message} \n`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
