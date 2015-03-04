'use strict';

var fs = require('fs'),
    PNG = require('node-png').PNG,
    parse = require('color-parser');

var fauxfriend = module.exports = {
  generateSingle: function (color1, color2, pct, outfile) {
    var width = 3000;
    var c1 = parse(color1);
    var c2 = parse(color2);
    var png = new PNG({width: width, height: 1});
    for (var x = 0; x < width; x++) {
      var col = ((x / width) * 100 < pct) ?  c1 : c2;
      var idx = x << 2;
      png.data[idx]   = col.r;
      png.data[idx+1] = col.g;
      png.data[idx+2] = col.b;
      png.data[idx+3] = col.a*255;
    }
    png.pack().pipe(fs.createWriteStream(outfile));
  }
}

if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
  exports.fauxfriend = fauxfriend;
  exports.main = function commonjsMain(args) {
    var parseArgs = require('minimist')(args);
    console.dir(parseArgs);

    fauxfriend.generateSingle(parseArgs.l, parseArgs.r, parseArgs.pct, parseArgs.out);
  }
  if (typeof module !== 'undefined' && require.main === module) {
    exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
  }
}
