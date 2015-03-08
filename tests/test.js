/*!
 * extloc <https://github.com/stefanwalther/extloc>
 *
 * Copyright (c) 2015 Stefan Walther.
 * Licensed under the MIT license.
 */

'use strict';

var assert = require('assert');
var should = require('should');
var extloc = require('./');

describe('extloc', function () {
  it('should:', function () {
    extloc('a').should.equal({a: 'b'});
    extloc('a').should.eql('a');
  });

  it('should throw an error:', function () {
    (function () {
      extloc();
    }).should.throw('extloc expects valid arguments');
  });
});
