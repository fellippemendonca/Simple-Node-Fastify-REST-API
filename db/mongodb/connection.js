const mongoose = require('mongoose');

function MongoDB(url) {
  this.url = url;
  this.db = null;
};

MongoDB.prototype.init = function(url) {
  mongoose.connect(this.url, {useNewUrlParser: true, useUnifiedTopology: true});
  this.db = mongoose.connection;
  this.db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  return this.db;
};

module.exports = MongoDB;
