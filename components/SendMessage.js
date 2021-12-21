import { useState } from "react";
import { useMoralis } from "react-moralis";
import { useRecoilState } from "recoil";
import { avatarPictureState } from "../atoms/AvatarAtom";
import Image from "next/image";

function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");
  const [avatarPicture, setAvatarPicture] = useRecoilState(avatarPictureState);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
        profilePic: avatarPicture,
      })
      .then(
        (message) => {
          // The object was saved successfully.
        },
        (error) => {
          // The save failed.
          // Error is a Moralis.Error with an error code and message
          console.log(error.message);
        }
      );
    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };

  return (
    <form className="h-full md:mx-auto w-full md:w-[50%] rounded-full border-2 py-5 px-10 border-pink-500 flex justify-between text-xs lg:text-sm overflow-hidden">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="outline-none bg-transparent text-white flex-[0.8] placeholder-gray-500 truncate"
        placeholder={`Enter a Message ${user.getUsername()} 💭`}
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold flex-[0.1] text-pink-500 justify-end"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;
