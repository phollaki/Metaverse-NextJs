import { moralis } from "moralis";
import { useMoralis } from "react-moralis";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.2, duration: 0.4, type: "spring", stiffness: 80 },
  },
};

function ProfileDetails() {
  const { user } = useMoralis();
  console.log(user.attributes);
  return (
    <motion.div
      className="text-white m-auto font-press w-1/2 h-1/2 rounded-3xl p-10 max-h-screen bg-[rgba(0,0,0,0.9)]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-xl tracking-widest text-center border-b-2 border-pink-500 pb-4 ">
        Profile details
      </h2>
      <div className="w-full h-full flex-col flex-wrap overflow-hidden space-y-5 mt-5">
        <p className="text-sm">Name:{user.getUsername()}</p>
        <p className="text-xs lg:text-sm">
          Eth address: {user.attributes.ethAddress}
        </p>
        <p>
          Created at:{" "}
          {`${user.attributes.createdAt.getDay()}/${user.attributes.createdAt.getMonth()}/${user.attributes.createdAt.getFullYear()} `}
        </p>
      </div>
    </motion.div>
  );
}

export default ProfileDetails;
