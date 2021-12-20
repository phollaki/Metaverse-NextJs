import { useMoralis } from "react-moralis";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/ModalAtom";
import { motion } from "framer-motion";

const btnVariants = {
  animate: {
    y: -5,
  },
};

function ChangeUsername() {
  const [modal, setModal] = useRecoilState(modalState);

  const setUsername = () => {
    setModal(true);
  };

  return (
    <motion.button
      className="hover:animate-pulse hover:text-pink-400"
      variants={btnVariants}
      whileHover="animate"
      onClick={setUsername}
    >
      Change Username
    </motion.button>
  );
}

export default ChangeUsername;
