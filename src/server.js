
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();  // Load environment variables

const app = express();
const port = 3000;

// create a nodemailer transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aryan.cs21@bmsce.ac.in',
    pass: 'Aryan_311202'  // Consider using OAuth2 for better security
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'../','html','home.html'));
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'../','html'))); // set the directory for static files

// connect to the MongoDB database using the URI from the environment variable
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// define the user schema
const userSchema = new mongoose.Schema({
  fullName: String,
  phoneNumber: String,
  email: String,
  address: String,
  product: String,
  state: String,
  zipCode: String
});

// create a new user model based on the schema
const User = new mongoose.model('User', userSchema);

// handle the form submission
app.post('/submit-form', async (req, res) => {
  console.log("Request received");
  try {
    // create a new user based on the form data
    const user = new User({
      fullName: req.body.fullName,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      address: req.body.address,
      product: req.body.product,
      state: req.body.state,
      zipCode: req.body.zipCode
    });

    // save the user to the database
    await user.save();

    // send an email to the user
    const mailOptions = {
      from: 'aryan.cs21bmsce.ac.in',
      to: req.body.email,
      subject: 'Thank you for your order',
      text: `
        Your order has been received and is being processed. Thank you for choosing our service!
    
        Here is a copy of the information you submitted:
        Full Name: ${req.body.fullName}
        Phone Number: ${req.body.phoneNumber}
        Email Address: ${req.body.email}
        Address: ${req.body.address}
        Product: ${req.body.product}
        State: ${req.body.state}
        Zip Code: ${req.body.zipCode}

        In order to cater to every customer's needs, we will be calling the customer to get the dimensions, photos, and other customizations required. Thank you for supporting our business. Have a nice day :)
      `
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.status(200).sendFile(path.join(__dirname,'..','html','thanks.html'));
  } catch (err) {
    console.log("error")
    console.log(err);
    res.status(500).send('Error saving user to database');
  }
});

app.get("/test", (_req, res) => {
  res.status(200).send("Hello world");
});

module.exports = app;

// start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});











