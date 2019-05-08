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
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2RiL2luZGV4LmpzIl0sIm5hbWVzIjpbInNxbGl0ZTMiLCJyZXF1aXJlIiwiZGIiLCJEYXRhYmFzZSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIm1lc3NhZ2UiLCJsb2ciLCJpbnNlcnRTdHJpbmciLCJjbG9zZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFVBQVVDLFFBQVEsU0FBUixDQUFoQjs7QUFFQSxJQUFJQyxLQUFLLElBQUlGLFFBQVFHLFFBQVosQ0FBcUIsZ0JBQXJCLEVBQXVDQyxPQUFPO0FBQ3JELE1BQUlBLEdBQUosRUFBUztBQUNQLFdBQU9DLFFBQVFDLEtBQVIsQ0FBY0YsSUFBSUcsT0FBbEIsQ0FBUDtBQUNEO0FBQ0RGLFVBQVFHLEdBQVIsQ0FBWSw4QkFBWjtBQUNELENBTFEsQ0FBVDtBQU1BOztBQUVBLElBQUlDLGVBQWUsbUdBQW5COztBQUVBUCxHQUFHUSxLQUFILENBQVNOLE9BQU87QUFDZCxNQUFJQSxHQUFKLEVBQVM7QUFDUCxXQUFPQyxRQUFRQyxLQUFSLENBQWNGLElBQUlHLE9BQWxCLENBQVA7QUFDRDtBQUNERixVQUFRRyxHQUFSLENBQVksaUJBQVo7QUFDRCxDQUxEOztBQU9BRyxPQUFPQyxPQUFQLEdBQWlCVixFQUFqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzcWxpdGUzID0gcmVxdWlyZSgnc3FsaXRlMycpO1xuXG5sZXQgZGIgPSBuZXcgc3FsaXRlMy5EYXRhYmFzZSgnLi9tdWx0aXN0ZXAuZGInLCBlcnIgPT4ge1xuICBpZiAoZXJyKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xuICB9XG4gIGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gbWFzdGVyIGRhdGFiYXNlJyk7XG59KTtcbi8qX19fX19fX19fX19URVNUIFFVRVJZX19fX19fX19fX19fX19fXyovXG5cbmxldCBpbnNlcnRTdHJpbmcgPSAnSU5TRVJUIElOVE8gbWFzdGVyIChuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGFkZHJlc3MsIHBob25lbnVtYmVyLCBjcmVkaXRjYXJkKSBWQUxVRVMgKD8sPyw/LD8sPyw/KSc7XG5cbmRiLmNsb3NlKGVyciA9PiB7XG4gIGlmIChlcnIpIHtcbiAgICByZXR1cm4gY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XG4gIH1cbiAgY29uc29sZS5sb2coJ0RhdGFiYXNlIGNsb3NlZCcpO1xufSlcblxubW9kdWxlLmV4cG9ydHMgPSBkYjtcblxuLy9leGFtcGxlcyBmb3IgcGFyYW1zIGFuZCBxdWVyeVxuLy8gbGV0IHBhcmFtcyA9IFsnRnJlZCcsICdmcmVkQHlhaG9vJywgJ0JhdG1hbjEyMycsICdTb21ld2hlcmUsIENBJywgMTIzNDU2Nzg5MCwgJzEyMzQ1Njc4OTAxMiAxMi8xMiddO1xuLy8gbGV0IHF1ZXJ5U3RyaW5nID0gJ1NlbGVjdCBuYW1lIEZST00gbWFzdGVyIFdIRVJFIG5hbWU9Pyc7XG5cbi8vZXhhbXBseSBvZiBxdWVyeVxuLy8gZGIuZ2V0KHF1ZXJ5U3RyaW5nLCAnVHJldm9yJywgKGVyciwgcm93KSA9PiB7XG4vLyAgIGlmIChlcnIpIHtcbi8vICAgICByZXR1cm4gY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XG4vLyAgIH1cbi8vICAgY29uc29sZS5sb2cocm93Lm5hbWUpO1xuLy8gfSlcblxuLy9leGFtcGxlIG9mIGFkZGluZyBhIHJvd1xuLy8gZGIucnVuKGluc2VydFN0cmluZywgcGFyYW1zLCAoZXJyLCByZXN1bHQpID0+IHtcbi8vICAgaWYgKGVycikge1xuLy8gICAgIHJldHVybiBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcbi8vICAgfVxuLy8gICBjb25zb2xlLmxvZygnUm93IHdhcyBjcmVhdGVkJyk7XG4vLyB9KSJdfQ==