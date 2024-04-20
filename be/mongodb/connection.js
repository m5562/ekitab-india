import mongoose from "mongoose";
const mongodbConnectionString = process.env.MONGODB_CONNECTION_STRING;

function mongoConnect() {
  mongoose
    .connect(mongodbConnectionString)
    .then(() => {
      console.log("MongoDB: ✅");
    })
    .catch(console.log);
}

export { mongoConnect };
