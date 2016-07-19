'use strict';
var fs = require( 'fs' );
var Winreg = require( 'winreg' );
var path = require( 'path-extra' );
//var logger = require( './logger.js' );

function SenseLoc () {

}

/**
 * Return the local extension path (when working with Qlik Sense Desktop).
 * In case of a non Windows operating system, `null` will be returned.
 *
 * **Example**
 *
 * ```js
 * var senseLoc = require( 'sense-loc' );
 * senseLoc.getLocalExtensionPath( function( err, data ) {
 * 	console.log('Local directory for extensions: ', data);
 * });
 * ```
 *
 * @api public
 * @param {callback} cb - Callback that handles the request.
 */
SenseLoc.prototype.getLocalExtensionPath = function ( callback ) {

	if ( process.platform === 'win32' ) {

		var regKey = new Winreg( {
			hive: Winreg.HKCU,
			key: '\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\User Shell Folders'
		} );

		try {
			regKey.values( function ( err, items ) {
				for ( var i in items ) {
					if ( items[i].name === 'Personal' ) {
						var dir = path.join( items[i].value, 'Qlik/Sense/Extensions' ).replace( /\\/g, "\\\\" );
						dir = dir.replace( '%USERPROFILE%', process.env['USERPROFILE'].replace( /\\/g, "\\\\" ) );
						callback( null, dir );
					}
				}
			} );
		}
		catch ( err ) {
			callback( err );
		}
	}
	else {
		callback( null, undefined );
	}

};

module.exports = new SenseLoc();
