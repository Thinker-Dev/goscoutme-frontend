import ChatTopbar from "./chat-topbar";
import { ChatList } from "./chat-list";
import React, { ReactNode } from "react";
import { Message, UserData } from "@/data/userData";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { dialogState } from "@/lib/recoil";
import { useRecoilState } from "recoil";

interface ChatProps {
  messages?: Message[];
  selectedUser: UserData;
  open: boolean;
}

export function Chat({ messages, selectedUser, open }: ChatProps) {
  const [dialog, setDialog] = useRecoilState(dialogState);
  const [messagesState, setMessages] = React.useState<Message[]>(
    messages ?? []
  );

  const sendMessage = (newMessage: Message) => {
    setMessages([...messagesState, newMessage]);
  };

  return (
    <div>
      <Dialog open={open}>
        <DialogContent className="p-0 h-[calc(100vh-100px)] gap-0">
          <button
            onClick={() => setDialog({ open: false, user_id: "" })}
            className="absolute right-3 top-3 cursor-pointer"
          >
            <X />
          </button>
          <ChatTopbar selectedUser={selectedUser} />
          <ChatList
            messages={messagesState}
            selectedUser={selectedUser}
            sendMessage={sendMessage}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
