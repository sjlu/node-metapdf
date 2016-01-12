var Promise = require('bluebird')
var pdfjs = require('pdfjs-dist/build/pdf')
var fs = Promise.promisifyAll(require('fs'))

var readFile = module.exports.readFile = function(path) {

  return Promise
    .resolve()
    .then(function() {
      return fs.readFileAsync(path)
    })
    .then(function(data) {
      return new Uint8Array(data)
    })

}

module.exports.getInfo = function(path) {

  return Promise
    .resolve()
    .then(function() {
      return readFile(path)
    })
    .then(function(dataArray) {
      return pdfjs.getDocument(dataArray)
    })
    .then(function(doc) {
      return {
        pages: doc.numPages
      }
    })

}