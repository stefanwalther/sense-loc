/*global describe, it*/
'use strict';
var chai = require( 'chai' );
var expect = chai.expect;
var senseLoc = require( './../lib/index.js' );
var fs = require( 'fs' );

describe( 'sense-loc', function () {

	it( 'contains valid methods', function ( done ) {
		expect( senseLoc ).be.ok;
		expect( senseLoc.getLocalExtensionPath ).to.be.function;
		done();
	} );

	it( 'should return a valid path (using a promise)', function ( done ) {
		senseLoc.getLocalExtensionPath( function ( err, data ) {
			expect( err ).to.be.null;
			if ( process.platform === 'win32' ) {
				expect( data ).not.to.be.empty;
				expect( fs.existsSync( data ) ).to.be.true;
			} else {
				expect( data ).to.be.undefined;
			}
			done();
		} );
	} );

} );
