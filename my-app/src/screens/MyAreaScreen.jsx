import Header from "./Header";
import SearchBox from "../components/SearchBox";
import MyAreaTable from "../components/MyAreaTable";
import { useSetRecoilState } from "recoil";
import { myAreaOpenState } from "../atoms/MyAreaOpenState";

const MyAreaScreen = ({ rows, setRows }) => {
  const setMyAreaOpen = useSetRecoilState(myAreaOpenState);
  //初回レンダリング時にmyAreaOpenStateをtrueにする
  setMyAreaOpen(true);

  return (
    <>
      <Header></Header>
      <SearchBox></SearchBox>
      <MyAreaTable rows={rows} setRows={setRows}></MyAreaTable>
    </>
  );
};

export default MyAreaScreen;
