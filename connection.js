require("dotenv").config();

const mongoose = require("mongoose");

const connectionStr = `mongodb+srv://antmdb24:OXHTDZgKs7jZGubE@daino.n3nxdmo.mongodb.net/deco_daino?retryWrites=true&w=majority&appName=daino`;
//OXHTDZgKs7jZGubE

mongoose
  .connect(connectionStr, { useNewUrlparser: true })
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log(err));

mongoose.connection.on("error", (err) => {
  console.log(err);
});
