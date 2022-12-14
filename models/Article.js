//need to figure out model

const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    published_date: {
      type: Date
    },
    publisher: {
      type: String
    },
  });
  
  module.exports = Article = mongoose.model('article', ArticleSchema);