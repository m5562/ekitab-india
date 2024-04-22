import { atom } from "recoil";
const userObj = atom({
  key: "userObject",
  default: {},
});

export { userObj };
