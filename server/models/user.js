var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
      type: String,
      required: true
  },
  password: {
      type: String,
      required: true
  },
  token: {
    type: String,
    required: true
}
});
var Model = mongoose.model('User', userSchema);
module.exports = Model;