import React from "react";
import Header from "./Header";
import SearchBox from "../components/SearchBox";
import { useSetRecoilState } from "recoil";
import { myAreaOpenState } from "../atoms/MyAreaOpenState";
import StatesTable from "../components/StatesTable";

const SearchScreen = ({ rows, setRows }) => {
  const setMyAreaOpen = useSetRecoilState(myAreaOpenState);
  //初回レンダリング時にmyAreaOpenStateをfalseにする
  setMyAreaOpen(false);
  // TODO:検索ページは検索結果を表示するから、ここでデータを保持する
  return (
    <>
      <Header></Header>
      <SearchBox></SearchBox>
      <StatesTable rows={rows} setRows={setRows}></StatesTable>
    </>
  );
};

export default SearchScreen;
