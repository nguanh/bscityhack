const express = require('express')
const router = express.Router();

// Item Model
const ItemModel = require('../../models/Item');

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

// @route POST api/items
// @desc Delete Item
// @access public
router.delete('/:id', ((req, res) => {
    ItemModel.findById(req.params.id).then(item =>{
        item.remove()
            .then(() => res.json({success: true}))
            .catch(err => res.status(404).json({success: false}));
    }).catch(err => res.status(404).json({success: false}));
}));


module.exports = router;