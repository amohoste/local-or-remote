# local-or-remote
Fetches a local or remote (http) resource

## Installing
```
npm install --save local-or-remote
```

## Usage

```javascript
const loadFile = require('local-or-remote')

loadFile(resource).then((data) => {
	console.log(data);
});
```