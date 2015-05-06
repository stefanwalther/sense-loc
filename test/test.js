'use strict';
var chai = require( 'chai' );
var expect = chai.expect;
var qlikloc = require( './../lib/qlikloc' );
var logger = require( './../lib/logger.js' );
var fs = require( 'fs' );

console.log( 'qlikloc', qlikloc );

describe( 'extloc', function () {

  it( 'contains valid methods', function ( done ) {
    expect( qlikloc ).be.ok;
    expect( qlikloc.getExtensionPath ).to.be.function;
    done();
  } );

  it( 'should return a valid path (using a promise)', function ( done ) {
    qlikloc.getExtensionPath()
      .then( function ( data ) {
        logger.silly( 'data', data );
        expect( data ).not.to.be.empty;
        expect( fs.existsSync( data ) ).to.be.true;
        done();
      } )
  } );

} );
