# aif-str

## Gestión y conversiones de cadenas

Un conjunto de funciones útiles para el tratamiento de cadenas.

### Instalación

Descargue la biblioteca con npm / Yarn, desde sus archivos locales.

Vía NPM:

    $ npm install aif-str
    
Vía YARN:

    $ yarn add aif-str


### Uso
La biblioteca se puede incluir en su código a través de importaciones de CommonJS o ES.

ES2015 (ES6):
```javascript
import * as str from "aif-str";
```
CommonJS:
```javascript
var str = require("aif-str");
```
Con las importaciones de ES también es posible usar componentes individuales. Por ejemplo:
```javascript
import { split } from "aif-str";
```

#### Métodos

**split**(*string*, [*numeric*])

Ejemplo usando la definición de credenciales:

```javascript
var str = require("aif-str");
var arr = str.split('valores',3);

```

salida:

<span style="color:gray">// val, ore, s</span>

## Tests

    $ npm test

o bien 

    $ yarn test

## build

    $ npm run build

o bien

    $ yarn build



## Información de contacto de seguridad

Para informar vulnerabilidades de seguridad, utilice el siguiente link: https://github.com/mygnet/aif-str/issues

---
[npm-image]: https://img.shields.io/npm/v/aif-str.svg
[npm-url]: https://www.npmjs.com/package/aif-str