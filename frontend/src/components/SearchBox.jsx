import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import { useRecoilValue } from "recoil";
import { myAreaOpenState } from "../atoms/MyAreaOpenState";

const SearchBox = () => {
  const isMyAreaOpen = useRecoilValue(myAreaOpenState);

  return (
    <div className='fixed left-16 top-64'>
      {/* マイエリアの時のみ文字を表示する */}
      {isMyAreaOpen && (
        <p className='flex items-center justify-center font-black text-test mb-4 text-xl tracking-widest'>
          担当エリア内検索
        </p>
      )}
      {/* ボックスを囲むやつ */}
      <div className=' bg-white rounded-3xl shadow-xl'>
        {/* ボックスの中身 */}
        <div className='flex flex-col gap-6 px-12 pt-2 pb-6  '>
          {/* マイエリアじゃない時のみエリア検索を表示する */}
          {!isMyAreaOpen && (
            <Autocomplete
              options={areae}
              sx={{
                width: 160,
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='エリア'
                  InputLabelProps={{
                    style: {
                      color: "#706F6F",
                      fontWeight: 900,
                      //文字を太くさせたいけど、外枠からはみ出る
                      fontSize: 18,
                      position: "relative",
                      top: 28,
                    },
                  }}
                />
              )}
            />
          )}

          {/* 種類検索 */}
          <Autocomplete
            options={types}
            sx={{
              width: 160,
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "black",
              },
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label='種類'
                InputLabelProps={{
                  style: {
                    color: "#706F6F",
                    fontWeight: 900,
                    //文字を太くさせたいけど、外枠からはみ出る
                    fontSize: 22,
                    position: isMyAreaOpen && "relative",
                    top: isMyAreaOpen && 28,
                  },
                }}
              />
            )}
          />

          {/* 名前検索 */}
          <TextField
            id='outlined-basic'
            label='名前'
            sx={{
              width: 160,
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "black",
              },
            }}
            variant='outlined'
            InputLabelProps={{
              style: {
                color: "#706F6F",
                fontWeight: 900,
                //文字を太くさせたいけど、外枠からはみ出る
                fontSize: 22,
              },
            }}
          />

          {/* ステータス検索 */}
          <Autocomplete
            options={status}
            sx={{
              width: 160,
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "black",
              },
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label='ステータス'
                InputLabelProps={{
                  style: {
                    color: "#706F6F",
                    fontWeight: 900,
                    //文字を太くさせたいけど、外枠からはみ出る
                    fontSize: 18,
                  },
                }}
              />
            )}
          />

          {/* 検索ボタン */}
          <div className='flex justify-center'>
            <Button
              variant='contained'
              style={{
                backgroundColor: "#88E186", //bg-main-green
                fontWeight: 900,
                fontSize: 24,
                position: "relative",
                top: 4,
                paddingRight: 10,
                letterSpacing: 4,
                textIndent: 4,
                borderRadius: 10,
              }}
              className='w-36 h-12'
            >
              検索
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;

const types = [
  { label: "イルカ", id: 0 },
  { label: "シャチ", id: 1 },
  { label: "キリン", id: 2 },
  { label: "ライオン", id: 3 },
  { label: "トラ", id: 4 },
  { label: "チンパンジー", id: 5 },
  { label: "うさぎ", id: 6 },
  { label: "レッサーパンダ", id: 7 },
  { label: "リスざる", id: 8 },
  { label: "フラミンゴ", id: 9 },
  { label: "ペンギン", id: 10 },
];

const status = [
  { label: "無事", id: 0 },
  { label: "怪我", id: 1 },
  { label: "脱走", id: 2 },
  { label: "不明", id: 3 },
];

const areae = [
  { label: "マリン", id: 0 },
  { label: "サバンナ", id: 1 },
  { label: "ジャングル", id: 2 },
  { label: "ふれあい", id: 3 },
  { label: "鳥ランド", id: 4 },
];
