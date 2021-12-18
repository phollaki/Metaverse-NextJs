import { useMoralis } from "react-moralis";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/ModalAtom";

function ChangeUsername() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();
  const [modal, setModal] = useRecoilState(modalState);

  const setUsername = () => {
    setModal(true);
  };

  return (
    <div className="hover:animate-pulse hover:text-pink-400  transition-all duration-200 hover:-translate-y-1 active:translate-y-0">
      <button onClick={setUsername}>Change Username</button>
    </div>
  );
}

export default ChangeUsername;
