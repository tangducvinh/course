const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongooseDelete = require('mongoose-delete')
const slug = require('mongoose-slug-generator')



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

// Add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all' },
)



module.exports = mongoose.model('Course', Course);