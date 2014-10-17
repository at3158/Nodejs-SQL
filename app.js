var http = require('http');
var sql = require('mssql');
var port = process.env.port || 1337;



var config = {
    user: 'dsc',
    password: 'dsc',
    server: '192.168.3.4', // You can use 'localhost\\instance' to connect to named instance
    database: 'Mayuki',
};

sql.connect(config, function (err) {
    var request = new sql.Request();
    request.query("SELECT TOP 1 * FROM ACTMA", function (err, recordset) {
        console.log(recordset);
    });
});

/*
 * http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);
 * 
 * */
