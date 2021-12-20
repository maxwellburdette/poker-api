require("dotenv").config({ path: "./src/.env" });
const mysql = require("mysql");

const dbConnect = mysql.createConnection({
	host: process.env.SQL_HOST,
	user: process.env.USERNAME,
	password: process.env.PASSWORD,
	port: process.env.DB_PORT,
	database: process.env.DATABASE,
});
dbConnect.connect(function (err: any) {
	console.log("Testing env vars");
	console.log(`SQL_HOST: ${process.env.SQL_HOST}`);
	console.log(`USER: ${process.env.USERNAME}`);
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}

	console.log("connected as id " + dbConnect.threadId);
});

export default dbConnect;
