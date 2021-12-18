import Image from "next/image";
import { profileModalState } from "../atoms/ModalAtom";
import { avatarPictureState } from "../atoms/AvatarAtom";

import { useRecoilState } from "recoil";

function ProfilePicture({ src, id }) {
  const [profilePic, setProfilePic] = useRecoilState(profileModalState);

  const [avatarPicture, setAvatarPicture] = useRecoilState(avatarPictureState);

  const setAvatar = (e) => {
    e.preventDefault();
    setProfilePic(false);
    setAvatarPicture(id);
  };

  return (
    <div>
      <div className="m-2 hidden lg:inline-block">
        <Image
          className="rounded-full hover:cursor-pointer hover:opacity-80 "
          src={src}
          height={80}
          width={80}
          alt=""
          onClick={setAvatar}
        />
      </div>
      <div className="m-2 inline-block lg:hidden">
        <Image
          className="rounded-full hover:cursor-pointer hover:opacity-80 "
          src={src}
          height={50}
          width={50}
          alt=""
          onClick={setAvatar}
        />
      </div>
    </div>
  );
}

export default ProfilePicture;
