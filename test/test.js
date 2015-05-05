'use strict';
var chai = require( 'chai' );
var expect = chai.expect;
var extloc = require( './../lib/extloc' );
var logger = require( './../lib/logger.js' );
var fs = require( 'fs' );

describe( 'extloc', function () {

	it( 'should return a valid path (using a promise)', function ( done ) {
		extloc.getPath()
			.then( function ( data ) {
				logger.silly( 'data', data );
				expect( data ).not.to.be.empty;
				expect( fs.existsSync( data ) ).to.be.true;
				done();
			} )
	} );

} );
