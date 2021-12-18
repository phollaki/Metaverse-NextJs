import { useRecoilState } from "recoil";
import { modalState } from "../atoms/ModalAtom";
import { useRef } from "react";
import { useMoralis } from "react-moralis";

function ChangeUsernameModal() {
  const { setUserData, user } = useMoralis();
  const [modal, setModal] = useRecoilState(modalState);
  const usernameRef = useRef("");

  const setUsername = (e) => {
    e.preventDefault();
    setUserData({ username: usernameRef.current.value });
    setModal(false);
  };
  return (
    <div
      className={`h-[10rem] w-[20rem] lg:h-[12rem] lg:w-[32rem] border-2 border-pink-500 absolute top-1/2 left-1/2
      transform translate-x-[-50%] translate-y-[-60%]
    bg-black text-pink-500 font-press lg:p-4 rounded-lg text-xs lg:text-xl ${
      modal && "animate-fade-in-up"
    }`}
    >
      <button
        className="absolute top-1 lg:top-2 right-2 text-xl lg:text-2xl"
        onClick={() => setModal(false)}
      >
        x
      </button>
      <form
        className="flex h-full flex-col items-center justify-center space-y-4 "
        onSubmit={setUsername}
      >
        <label htmlFor="username">Change your username</label>
        <input
          ref={usernameRef}
          type="text"
          name="username"
          id="username"
          className="w-[80%] bg-gray-800 p-5 rounded-full h-[2rem] lg:h-[3rem] focus:outline-pink-500 "
        />
        <button
          type="submit"
          className="border-2 border-pink-500 bg-pink-500 rounded-full text-black p-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ChangeUsernameModal;
