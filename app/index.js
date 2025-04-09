### `app/index.js`
```js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from CI/CD Pipeline App!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### `app/package.json`
```json
{
  "name": "cicd-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Dummy test passed!\" && exit 0"
  },
  "dependencies": {
    "express": "^4.18.2"
  }
}
```
