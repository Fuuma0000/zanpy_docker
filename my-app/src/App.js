import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import MyAreaScreen from "./screens/MyAreaScreen";
import MemoScreen from "./screens/MemoScreen";
import SearchScreen from "./screens/SearchScreen";
import { RecoilRoot } from "recoil";

function App() {
  //keyを設定するための関数
  function createData(area, type, name, states, memos, memoTime) {
    return { area, type, name, states, memos, memoTime };
  }

  // メモ画面に行ってもデータが残っているようにするためにapp.jsにstateを設定
  const [rows, setRows] = useState([
    createData(
      "ふれあい",
      "うさぎ",
      "キャロット",
      null,
      "どっか行った",
      "10/10 10:00"
    ),
    createData(
      "ふれあい",
      "うさぎ",
      "ぴょんすけ",
      null,
      "どりゃああああ",
      "10/10 10:06"
    ),
    createData(
      "ふれあい",
      "うさぎ",
      "ミッフィー",
      null,
      "ぽにょだよー",
      "10/10 11:10"
    ),
    createData(
      "ふれあい",
      "うさぎ",
      "ピーター",
      null,
      "ちくわの中身を覗いてしまった",
      "10/10 12:00"
    ),
    createData(
      "ふれあい",
      "レッサーパンダ",
      "ラスカル",
      null,
      "",
      "10/11 10:00"
    ),
    createData(
      "ふれあい",
      "レッサーパンダ",
      "メイ",
      null,
      "お腹すいた",
      "10/11 14:00"
    ),
    createData("ふれあい", "リスざる", "ジュリアン", null, "", "10/11 18:00"),
    createData("ふれあい", "リスざる", "ジュリアン", null, "", "10/11 20:00"),
    createData("ふれあい", "リスざる", "ジュリアン", null, "", "10/11 23:00"),
    createData(
      "ふれあい",
      "リスざるwww",
      "ジュリアン",
      null,
      "",
      "10/14 10:00"
    ),
  ]);

  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route
            path={`/my-area`}
            element={<MyAreaScreen rows={rows} setRows={setRows} />}
          />
          <Route path={`/login`} element={<LoginScreen />} />
          <Route path={`/memo`} element={<MemoScreen />} />
          <Route
            path={`/search`}
            element={<SearchScreen rows={rows} setRows={setRows} />}
          />
          <Route path={`/*`} element={<LoginScreen />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
