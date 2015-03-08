'use strict';
var chai = require( 'chai' );
var should = chai.should();
var extloc = require( './../lib/extloc' );
var logger = require( './../lib/logger.js' );

describe( 'extloc', function () {
	it( 'should return a valid path', function ( done ) {
		extloc.getPath().then( function ( data ) {
			logger.silly( 'data', data );
			data.should.not.be.empty;
			done();
		} )
	} );
} );
