import Image from "next/image";
import profileImage from "../public/cartoon2.jpg";
import bg from "../public/bg.jpg";
import { useMoralis } from "react-moralis";
function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative text-white">
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4 ">
        <Image
          className="object-cover rounded-full"
          src={profileImage}
          alt=""
          height={200}
          width={200}
        />
        <button
          className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse "
          onClick={authenticate}
        >
          Login with Metaverse
        </button>
        <h2 className="font-press text-3xl">
          This is a random text with custom google font family Press Start 2P!
        </h2>
      </div>
      <div className="w-full h-screen">
        <Image src={bg} alt="" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Login;
