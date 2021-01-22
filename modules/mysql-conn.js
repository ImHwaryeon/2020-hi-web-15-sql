const mysql = require('mysql2');
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'hwaryeon',
	password: '000000',
	database: 'hwaryeon'
});

module.exports = { mysql, connection };