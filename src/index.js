// const app = require("./server");
// const mongoose = require("mongoose");
// const port = process.env.PORT || 3000;
// const startserver = async () => {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://aryancs21:Aryan123@cluster0.fxho89d.mongodb.net/mydatabase",
//       { useNewUrlParser: true }
//     );
//     console.log("Connected to database");
//     app.listen(port, () => console.log("Example app listening on port 3000!"));
//   } catch (error) {
//     console.log(error);
//   }
// };
// startserver();
const app = require("./server");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI; // Use the environment variable
    await mongoose.connect(mongoUri, { useNewUrlParser: true });
    console.log("Connected to database");
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
