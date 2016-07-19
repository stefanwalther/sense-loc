/*global describe, it*/
'use strict';
var chai = require( 'chai' );
var expect = chai.expect;
var senseLoc = require( './../lib/index.js' );
var fs = require( 'fs' );

describe( 'sense-loc', function () {

	it( 'contains valid methods', function ( done ) {
		expect( senseLoc ).to.be.ok;
		expect( senseLoc.getLocalExtensionPath ).to.be.a.function;
		done();
	} );

	it( 'should return a valid path', function ( done ) {
		senseLoc.getLocalExtensionPath( function ( err, data ) {
			if ( process.platform === 'win32' ) {
				expect( err ).to.be.null;
				expect( data ).not.to.be.empty;
				expect( fs.existsSync( data ) ).to.be.true;
			} else {
				expect( err ).to.be.null;
				expect( data ).to.be.null;
			}
			done();
		} );
	} );

} );
