import {Schema, model} from 'mongoose';



const ItemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now()
    }
});


export const ItemModel = model('item', ItemSchema);
