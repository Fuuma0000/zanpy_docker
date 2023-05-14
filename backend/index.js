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
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  // ユーザー名とパスワードのバリデーションなどを行います

  // ユーザーの認証を行います
  if (isValidUser(username, password)) {
    // 認証成功時の処理を行います

    // セッションやトークンの生成、ログイン状態の管理などを行います

    res.json({ message: "ログイン成功" });
  } else {
    // 認証失敗時の処理を行います

    res.status(401).json({ message: "ログイン失敗" });
  }
});

// 接続確認
app.listen(port, () => {
  console.log(`listening on *:${port}`);
});
