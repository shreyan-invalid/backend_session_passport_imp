const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;
 
var fetch = require('node-fetch');
var SECRET_KEY = "6LdFmGsbAAAAAInWLdijAFEf_gD968l6Wh5NGMZE";
 

var cors = require('cors');
app.use(cors());
 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/verify', (req, res) => {
  var VERIFY_URL = `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${req.body['g-recaptcha-response']}`;
  return fetch(VERIFY_URL, { method: 'POST' })
    .then(res => res.json())
    .then(json => res.send(json));
});
 

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Clue Mediator' });
});


app.listen(port, () => {
  console.log('Server started on: ' + port);
});