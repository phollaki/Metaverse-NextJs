import Image from "next/image";
import profileImage from "../public/cyberpunk.jpg";
import bg from "../public/cyberpunk.gif";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative font-press text-[#e36493]">
      <div className="flex flex-col absolute z-50 h-full w-full items-center justify-center space-y-10 bg-[rgba(0,0,0,0.5)] ">
        <Image
          className="object-cover rounded-full border-4 border-pink-500"
          src={profileImage}
          alt=""
          height={200}
          width={200}
        />
        <button
          className="bg-black rounded-lg p-5 font-bold text-xl transition-all duration-250 hover:shadow-pink-500 hover:shadow-md hover:-translate-y-2 active:-translate-y-1 active:shadow-sm"
          onClick={authenticate}
        >
          Login with Metaverse
        </button>
      </div>
      <div className="w-full h-screen">
        <Image src={bg} alt="" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Login;
