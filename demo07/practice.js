const mysql=require('mysql');
const connection=mysql.createConnection({
    host:'localhost',
    port:3333,
    user:'root',
    password:'root',
    database:'training21'
});

connection.connect((err)=> {
    if(err) throw err;

connection.query("SELECT EMPNO,ENAME FROM emp", function(err, result, fields) {
       if(err) throw err;
       console.log(result);
	//console.log(fields);
   // console.log(result.map((emp2)=>{
     //   return emp2.EMPNO;
  

	});
});