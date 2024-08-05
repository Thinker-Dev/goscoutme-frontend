import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import ChatBottombar from "./chat-bottombar";
import { Message, UserData } from "@/data/userData";

interface ChatListProps {
  messages?: Message[];
  selectedUser: UserData;
  sendMessage: (newMessage: Message) => void;
}

export function ChatList({
  messages,
  selectedUser,
  sendMessage,
}: ChatListProps) {
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-full overflow-y-auto overflow-x-hidden h-full flex flex-col">
      <div
        ref={messagesContainerRef}
        className="w-full overflow-y-auto overflow-x-hidden h-full flex flex-col"
      >
        {messages?.map((message, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col py-2 whitespace-pre-wrap",
              message.name !== selectedUser.name ? "items-end" : "items-start"
            )}
          >
            <div className="flex items-center">
              {message.name === selectedUser.name && (
                <Avatar className="flex justify-center items-center">
                  <AvatarImage
                    src={message.avatar}
                    alt={message.name}
                    width={6}
                    height={6}
                  />
                </Avatar>
              )}
              <span className=" bg-accent p-3 rounded-md max-w-xs">
                {message.message}
              </span>
              {message.name !== selectedUser.name && (
                <Avatar className="flex justify-center items-center">
                  <AvatarImage
                    src={message.avatar}
                    alt={message.name}
                    width={6}
                    height={6}
                  />
                </Avatar>
              )}
            </div>
          </div>
        ))}
      </div>
      <ChatBottombar sendMessage={sendMessage} />
    </div>
  );
}
