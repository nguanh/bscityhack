import express from 'express'
import mongoose from "mongoose";
import bodyParser from "body-parser";


const app = express();

// body parser middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log("Connected to MongoDB");
});
// use routes
const items = require('./routes/api/items');

app.use('/api/items', items);



const port = process.env.PORT || 5000;

app.listen(port, () =>{
    console.log('Server start on port! ', port);
});

// https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files
export {};
