/*
* Gulp Builder (Core)
* @version: 1.0.0 (Fri, 27 May 2020)
* @author: HtmlStream
* @license: Htmlstream (https://htmlstream.com/licenses)
* Copyright 2020 Htmlstream
*/

const userConfig = require('../config');

// Replace container with container-fluid if set default header
if (userConfig.layoutBuilder.header.layoutMode === 'default' && userConfig.layoutBuilder.header.containerMode === 'container') {
  userConfig.layoutBuilder.header.containerMode = 'container-fluid';
}

// Mutatuin
const mutator = {
  autopath: "@@autopath",
  deleteLine: "hs-builder:delete",
  "deleteLine:build": "hs-builder:build-delete",
  "deleteLine:dist": "hs-builder:dist-delete",
  previewMode: false,
}

const additionNames = {
  assets: "assets",
  css: "assets/css",
  js: "assets/js",
  scss: "assets/scss",
  svg: "assets/svg",
  vendor: "assets/vendor"
}

module.exports.additionNames = additionNames;

module.exports.config = {...mutator, ...userConfig}

const context = {
  buildFolder: userConfig.buildFolder,
  fileNames: userConfig.fileNames,
  vars: userConfig.vars,
  startPath: userConfig.startPath,
  directoryNames: userConfig.directoryNames,
  layoutBuilder: userConfig.layoutBuilder
}

module.exports.context = {...mutator, ...context}

// Path level function
module.exports.pathLevel = (file) => {
  relativePathLevels = file.relative.split(/\/|\\/).length - 1;

  let level = '';

  if (relativePathLevels) {
    for (let i = 0; i < relativePathLevels; i++) {
      if (relativePathLevels === i + 1) {
        level = level + '..'
      } else {
        level = level + '../'
      }
    }
  }
  else {
    level = '.'
  }

  return level;
}

module.exports.shieldingVariables = (match, p1) => {
  return match.replace(p1, '@@');
}
