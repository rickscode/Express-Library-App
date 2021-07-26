let mongoose = require('mongoose');
// Define Schema
let Schema = mongoose.Schema;

let BookSchema = new Schema(
  {
    title: {type: String, required: true},
    // Reference to single Author model object
    author: {type: Schema.Types.ObjectId, ref: 'Author', required: true},
    summary: {type: String, required: true},
    isbn: {type: String, required: true},
    // Reference to array of genre model objects
    genre: [{type: Schema.Types.ObjectId, ref: 'Genre'}]
  }
);

// Virtual for book's URL
BookSchema
.virtual('url')
.get(function () {
  return '/catalog/book/' + this._id;
});

//Export model
module.exports = mongoose.model('Book', BookSchema);
