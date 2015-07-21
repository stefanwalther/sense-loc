'use strict';
var chai = require( 'chai' );
var expect = chai.expect;
var senseLoc = require( './../lib/index.js' );
var logger = require( './../lib/logger.js' );
var fs = require( 'fs' );

describe( 'extloc', function () {

	it( 'contains valid methods', function ( done ) {
		expect( senseLoc ).be.ok;
		expect( senseLoc.getExtensionPath ).to.be.function;
		done();
	} );

	it( 'should return a valid path (using a promise)', function ( done ) {
		senseLoc.getExtensionPath( function ( err, data ) {
			logger.silly( 'data', data );
			expect( data ).not.to.be.empty;
			expect( fs.existsSync( data ) ).to.be.true;
			done();
		} );
	} );

} );
