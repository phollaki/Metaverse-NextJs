import { useRecoilState } from "recoil";
import { profileModalState } from "../atoms/ModalAtom";
import ProfilePicture from "./ProfilePicture";

const nums = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];

function ProfilePictureModal() {
  const [profilePic, setProfilePic] = useRecoilState(profileModalState);

  return (
    <div
      className={`text-center p-2  border-2 border-pink-500 absolute top-1/2 left-1/2
        transform translate-x-[-50%] translate-y-[-60%] z-30 
      bg-black text-pink-500 font-press lg:p-4 rounded-lg text-xs lg:text-xl ${
        profilePic && "animate-fade-in-up"
      }`}
    >
      <h2>Change your avatar</h2>
      <button
        className="absolute top-1 lg:top-2 right-2 text-xl lg:text-2xl"
        onClick={() => setProfilePic(false)}
      >
        x
      </button>
      <div className="flex flex-wrap p-5 space-x-2">
        {nums.map((num) => (
          <ProfilePicture
            key={num}
            id={num}
            src={`/avatars/avatar${num}.png`}
          />
        ))}
      </div>
    </div>
  );
}

export default ProfilePictureModal;
