import { profileModalState } from "../atoms/ModalAtom";
import { useRecoilState } from "recoil";

import { motion } from "framer-motion";

const btnVariants = {
  animate: {
    y: -5,
  },
};

function ChangeProfilePictureBtn({ text }) {
  const [profilePic, setProfilePic] = useRecoilState(profileModalState);

  return (
    <motion.button
      variants={btnVariants}
      whileHover="animate"
      onClick={() => setProfilePic(true)}
      className="hover:animate-pulse hover:text-pink-400"
    >
      Change Avatar
    </motion.button>
  );
}

export default ChangeProfilePictureBtn;
