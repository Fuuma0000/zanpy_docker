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

// テスト
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

// 自分の担当エリアの動物を取得
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

// ログイン機能
// app.post("/api/login", (req, res) => {
//   const { username, password } = req.body;
//   connection.query(
//     "SELECT * FROM `users` WHERE `username` = ? AND `password` = ?",
//     [username, password],
//     function (err, results, fields) {
//       if (err) {
//         console.log("接続終了(異常)");
//         throw err;
//       }
//       res.json({ message: results });
//     }
//   );
// });

// 接続確認
app.listen(port, () => {
  console.log(`listening on *:${port}`);
});
