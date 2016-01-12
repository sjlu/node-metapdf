var pdfMeta = require('../index')
var chai = require('chai')
var expect = chai.expect
var Promise = require('bluebird')
var fs = Promise.promisifyAll(require('fs'))

describe('get number of pages for a pdf', function() {

  context('via file path', function() {

    it ('number of pages should equal 1', function() {
      return pdfMeta.getInfo(__dirname + '/pdfs/single-page.pdf')
        .then(function(data) {
          expect(data.pages).to.equal(1)
        })
    })

    it ('number of pages should equal 3', function() {
      return pdfMeta.getInfo(__dirname + '/pdfs/multi-page.pdf')
        .then(function(data) {
          expect(data.pages).to.equal(3)
        })
    })

  })

  context('via buffer', function() {

    it ('should be a buffer', function() {
      return fs.readFileAsync(__dirname + '/pdfs/single-page.pdf')
        .then(function(data) {
          expect(Buffer.isBuffer(data)).to.be.true
        })
    })

    it ('should return data based on being a buffer', function() {

      return fs.readFileAsync(__dirname + '/pdfs/single-page.pdf')
        .then(pdfMeta.getInfo)
        .then(function(data) {
          expect(data.pages).to.equal(1)
        })
    })

  })


})
