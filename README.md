##### Initialize your project with a “package.json” file. Make sure the “main” field is set to “index.js”.
```
npm init --yes
```
##### Local installations express and body-parser
```
npm install express
npm install body-parser
```

##### Add node_modules to .gitignore

##### imports express locally
```
    const express = require('express');
```

##### declares a variable that encapsulates Express’ functionality to configure your web server.

This new variable is what you’ll use to route your HTTP requests and responses.

```
    const app = express();
```

