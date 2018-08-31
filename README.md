# local-or-remote
Fetches a local or remote (http) resource

## Installing
```
npm install --save local-or-remote
```

## Usage

```javascript
const loadFile = require('local-or-remote')

loadFile(resource, timeout).then((data) => {
	console.log(data);
});
```
- `timeout` (opt.): integer containing the number of milliseconds to wait for a server to send response headers before aborting the request (if fetched from a remote resource). Default: 20000.