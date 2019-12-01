import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import {mongoURI} from './config/keys';
import itemRouter from './routes/api/items';

const cors = require('cors');


const app = express();

// body parser middleware
app.use(bodyParser.json());

/*
//TODO change cors rules to be more broad
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://192.168.2.107:19006");
    //res.setHeader("Access-Control-Allow-Origin", "http:localhost:5000");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();

});

 */

app.use(cors());

// DB config

// Connect to Mongo
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log('Connected to MongoDB');
});

app.use('/api/items', itemRouter);



const port = process.env.PORT || 5000;

app.listen(port, () =>{
    console.log('Server start on port', port);
});

