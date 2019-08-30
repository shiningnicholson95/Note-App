const mongoose = require('mongoose')
const Schema = mongoose.Schema
const noteSchema = new Schema({
    Title: {
        type: String,
        required: true,
        unique: true,
        minlength: 5
    },
    Description: {
        type: String,
        required: true,
        unique: true,
        minlength: 5
    },
    Content: {
        type: String,
        required: true,
        minlength: 30,
    },
    tokens: [
        {
            token: {
                type: String
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ] 
})
const Note = mongoose.model('Note', noteSchema)
module.exports ={
    Note
}