import Image from "next/image";
import { useMoralis } from "react-moralis";
import { avatarState } from "../atoms/AvatarAtom";
import { useRecoilState } from "recoil";
import TimeAgo from "timeago-react";

function Message({ message }) {
  const { user } = useMoralis();
  const [avatar, setAvatar] = useRecoilState(avatarState);
  const isUserMessage = message.get("ethAddress") === user.get("ethAddress");
  console.log(`/avatars/avatar${message.get("profilePic")}.png`);
  return (
    <div
      className={`flex items-end space-x-2 relative ${
        isUserMessage && "justify-end"
      }`}
    >
      <div
        className={`relative h-8 w-8 lg:h-10 lg:w-10 ml-2 ${
          isUserMessage && "order-last"
        }`}
      >
        <Image
          layout="fill"
          objectFit="cover"
          className="object-cover rounded-full hover:opacity-80 hover:cursor-pointer"
          src={
            isUserMessage
              ? `/avatars/avatar${avatar}.png`
              : `/avatars/avatar${message.get("profilePic")}.png`
          }
          alt=""
        />
      </div>
      <div
        className={`flex space-x-4 p-3 rounded-lg ${
          isUserMessage
            ? "rounded-br-none bg-pink-300"
            : "rounded-bl-none bg-blue-400"
        }`}
      >
        <p className="text-xs lg:text-sm">{message.get("message")}</p>
      </div>

      <div className={`absolute -bottom-6 text-[9px] lg:text-xs flex`}>
        <p
          className={`${
            isUserMessage ? "text-pink-300 ml-2" : "text-blue-400 mr-2"
          }`}
        >
          {message.get("username")}
        </p>
        <TimeAgo
          datetime={message.createdAt}
          className={`italic text-gray-400 ${
            isUserMessage && "order-first pr-1"
          }`}
        />
      </div>
    </div>
  );
}

export default Message;
