import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/ModalAtom";
import ChangeUsernameModal from "../components/ChangeUsernameModal";
import { profileModalState } from "../atoms/ModalAtom";
import Messages from "../components/Messages";
import ProfilePictureModal from "../components/ProfilePictureModal";
import Head from "next/head";
import MobileMenu from "../components/MobileMenu";
import { mobileModalState } from "../atoms/ModalAtom";

export default function Home() {
  const [modal, setModal] = useRecoilState(modalState);
  const [mobileModal, setMobileModal] = useRecoilState(mobileModalState);
  const [profilePic, setProfilePic] = useRecoilState(profileModalState);
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen w-full overflow-hidden bg-metaverse bg-no-repeat bg-cover bg-center flex flex-col md:flex-row max-h-screen">
      <Head>
        <title>Metaverse</title>
      </Head>
      <Header />
      <Messages />
      {modal && <ChangeUsernameModal />}
      {mobileModal && <MobileMenu />}
      {profilePic && <ProfilePictureModal />}
    </div>
  );
}
