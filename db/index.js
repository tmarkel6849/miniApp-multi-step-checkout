const sqlite3 = require('sqlite3');

let db = new sqlite3.Database('./multistep.db', err => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to checkout database');
});
/*___________TEST QUERY________________*/
let queryString = 'Select name FROM checkout WHERE name=?';
let insertString = 'INSERT INTO checkout (name, email, password, address, phonenumber, creditcard) VALUES (?,?,?,?,?,?)';
let params = ['Fred', 'fred@yahoo', 'Batman123', 'Somewhere, CA', 1234567890, '123456789012 12/12'];


db.get(queryString, 'Trevor', (err, row) => {
  if (err) {
    return console.error(err.message);
  }
  console.log(row.name);
})
db.run(insertString, params, (err, result) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Row was created');
})



db.close(err => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Database closed');
})