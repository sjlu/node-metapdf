var Promise = require('bluebird')
var pdfjs = require('pdfjs-dist/build/pdf')
var fs = Promise.promisifyAll(require('fs'))

var convertBuffer = module.exports.convertBuffer = function(buffer) {

  return Promise
    .resolve(buffer)
    .then(function(buffer) {
      return new Uint8Array(buffer)
    })

}

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

module.exports.getInfo = function(input) {

  return Promise
    .resolve()
    .then(function() {
      if (Buffer.isBuffer(input)) {
        return convertBuffer(input)
      } else if (typeof(input) === "string") {
        return readFile(input)
      }

      throw new Error("Input type must be a buffer or the path to the file")
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