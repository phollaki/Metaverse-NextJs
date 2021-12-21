import Image from "next/image";
import { useMoralis } from "react-moralis";
import { useEffect } from "react";
import { shuffle } from "lodash";
import ChangeUsername from "./ChangeUsername";
import HeaderBtn from "../components/HeaderBtn";
import { avatarState } from "../atoms/AvatarAtom";
import { useRecoilState } from "recoil";
import { mobileModalState, profileModalState } from "../atoms/ModalAtom";
import { avatarPictureState } from "../atoms/AvatarAtom";
import ChangeProfilePictureBtn from "./ChangeProfilePictureBtn";

const avatarNumber = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];

function Header() {
  const { user, logout } = useMoralis();
  const [avatar, setAvatar] = useRecoilState(avatarState);
  const [profilePic, setProfilePic] = useRecoilState(profileModalState);
  const [avatarPicture, setAvatarPicture] = useRecoilState(avatarPictureState);
  const [mobileModal, setMobileModal] = useRecoilState(mobileModalState);

  useEffect(() => {
    if (avatarPicture === 0) {
      const num = shuffle(avatarNumber).pop();
      setAvatar(num);
      setAvatarPicture(num);
    } else {
      setAvatar(avatarPicture);
    }
  }, [avatarPicture]);

  return (
    <div className="flex h-[10rem] md:flex-col md:h-screen  md:w-[15rem] lg:w-[20rem] items-center justify-between bg-gradient-to-b from-black to-[rgba(0,0,0,0.8)] lg:bg-black text-xs md:text-sm text-pink-500 font-press text-center p-5 border-r-2 border-pink-500">
      <div className="w-full">
        <div className="mt-5 w-24 h-24 lg:w-44 lg:h-44  relative mx-auto border-[0.5rem]  border-pink-500 rounded-full ">
          <Image
            layout="fill"
            objectFit="cover"
            className="object-cover rounded-full hover:opacity-80 hover:cursor-pointer"
            src={`/avatars/avatar${avatar}.png`}
            alt=""
            onClick={() => setProfilePic(true)}
          />
        </div>
        <h1 className="md:inline-block hidden mt-5">
          Welcome{" "}
          <span className="text-pink-200 font-bold">{user.getUsername()}</span>{" "}
          to the MetaWorld!
        </h1>
      </div>
      <div className="flex md:hidden">
        <button
          className="hover:text-pink-400 hover:cursor-pointer hover:animate-pulse"
          onClick={() => setMobileModal(true)}
        >
          Menu
        </button>
      </div>
      <div className="md:space-y-10 -mt-10 hidden md:flex md:flex-col">
        <ChangeUsername />
        <ChangeProfilePictureBtn />
        <HeaderBtn text="Profile" type="profile" />
        <HeaderBtn text="Chat" type="/" />
      </div>
      <div>
        <button
          className="bg-black rounded-lg p-5 font-bold hover:animate-pulse hover:-translate-y-1 transition-all duration-200"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
