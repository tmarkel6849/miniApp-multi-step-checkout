const sqlite3 = require('sqlite3');

let db = new sqlite3.Database('./multistep.db', err => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to master database');
});
/*___________TEST QUERY________________*/

let insertString = 'INSERT INTO master (name, email, password, address, phonenumber, creditcard) VALUES (?,?,?,?,?,?)';

db.close(err => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Database closed');
})

module.exports = db;

//examples for params and query
// let params = ['Fred', 'fred@yahoo', 'Batman123', 'Somewhere, CA', 1234567890, '123456789012 12/12'];
// let queryString = 'Select name FROM master WHERE name=?';

//examply of query
// db.get(queryString, 'Trevor', (err, row) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log(row.name);
// })

//example of adding a row
// db.run(insertString, params, (err, result) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Row was created');
// })