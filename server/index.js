const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { getStereo } = require ('../database/index.js');

app.use(bodyParser());
// app.use(express.static(__dirname + '/../client/dist'));
const static = `${__dirname}/../client/dist`;
app.use('/api/stereos/:id', express.static(static));

const port = 3002;

app.get('/api/stereos/:id', (req, res) => {
  let deepfryd_id = req.params.id;
  getStereo(deepfryd_id, (results) => {
    res.send(results);
  });
});



app.listen(port, () => console.log (`Listening on port ${port}...`));