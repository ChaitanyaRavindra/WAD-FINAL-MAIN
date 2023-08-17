// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const path = require('path');

// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/home.html');
// });


// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname))); // set the directory for static files

// // connect to the MongoDB database
// mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true });

// // define the user schema
// const userSchema = new mongoose.Schema({
//   fullName: String,
//   phoneNumber: String,
//   email: String,
//   address: String,
//   product: String,
//   state: String,
//   zipCode: String
// });

// // create a new user model based on the schema
// const User = new mongoose.model('User', userSchema);

// // handle the form submission
// app.post('/submit-form', async (req, res) => {
//   try {
//     // create a new user based on the form data
//     const user = new User({
//       fullName: req.body.fullName,
//       phoneNumber: req.body.phoneNumber,
//       email: req.body.email,
//       address: req.body.address,
//       product: req.body.product,
//       state: req.body.state,
//       zipCode: req.body.zipCode
//     });

//     // save the user to the database
//     await user.save();
//     res.send('User saved to database');
//   } catch (err) {
//     console.log(err);
//     res.status(500).send('Error saving user to database');
//   }
// });


// // start the server
// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });
