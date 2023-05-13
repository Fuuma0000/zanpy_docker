import React from "react";
import Header from "./Header";
import SearchBox from "../components/SearchBox";
import { useSetRecoilState } from "recoil";
import { myAreaOpenState } from "../atoms/MyAreaOpenState";
import StatesTable from "../components/StatesTable";
// import axios from "axios";
// import { useEffect } from "react";

const SearchScreen = () => {
  // const [searchRows, setSearchRows] = React.useState([]);

  const setMyAreaOpen = useSetRecoilState(myAreaOpenState);
  //初回レンダリング時にmyAreaOpenStateをfalseにする
  setMyAreaOpen(false);

  // function createData(area, name, area, type, states, memos, memoTime) {
  //   return { area, name, area, type, states, memos, memoTime };
  // }

  // //初回レンダリング時にAPIからデータを取得する
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("/api/search");
  //       const dataWithKeys = response.data.message.map((item) => createData());
  //       setSearchRows(dataWithKeys);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <Header></Header>
      <SearchBox></SearchBox>
      <StatesTable></StatesTable>
    </>
  );
};

export default SearchScreen;
