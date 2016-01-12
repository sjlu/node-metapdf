# pdfmeta

[![Circle CI](https://circleci.com/gh/sjlu/pdfmeta.svg?style=svg)](https://circleci.com/gh/sjlu/pdfmeta)
[![npm version](https://badge.fury.io/js/pdfmeta.svg)](https://badge.fury.io/js/pdfmeta)

Just returns meta information about a PDF using [pdfjs](https://mozilla.github.io/pdf.js/).

## Install

```
npm install pdfmeta --save
```

## Usage

```
var pdfmeta = require('pdfmeta')
pdfmeta.getInfo(filePath).then(function(data) {
    console.log(data)
})
```

### `getInfo(<path, buffer>)`

* getInfo can accept either a file path or a buffer
* returns an object with information

```
{
    pages: 1
}
```

## Development

If you're interested in extending this library, clone this repository and run the appropriate tests.

```
git clone git@github.com:sjlu/pdfmeta.git
cd pdfmeta
npm test
```

## License

MIT
