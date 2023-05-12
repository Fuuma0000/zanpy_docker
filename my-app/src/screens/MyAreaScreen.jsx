import Header from "./Header";
import SearchBox from "../components/SearchBox";
import StatesTable from "../components/StatesTable";
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
      <StatesTable rows={rows} setRows={setRows}></StatesTable>
    </>
  );
};

export default MyAreaScreen;
