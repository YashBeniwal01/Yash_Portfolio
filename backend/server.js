//import express.js
const express = require('express');
const mongoose = require('mongoose');

//allowing cross-origin requests
const cors = require('cors');

//create a instance of the express
const app = express();

//allowing corss origin requests from http://localhost:3000
  
app.use(cors());

//create the port number for your server to listen on
const PORT = process.env.PORT || 5000;

//define middleware to parse JSON 
app.use(express.json());

//Connect to MongoDB
mongoose.connect('mongodb+srv://YashPortfolio:YashPortfolio637892.com@cluster0.m5pcizn.mongodb.net/?retryWrites=true&w=majority&appName=my_portfolio', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

//Define MongoDB schema
const contactSchema = new mongoose.Schema({
    name:String,
    email:String,
    subject:String,
    message:String,
});

//Define MongoDB model
const Contact = mongoose.model('Contact', contactSchema);


//define a route to handle form submission
app.post('/api/contact', async(req, res)=>{
    try{
        // Extract form data from request body
        const {name, email, subject, message} = req.body;

        //we can add validation form data by our logic

        //Save form data to MongoDB database
        await Contact.create({name, email, subject, message});

        //respond with success message
        res.json({message: 'Form submission successful'});

    }catch(error){
        console.error('Error submitting form', error);

        //Respond with an error message
        res.status(500).json({error:"bro error h"});
    }
});


// start the server
app.listen(PORT, ()=>{
    console.log(`server is listening on port ${PORT}`);
});