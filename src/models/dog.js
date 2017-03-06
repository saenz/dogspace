var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var DogSchema = new Schema({
  name: String,
	breed: String
});

mongoose.model('Dog', DogSchema);
