var es = require('event-stream');
var gutil = require('gulp-util');
var htmlClean = require('htmlclean');

module.exports = function(options, replace) {

  'use strict';

  // =================
  // validate parameter: replace

  if(typeof replace !== 'undefined'){
    replace.itens = typeof replace.itens === 'undefined' ? replace.itens : '';
  }

  // =================
  // stream file

  return es.map(function (file, cb) {

    // =================
    // minify html with required module "htmlClean" and pass options

    var str = htmlClean(file.contents.toString(), options);

    // =================
    // find and replace array of itens

    if(typeof replace !== 'undefined' && replace.itens !== ''){

      var mapObj = replace.itens;
      var re = new RegExp(Object.keys(mapObj).join("|"),"gi");

      str = str.replace(re, function(matched){
        return mapObj[matched.toLowerCase()];
      });

    }

    // =================
    // define content with "str" value

    file.contents = new Buffer(str);

    cb(null, file);

  });
};