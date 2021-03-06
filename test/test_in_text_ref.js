'use strict';

/**
 * Test in-text references
 */

const fs = require('fs');
const pdf_stream = require('pdf-stream');

const ParserTransform = require('../index').ParserTransform;
const XMLTransform = require('../index').XMLinTextRefTransform;
const FileTransform = require('../index').FileTransform;


const gost = require('../styles/gost');

let file = './CRIS2016_paper_40_Parinov.txt';
//let file = './2014_Nevolin_rfbr.txt';
//let file = './pdt-journal_112_145.txt';
const text_stream = fs.createReadStream(file);

text_stream
  .pipe(new ParserTransform(gost))
  .pipe(new XMLTransform())
  .pipe(new FileTransform({
    outdir: '.',
    prefix: 'CRIS2016_paper_40_Parinov_intextref',
  }))
//.pipe(process.stdout)
;