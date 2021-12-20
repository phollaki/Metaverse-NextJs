import { motion } from "framer-motion";
import { useRouter } from "next/router";

const btnVariants = {
  animate: {
    y: -5,
  },
};

function HeaderBtn({ text, type }) {
  const router = useRouter();
  const clickHandler = (e) => {
    e.preventDefault();
    router.push(type);
  };
  return (
    <div className=" hover:text-pink-400 hover:cursor-pointer hover:animate-pulse">
      <motion.h2
        onClick={clickHandler}
        variants={btnVariants}
        whileHover="animate"
      >
        {text}
      </motion.h2>
    </div>
  );
}

export default HeaderBtn;
