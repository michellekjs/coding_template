//settings for using the libraries
const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

//MONGODB_URI is connection string + name of the database
const MONGODB_URI = "mongodb://localhost:27017/new"

//connect using mongoose
mongoose.connect(
  MONGODB_URI, 
  {
      useNewUrlParser: true,
      useUnifiedTopology: true
  }
);

//make new schema 
const student = new mongoose.Schema({name: String})

//make new object using the student schema into 'newapple' collection
const Student = mongoose.model('newapple', student)

//router /addexample uses .save and add data {name : mingyu} to the 'newapple' document
router.get('/addexample', (req,res) => {
  const small = new Student({ name: 'mingyu' });
  small.save(function (err) {
    if (err) return handleError(err);
  });
})

//router /showexcample uses .find and prints out all the data inside 'newapple' document
router.get('/showexample', (req,res) => {
  console.log(res)
  Student.find({}, function(err,student){ 
    res.send(student)
   });
})

module.exports = router;