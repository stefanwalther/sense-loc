[![NPM version](https://img.shields.io/npm/v/sense-loc.svg?style=flat)](https://www.npmjs.com/package/sense-loc)
[![Build status](https://ci.appveyor.com/api/projects/status/t2ol7g1g8c82ekkn/branch/master?svg=true)](https://ci.appveyor.com/project/stefanwalther/sense-loc/branch/master)
[![Build Status](https://img.shields.io/travis/stefanwalther/sense-loc.svg?style=flat)](https://travis-ci.org/stefanwalther/sense-loc)

# sense-loc

> Get Qlik Sense related folder locations.

## About

Right now, this is a tiny library, just to get the local extension folder path, but additions might be added in the future.

## API

### [.getLocalExtensionPath](lib/index.js#L28)
Return the local extension path (when working with Qlik Sense Desktop). In case of a non Windows operating system, `null` will be returned.

**Params**

* **{callback}**: cb - Callback that handles the request.    

**Example**

```js
var senseLoc = require( 'sense-loc' );
senseLoc.getLocalExtensionPath( function( err, data ) {
	console.log('Local directory for extensions: ', data);
});
```

## Test
Install dev dependencies:

```sh
$ npm install -d && npm test
```

## Author

* [qliksite.io](http://qliksite.io)
* [twitter/waltherstefan](http://twitter.com/waltherstefan)
* [github.com/stefanwalther](http://github.com/stefanwalther)

## License

Copyright © 2016, [Stefan Walther](https://github.com/stefanwalther).
Released under the MIT license.

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on July 19, 2016._

