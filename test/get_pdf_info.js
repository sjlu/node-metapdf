var pdfMeta = require('../index')
var chai = require('chai')
var expect = chai.expect

describe('get number of pages for a pdf', function() {

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
