import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import {mongoURI} from './config/keys';
import itemRouter from './routes/api/items';


const app = express();

// body parser middleware
app.use(bodyParser.json());

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

