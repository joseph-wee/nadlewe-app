import { atom } from "recoil";

let likeList = atom({
  key: 'like',
  default: [],
})

export default likeList;