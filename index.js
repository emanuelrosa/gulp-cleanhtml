var es = require('event-stream');
var gutil = require('gulp-util');
var htmlClean = require('htmlclean');

module.exports = function(options) {
  'use strict';
  return es.map(function (file, cb) {
    file.contents = new Buffer(
      htmlClean(file.contents.toString(), options)
    );
    cb(null,file);
  });
};