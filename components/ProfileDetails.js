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
  const { user, account } = useMoralis();
  console.log(account);
  return (
    <motion.div
      className="text-white m-auto md:mr-56 font-press w-1/2 h-1/2 rounded-3xl p-10 max-h-screen bg-[rgba(0,0,0,0.9)]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-xl tracking-widest text-center border-b-2 border-pink-500 pb-4 ">
        Profile details
      </h2>
      <div className="w-full h-full flex-col flex-wrap overflow-hidden space-y-8 mt-5 text-xs lg:text-sm">
        <p className="text-sm">
          Name: <span className="text-pink-500">{user.getUsername()}</span>
        </p>
        <p className="">
          Eth address:{" "}
          <span className="text-pink-500">{user.attributes.ethAddress}</span>
        </p>
        <p>
          Created at:{" "}
          <span className="text-pink-500">
            {`${user.attributes.createdAt.getDay()}/${user.attributes.createdAt.getMonth()}/${user.attributes.createdAt.getFullYear()} `}
          </span>
        </p>
      </div>
    </motion.div>
  );
}

export default ProfileDetails;
