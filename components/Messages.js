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
    <div className="text-white font-press flex-col flex-grow max-h-screen pl-80 grid grid-cols-1 grid-rows-2 p-2 pb-10 bg-[rgba(0,0,0,0.8)]">
      <div className="overflow-y-scroll scrollbar-hide pt-16 row-span-6 ">
        <div className="my-5 z-10 absolute md:top-0 left-1/2 translate-x-[-50%] md:translate-x-0">
          <ByMoralis
            variant="dark"
            style={{ marginLeft: "auto", marginRight: "auto", height: "40px" }}
          />
        </div>
        <div className="space-y-10 p-4 ">
          {data.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </div>
        <div
          ref={endOfMessagesRef}
          className="text-center text-gray-400 my-10 text-[9px] md:ml-64 lg:text-xs"
        >
          <p>You are up to date {user.getUsername()} 🎉</p>
        </div>
      </div>

      <div className="fixed bottom-2 md:left-40 w-full  bg-gradient-to-b from-[rgba(0,0,0,0.8)] to-black row-span-1">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>
    </div>
  );
}

export default Messages;
