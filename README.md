# aif-str

## Chain conversions and management

A set of useful functions for the treatment of chains.

### Installation

Download the library with npm / Yarn, from your local files.

Vía NPM:

    $ npm install aif-str
    
Vía YARN:

    $ yarn add aif-str


### Use
The library can be included in your code through imports from CommonJS or ES.

ES2015 (ES6):
```javascript
import * as str from "aif-str";
```
CommonJS:
```javascript
var str = require("aif-str");
```
With ES imports it is also possible to use individual components. For example:
```javascript
import { split } from "aif-str";
```

#### Methods

**split** (*string*, [*numeric*])

Example using the credential definition:

```javascript
var str = require("aif-str");
var arr = str.split('string',3);

```

Code output:

<span style="color:gray">// str, ing</span>

## Tests

    $ npm test

O well

    $ yarn test

## build

    $ npm run build

O well

    $ yarn build



## Security contact information

To report security vulnerabilities, use the following link: https://github.com/mygnet/aif-str/issues

---
[npm-image]: https://img.shields.io/npm/v/aif-str.svg
[npm-url]: https://www.npmjs.com/package/aif-str