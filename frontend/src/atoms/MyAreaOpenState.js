import { atom } from "recoil";

// 担当エリアか検索を開いているかどうかの状態を管理する
export const myAreaOpenState = atom({
  key: "myAreaOpenState",
  default: false,
});

// 検索結果を管理する
export const searchResultState = atom({
  key: "searchResultState",
  default: [],
});

// selectedTypeを管理する
export const selectedTypeState = atom({
  key: "selectedTypeState",
  default: "",
});

// selectedAreaを管理する
export const selectedAreaState = atom({
  key: "selectedAreaState",
  default: "",
});

// selectedNameを管理する
export const selectedNameState = atom({
  key: "selectedNameState",
  default: "",
});

// selectedStatusを管理する;
export const selectedStatusState = atom({
  key: "selectedStatusState",
  default: "",
});
