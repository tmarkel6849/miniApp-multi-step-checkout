const express = require('express');
const fs = require('fs');
const path = require('path');
const db = require('./db/index.js');

const app = express();

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Checkout listening on port 3000');
});


app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendStatus(200);
})

//create helper function to take data from request obj
app.post('/forms', (req, res) => {
  console.log('Post came through')
  res.sendStatus(201);
})

app.get('/checkout', (req, res) => {
  res.sendStatus(200);
});

/*________________Database idea__________________*/
//when next buttons are clicked they send the form data to the server
  //server stores the form data in an object, waiting for the purchase button to be triggered
//purches button is clicked, data sent to server
  //server stores object form data in database, wipes object

/*_______________React Idea__________________*/
//give app a state that is updated by page
  //state updates by button clicks, form compenents rendered depending on these updates
//props to pass down
  //next button click
  //purchase button click
  //checkout button click

/*_____________________Sending data to server____________________*/
//event listeners passed as props to components
  //trigger fetches that send form data to the server (or use jquery)