import {ItemModel} from '../../models/Item';
import express from 'express';

const router = express.Router();


// @route GET api/items
// @desc get all items
// @access public
router.get('/', ((req, res) => {
    ItemModel
        .find()
        .sort({date: -1})
        .then((items) => res.json(items))
}));

// @route POST api/items
// @desc create item
// @access public
router.post('/', ((req, res) => {
    console.log(req.body.name);
    const newItem =  new ItemModel({
        name: req.body.name
    });
    newItem.save().then((item) => res.json(item));
}));

// @route DELETE api/items
// @desc Delete Item
// @access public
router.delete('/:id', (async(req, res) => {
    const _id = req.params.id;
    try {
        const foundItem = await ItemModel.findById(_id);
        if (foundItem){
            await foundItem.remove();
        }
        res.json({success: true})
    } catch(err) {
        res.status(404).json({success: false})
    }
}));

// @route PATCH api/items
// @desc Edit Text of Item by Id
// @access public
router.patch('/:id/:value', (async(req, res) => {
    const _id = req.params.id;
    const value = req.params.value;
    try {
        const foundItem = await ItemModel.findById(_id);
        if (foundItem){
            const result = await ItemModel.updateOne({_id}, {name: value});
            if (result && result.ok) {
                const edited = await ItemModel.findById(_id);
                res.json(edited);
            }
            res.status(404).json({success: false})
        } else {
            res.status(404).json({success: false})
        }

    } catch(err) {
        res.status(404).json({success: false})
    }
}));


export default  router;
