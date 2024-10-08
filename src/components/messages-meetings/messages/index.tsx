"use client";

import { messageData } from "@/data/messagesData";
import { MessageTypes } from "@/types/message";
import Link from "next/link";
import React, { FC, useState } from "react";
import { Chat } from "./chat/chat";
import { userData } from "@/data/userData";
import { useRecoilState } from "recoil";
import { dialogState } from "@/lib/recoil";

const formatMessageDate = (date: Date) => {
  const today = new Date();
  const messageDate = new Date(date);

  const isToday =
    today.getDate() === messageDate.getDate() &&
    today.getMonth() === messageDate.getMonth() &&
    today.getFullYear() === messageDate.getFullYear();

  if (isToday) {
    return messageDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  } else {
    return messageDate.toLocaleDateString([], {
      month: "short",
      day: "2-digit",
    });
  }
};

export const Messages: FC = () => {
  const [messages, setMessages] = useState<MessageTypes[]>(messageData);
  const [selectedUser, setSelectedUser] = useState(userData[0]);
  const [dialog, setDialog] = useRecoilState(dialogState);

  const handleCheckboxChange = (id: string) => {
    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        message.id === id ? { ...message, checked: !message.checked } : message
      )
    );
  };

  const handleRowClick = (user_id: string) => {
    const user = userData.find((user) => user.id === user_id);
    if (user) {
      setSelectedUser(user);
      setDialog({ open: true, user_id });
    }
  };

  return (
    <div>
      <span className="font-extralight text-4xl text-primary font-lexenda_deca">
        Messages
      </span>
      <Chat selectedUser={selectedUser} open={dialog.open} />
      <div className="bg-separator rounded-b-[10px] border-gray-200 mt-4 p-4 h-80 overflow-auto styled-messages-scroll-bar">
        <table className="min-w-full ">
          <tbody className="text-sm font-semibold">
            {messages.map((message, index) => (
              <tr key={index}>
                <td className="py-1 border-b border-[#A6A6A6]">
                  <input
                    type="checkbox"
                    checked={message.checked}
                    onChange={() => handleCheckboxChange(message.id)}
                  />
                </td>
                <td
                  className="border-b border-[#A6A6A6] cursor-pointer"
                  onClick={() => handleRowClick(message.id)}
                >
                  <div className="py-1 px-4  w-40  truncate">
                    {message.recipient}
                  </div>
                </td>
                <td
                  className="py-1 border-b border-[#A6A6A6] cursor-pointer"
                  onClick={() => handleRowClick(message.id)}
                >
                  <div className="flex  items-center truncate w-[450px]">
                    {message.subject}
                    <div className="py-1 pl-1  font-light text-paragraph  truncate">
                      {" "}
                      - {message.message}
                    </div>
                  </div>
                </td>

                <td className="py-1 px-4 border-b border-[#A6A6A6] text-end cursor-pointer">
                  {formatMessageDate(new Date(message.time))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
