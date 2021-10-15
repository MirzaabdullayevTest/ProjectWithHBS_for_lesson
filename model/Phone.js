const { Schema, model } = require('mongoose')

const PhoneSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: Number,
    img: String
})

module.exports = model('Phone', PhoneSchema)