import express from 'express'
import mongoose from "mongoose";
import bodyParser from "body-parser";
import {mongoURI} from './config/keys';


const app = express();

// body parser middleware
app.use(bodyParser.json());

// DB config

// Connect to Mongo
mongoose.connect(mongoURI, {
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
    console.log('Server start on port', port);
});

// https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files
export {};
