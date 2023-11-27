##### Initialize your project with a “package.json” file. Make sure the “main” field is set to “index.js”.
```
npm init --yes
```
##### Local installations express and body-parser
```
npm install express
npm install body-parser
npm install morgan
```

##### Add node_modules to .gitignore

##### imports expres, morgan, fs, and path locally
```
    const express = require('express'),
    morgan = require('morgan'),
    fs = require('fs'),
    path = require('path');
```

##### declares a variable that encapsulates Express’ functionality to configure your web server.

This new variable is what you’ll use to route your HTTP requests and responses.

```
    const app = express();
```
### Request Routing with Express
