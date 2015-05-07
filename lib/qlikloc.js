'use strict';
var fs = require( 'fs' );
var Winreg = require( 'winreg' );
var Q = require( 'q' );
var path = require( 'path-extra' );
//var logger = require( './logger.js' );

function QlikLoc () {

}

/**
 * Return the extension path.
 * **Example**
 *
 * ```js
 * var extloc = require( 'extloc' );
 * extloc.getExtensionPath()
 * .then( function( reply ) {
 *     console.log( reply );
 * })
 * ```
 *
 * @api public
 * @returns {promise} Promise containing the returned path.
 */
QlikLoc.prototype.getExtensionPath = function () {

  var deferred = Q.defer();

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

            deferred.resolve( dir );
          }
        }
      } );
    }
    catch ( err ) {
      deferred.reject( err );
    }
  }
  else {
    var dir = path.homedir() + '\\Documents\\Qlik\\Sense\\Extensions';
    deferred.resolve( dir );
  }
  return deferred.promise;

};

module.exports = new QlikLoc();
