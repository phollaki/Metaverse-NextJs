import { useRecoilState } from "recoil";
import { mobileModalState } from "../atoms/ModalAtom";
import { useRef } from "react";
import { useMoralis } from "react-moralis";
import ChangeProfilePictureBtn from "./ChangeProfilePictureBtn";
import ChangeUsername from "./ChangeUsername";
import HeaderBtn from "../components/HeaderBtn";

function MobileMenu() {
  const { setUserData, user } = useMoralis();
  const [mobileState, setMobileState] = useRecoilState(mobileModalState);
  const usernameRef = useRef("");

  return (
    <div
      className={`h-[10rem] w-[20rem] lg:h-[12rem] lg:w-[32rem] border-2 border-pink-500 absolute top-1/2 left-1/2
      transform translate-x-[-50%] translate-y-[-60%]
    bg-black text-pink-500 font-press lg:p-4 rounded-lg text-xs lg:text-xl ${
      mobileState && "animate-fade-in-up"
    }`}
    >
      <div
        className="min-h-full text-center space-y-4 flex-auto flex-col justify-between"
        onClick={() => setMobileState(false)}
      >
        <button
          className="absolute top-1 lg:top-2 right-2 text-xl lg:text-2xl"
          onClick={() => setMobileState(false)}
        >
          x
        </button>
        <ChangeUsername />
        <ChangeProfilePictureBtn />
        <HeaderBtn text="Profile" type="profile" />
        <HeaderBtn text="Chat" type="/" />
      </div>
    </div>
  );
}

export default MobileMenu;
