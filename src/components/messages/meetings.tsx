import { meetingsData } from "@/data/meetingsData";
import React, { FC } from "react";
import { MessagesMeetingIcon } from "../../../public/icons/messages";

export const Meetings: FC = () => {
  return (
    <div>
      <span className="font-extralight text-4xl text-primary font-lexenda_deca">
        Meetings
      </span>
      <div className="bg-light-blue rounded-b-[10px] border-gray-200 mt-4 p-4 h-80 styled-meetings-scroll-bar  overflow-auto">
        <table className="min-w-full ">
          <tbody className="text-sm font-semibold">
            {meetingsData.map((meetings, index) => (
              <tr key={index}>
                <td className="border-b border-separator w-[270px] flex space-x-2 cursor-pointer justify-between">
                  <div className="w-full">
                    <div className="py-1 px-4 text-secondary text-lg font-lexenda_deca ">
                      <span className="font-black">{meetings.athlete.id}</span>
                      <span className="font-semibold">
                        {" "}
                        {meetings.athlete.positionPlayed}
                      </span>
                    </div>
                    <div className="py-1 px-4 text-primary text-lg">
                      {meetings.date}
                    </div>
                    <div className="py-1 px-4 text-xs">{meetings.date2}</div>
                  </div>
                  <MessagesMeetingIcon />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
