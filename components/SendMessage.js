import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

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
    <form className="bg-black opacity-90 px-6 py-8 border-t-2 border-pink-500 flex justify-between text-xs lg:text-base">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="outline-none bg-transparent text-white w-full placeholder-gray-500 "
        placeholder={`Enter a Message ${user.getUsername()} 💭`}
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold text-pink-500 "
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;
