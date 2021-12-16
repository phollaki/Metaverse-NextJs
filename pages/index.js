import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import bg from "../public/cyberpunk.gif";
import Image from "next/image";
import profileImage from "../public/cyberpunk2.jpg";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen">
      <div className="flex flex-col absolute z-50 h-full w-full items-center justify-center space-y-4 bg-[rgba(0,0,0,0.7)]">
        <Image
          className="object-cover rounded-full"
          src={profileImage}
          alt=""
          height={200}
          width={200}
        />
        <button
          className="bg-black rounded-lg p-5 font-bold text-xl text-[#e36493] font-press"
          onClick={logout}
        >
          Logout
        </button>
      </div>
      <div className="w-full h-screen">
        <Image src={bg} alt="" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}
