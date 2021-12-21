import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/ModalAtom";
import ChangeUsernameModal from "../components/ChangeUsernameModal";
import { profileModalState } from "../atoms/ModalAtom";
import ProfilePictureModal from "../components/ProfilePictureModal";
import Head from "next/head";
import ProfileDetails from "../components/ProfileDetails";
import { mobileModalState } from "../atoms/ModalAtom";
import MobileMenu from "../components/MobileMenu";

function profile() {
  const [modal, setModal] = useRecoilState(modalState);
  const [mobileModal, setMobileModal] = useRecoilState(mobileModalState);
  const [profilePic, setProfilePic] = useRecoilState(profileModalState);
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;
  return (
    <div className="h-screen  overflow-hidden bg-metaverse bg-no-repeat bg-cover bg-center flex flex-col md:flex-row max-h-screen">
      <Head>
        <title>Metaverse</title>
      </Head>
      <Header />
      <ProfileDetails />
      {mobileModal && <MobileMenu />}
      {modal && <ChangeUsernameModal />}
      {profilePic && <ProfilePictureModal />}
    </div>
  );
}

export default profile;
