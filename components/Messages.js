import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from "./SendMessage";
import { useRef } from "react";
import Message from "./Message";

const MINS_DURATION = 30;

function Messages() {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);
  const { data, loading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
    [],
    {
      live: true,
    }
  );

  return (
    <div className="text-white font-press flex-col flex-grow  max-h-screen overflow-hidden">
      <div className="bg-[rgba(0,0,0,0.8)]   overflow-scroll scrollbar-hide h-[90%] pt-16">
        <div className="my-5 z-10 absolute top-0 left-1/2">
          <ByMoralis
            variant="dark"
            style={{ marginLeft: "auto", marginRight: "auto"}}
          />
        </div>
        <div className="space-y-10 p-4 ">
          {data.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </div>
        <div
          ref={endOfMessagesRef}
          className="text-center text-gray-400 my-10 text-xs"
        >
          <p>You are up to date {user.getUsername()} 🎉</p>
        </div>
      </div>

      <div className="max-w-full ">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>
    </div>
  );
}

export default Messages;
