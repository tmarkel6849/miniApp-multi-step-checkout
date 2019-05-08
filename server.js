const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Checkout listening on port 3000');
});


app.use(express.static('/public'));

app.get('/', (req, res) => {
  res.sendStatus(200);
})