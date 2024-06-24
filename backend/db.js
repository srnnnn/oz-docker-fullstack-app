const mysql = require("mysql");
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "mysql",
  user: "root",
  password: "0000",
  database: "myapp",
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL database!");
    connection.release(); // 연결 해제
  }
});

exports.pool = pool;
