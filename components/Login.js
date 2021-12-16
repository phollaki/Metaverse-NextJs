import Image from "next/image";
import profileImage from "../public/cyberpunk.jpg";
import bg from "../public/cyberpunk.gif";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative font-press text-[#e36493]">
      <div className="flex flex-col absolute z-50 h-full w-full items-center justify-center space-y-4 bg-[rgba(0,0,0,0.7)]">
        <Image
          className="object-cover rounded-full"
          src={profileImage}
          alt=""
          height={200}
          width={200}
        />
        <button
          className="bg-black rounded-lg p-5 font-bold text-xl"
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
