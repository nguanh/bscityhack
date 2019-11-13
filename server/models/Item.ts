import {Schema, model, Document} from 'mongoose';


interface IItem  extends Document {
    name: string;
    date: Date;
}

const ItemSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now()
    }
});


export const ItemModel= model<IItem>('item', ItemSchema);
