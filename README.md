# QUnit test coverage data with blanket and grunt

This is a simple demo showing how to generate test coverage data from QUnit tests using [Blanket.js](http://blanketjs.org/) and [grunt](https://gruntjs.com/).


## Setup

Install grunt:
```
npm install -g grunt-cli
```

Clone project:
```
git clone git@github.com:chill117/qunit-test-coverage-with-blanket-and-grunt.git
```

Install project dependencies:
```
cd qunit-test-coverage-with-blanket-and-grunt
npm install
```

Generate coverage data:
```
grunt coverage
```

A new file (`coverage-report.json`) should have been created, with contents like the following:
```json
{
  "/app/some-module.js": {
    "1": 1,
    "3": 1,
    "4": 1,
    "6": 1,
    "9": 0
  },
  "/app/another-module.js": {
    "1": 1,
    "3": 1,
    "4": 1,
    "6": 1,
    "7": 0,
    "9": 1
  }
}
```
