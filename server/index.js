const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser());
app.use(express.static(__dirname + '/../client/dist'));

const port = 3002;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => console.log (`Listening on port ${port}...`));