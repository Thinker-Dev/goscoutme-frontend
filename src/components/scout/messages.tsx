"use client";
import useRedirectIfNoSubscription from "@/hooks/useRedirectIfNoSubscription";
import React from "react";
import { MessagesAndMeetings } from "../messages-meetings";

const Messages = () => {
  useRedirectIfNoSubscription();

  return <MessagesAndMeetings />;
};

export default Messages;
