const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { getAllStereos } = require ('../database/index.js');

app.use(bodyParser());
app.use(express.static(__dirname + '/../client/dist'));

const port = 3002;

app.get('/api/stereos', (req, res) => {
  getAllStereos((results) => {
    console.log(results);
    res.send(results);
  });
});



app.listen(port, () => console.log (`Listening on port ${port}...`));