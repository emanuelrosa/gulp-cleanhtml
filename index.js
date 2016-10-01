var es = require('event-stream');
var gutil = require('gulp-util');
var htmlClean = require('htmlclean');

module.exports = function() {
  'use strict';
  return es.map(function (file, cb) {
    file.contents = new Buffer(htmlClean(file.contents.toString(),{
      unprotect: /<(script|style)[\s\S]+?<\/(script|style)>/ig
    }));
    cb(null,file);
  });
};
