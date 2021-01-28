/*
* SVG Compiler (Build)
* @version: 1.0.0 (Fri, 08 May 2020)
* @author: HtmlStream
* @license: Htmlstream (https://htmlstream.com/licenses)
* Copyright 2020 Htmlstream
*/

const {config, context, additionNames}                                 = require('./core');
const paths                                                            = require('./paths');

const gulp                                                             = require('gulp');
const fileinclude                                                      = require('gulp-file-include');

module.exports.svgCompiler = function() {
  return gulp
    .src([
      paths.src.svg.files
    ])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
      context: context
    }))
    .pipe(gulp.dest(config.directoryNames.src + "/" + additionNames.svg))
};