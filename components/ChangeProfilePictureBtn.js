import { profileModalState } from "../atoms/ModalAtom";
import { useRecoilState } from "recoil";

function ChangeProfilePictureBtn({ text }) {
  const [profilePic, setProfilePic] = useRecoilState(profileModalState);
  return (
    <div
      onClick={() => setProfilePic(true)}
      className="hover:animate-pulse hover:text-pink-400  transition-all duration-200 hover:-translate-y-1 active:translate-y-0 hover:cursor-pointer"
    >
      <h2>Change Avatar</h2>
    </div>
  );
}

export default ChangeProfilePictureBtn;
