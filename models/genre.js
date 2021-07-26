let mongoose = require('mongoose');
// Define Schema
let Schema = mongoose.Schema;

let GenreSchema = new Schema(
    {
        name: {type: 
            String, 
            required: true, 
            minLength: 3, 
            maxLength: 100}
    }
);

// Virtual for genre's URL
GenreSchema
.virtual('url')
.get( () => {
    return '/catalog/genre/' + this._id;
});

module.exports = mongoose.model('Genre', GenreSchema);