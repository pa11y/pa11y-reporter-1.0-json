
pa11y JSON 1.0 reporter
=======================

A reporter for [pa11y][pa11y] 2.0 which outputs 1.0-style JSON.

[![NPM version][shield-npm]][info-npm]
[![Node.js version support][shield-node]][info-node]
[![Build status][shield-build]][info-build]
[![Dependencies][shield-dependencies]][info-dependencies]
[![GPLv3 licensed][shield-license]][info-license]

```sh
pa11y --reporter 1.0-json nature.com
```


Usage
-----

Install pa11y and pa11y-reporter-1.0-json with [npm][npm]:

```
npm install -g pa11y
npm install -g pa11y-reporter-1.0-json
```

Use the reporter with the `--reporter` flag:

```sh
pa11y --reporter 1.0-json nature.com
```

You'll get the 1.0-style JSON:

```js
{
    "isPerfect": Boolean,
    "count": {
        "total": Number,
        "error": Number,
        "warning": Number,
        "notice": Number
    },
    "results": Array
}
```


Contributing
------------

To contribute to pa11y-reporter-1.0-json, clone this repo locally and commit your code on a separate branch.

Please write unit tests for your code, and check that everything works by running the following before opening a pull-request:

```sh
make lint test
```

We use [JavaScript Code Style][jscs] to ensure pa11y-reporter-1.0-json's source code is clean and consistent. You can check your work against our rules by running:

```sh
make jscs-check
```


License
-------

Copyright 2015 Nature Publishing Group.  
pa11y is licensed under the [GNU General Public License 3.0][info-license].



[npm]: https://www.npmjs.com/
[pa11y]: https://github.com/nature/pa11y

[info-dependencies]: https://gemnasium.com/nature/pa11y-reporter-1.0-json
[info-license]: LICENSE
[info-node]: package.json
[info-npm]: https://www.npmjs.com/package/pa11y-reporter-1.0-json
[info-build]: https://travis-ci.org/nature/pa11y-reporter-1.0-json
[shield-dependencies]: https://img.shields.io/gemnasium/nature/pa11y-reporter-1.0-json.svg
[shield-license]: https://img.shields.io/badge/license-GPLv3-blue.svg
[shield-node]: https://img.shields.io/node/v/pa11y-reporter-1.0-json.svg?label=node.js%20support
[shield-npm]: https://img.shields.io/npm/v/pa11y-reporter-1.0-json.svg
[shield-build]: https://img.shields.io/travis/nature/pa11y-reporter-1.0-json/master.svg
