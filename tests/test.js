'use strict';
var chai = require( 'chai' );
var should = chai.should();
var extloc = require( './../lib/extloc' );

describe( 'extloc', function () {
	it( 'should return a valid path', function ( done ) {
		extloc.getPath().then( function ( data ) {
			console.log('data', data);
			data.should.not.be.empty;
			done();
		})
	} );
} );
