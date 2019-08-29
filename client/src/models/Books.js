// Require mongoose npm package
const mongoose = require("mongoose");

// create a schema using the mongoose schema function
const Schema = mongoose.Schema;

// Create a new Schema called booksSchema
var booksSchema = new Schema ({
    title : {
        type: String,
        required: true
    },
    authors: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    link: {
        type: String
        }
});

var Book = mongoose.model("Book", bookSchema);

module.exports = Book;