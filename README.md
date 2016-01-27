# immudate
Immutable date operations.
```
npm install immudate
```

## Usage
See tests and source code for full API spec.
Some examples:

```javascript
var d = require('immudate');

var today = d.now();
var tomorrow = currentTime.plusHours(24); //today is not changed
var somewhereInThePast = d.past();
var somewhereInTheFuture = d.future();
```

**Do not forget to get *date* property when using Immudate object as Date object:**
```
entity.created_at = immudate.now().date;
```
