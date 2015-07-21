'use strict';
var fs = require( 'fs' );
var Winreg = require( 'winreg' );
var path = require( 'path-extra' );
//var logger = require( './logger.js' );

function SenseLoc () {

}

/**
 * Return the local extension path.
 *
 * **Example**
 *
 * ```js
 * var senseLoc = require( 'sense-loc' );
 * senseLoc.getExtensionPath( function( err, data ) {
 * 	console.log('Local directory for extensions: ', data);
 * });
 * ```
 *
 * @api public
 * @param callback
 */
SenseLoc.prototype.getExtensionPath = function ( callback) {

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
    var dir = path.homedir() + '\\Documents\\Qlik\\Sense\\Extensions';
	  callback( null, dir );
  }

};

module.exports = new SenseLoc();
