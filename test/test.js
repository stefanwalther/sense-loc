'use strict';
var chai = require( 'chai' );
var expect = chai.expect;
var senseLoc = require( './../lib/index.js' );
var fs = require( 'fs' );

describe( 'extloc', function () {

	it( 'contains valid methods', function ( done ) {
		expect( senseLoc ).be.ok;
		expect( senseLoc.getLocalExtensionPath ).to.be.function;
		done();
	} );

	it( 'should return a valid path (using a promise)', function ( done ) {
		senseLoc.getLocalExtensionPath( function ( err, data ) {
			expect( data ).not.to.be.empty;
			expect( fs.existsSync( data ) ).to.be.true;
			done();
		} );
	} );

} );
