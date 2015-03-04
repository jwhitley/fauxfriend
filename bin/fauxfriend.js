#!/usr/bin/env node

var fauxfriend = require('fauxfriend');

var argv = require('yargs')
  .usage('Usage: fauxfriend -l [color] -r [color] -p [percentage] <output file>')
  .demand(['l', 'r', 'p'])
  .demand(1)
  .describe('l', 'left color')
  .describe('r', 'right color')
  .describe('p', 'percentage of boundary point')
  .argv;

fauxfriend.generateSingle(argv.l, argv.r, argv.p, argv._[0]);
