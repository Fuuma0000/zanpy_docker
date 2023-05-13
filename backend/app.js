const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = process.env.PORT || 3004;

const connection = mysql.createConnection({
  host: "mysql",
  user: "user",
  password: "password",
  database: "zanpy",
});

app.get("/api", (req, res) => {
  connection.query("SELECT * FROM `animals`", function (err, results, fields) {
    if (err) {
      console.log("接続終了(異常)");
      throw err;
    }
    res.json({ message: results });
  });
  console.log("接続終了(正常)");
});

app.get("/api/myarea", (req, res) => {
  connection.query("SELECT * FROM `animals`", function (err, results, fields) {
    if (err) {
      console.log("接続終了(異常)");
      throw err;
    }
    res.json({ message: results });
  });
  console.log("接続終了(正常)");
});

app.listen(port, () => {
  console.log(`listening on *:${port}`);
});
