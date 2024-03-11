import mongoose from "mongoose";

const Connection = async (password = "Sion1234") => {
  const URL = `mongodb+srv://user:${password}@cluster0.68wh0zp.mongodb.net/`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error);
  }
};

export default Connection;
