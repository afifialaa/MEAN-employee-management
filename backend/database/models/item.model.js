const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    category: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: false
    },
    status: {
        type: String,
        enum: ['utilized', 'idle', 'raw'],
        required: false
    }
})

const Item = mongoose.model('items', ItemSchema);
module.exports = Item;