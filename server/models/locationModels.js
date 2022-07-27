const mongoose = require("mongoose");

// if(process.argv.length < 3){
//     console.log('Please provide the password as an argument: node mongo.js <password>');
//     process.exit(1);
// }

// const password = process.argv[2];

const url =
  "mongodb+srv://ahoymateykatie:2eJPrJ3pRQe3VKM@cluster0.5ljqp3n.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then((result) => {
    console.log("connected");
  })
//     const note = new Note({
//       content: "HTML is Easy",
//       date: new Date(),
//       important: true,
//     });

//     return note.save();
//   })
//   .then(() => {
//     console.log("note saved!");
//     return mongoose.connection.close();
//   })
  .catch((err) => console.log(err));

  const locationSchema = new mongoose.Schema({
    location: String,
    description: String,
    restaurant: String,
    date: String,
  });
  
  const Location = mongoose.model("Location", locationSchema);

  module.exports = {
    Location,
  };