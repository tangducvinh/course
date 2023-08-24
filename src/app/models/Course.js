const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// loading
const slug = require('mongoose-slug-generator')

//initialization
mongoose.plugin(slug);


const Course = new Schema({
  name: {type: String},
  description: {type: String},
  image: {type: String},
  slug: {type: String, slug: "name"},
  idv: {type: String},
  level: {type: String},
  instructor: {type: String},
}, {
  timestamps: true,
});

module.exports = mongoose.model('Course', Course);