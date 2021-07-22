const mysql=require('mysql');
const connection=mysql.createConnection({
    host:'localhost',
    port:3333,
    user:'root',
    password:'root',
    database:'training21'
});
connection.connect();
connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
	if (err) throw err
	console.log('The solution is: ', rows[0].solution)
	})
	