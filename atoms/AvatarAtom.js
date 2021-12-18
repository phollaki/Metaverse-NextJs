import { atom } from "recoil";

export const avatarState = atom({
  key: "avatarState",
  default: 1,
});

export const avatarPictureState = atom({
  key: "avatarPictureState",
  default: 0,
});
