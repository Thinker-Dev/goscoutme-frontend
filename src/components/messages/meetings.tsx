import { meetingsData } from "@/data/meetingsData";
import React, { FC } from "react";
import { MessagesMeetingIcon } from "../../../public/icons/messages";
import { privateInstance } from "@/lib/axios";
import useTextUtils from "@/hooks/useTextUtils";
import useTimeUtils from "@/hooks/useTimeUtils";
import { UserAppointments } from "@/types/appointments";
import { Profile } from "@/types/auth";

interface Props {
  data: UserAppointments[] | undefined;
  profile: Profile;
}

export const Meetings: FC<Props> = ({ data, profile }: Props) => {
  const { getFirstSixWords } = useTextUtils();
  const { formatStringDate } = useTimeUtils();

  console.log("====================================");
  console.log(profile);
  console.log("====================================");
  return (
    <div>
      <span className="font-extralight text-4xl text-primary font-lexenda_deca">
        Meetings
      </span>
      <div className="bg-light-blue rounded-b-[10px] border-gray-200 w-[302px] mt-4 p-4 h-80 styled-meetings-scroll-bar overflow-x-hidden overflow-auto">
        <table className="min-w-full ">
          <tbody className="text-sm font-semibold">
            {data &&
              data.map((meetings, index) => (
                <tr key={index}>
                  <td className="border-b border-separator w-[270px] flex space-x-2 cursor-pointer justify-between">
                    <div className="w-full">
                      <div className="py-1 px-4 text-secondary text-lg font-lexenda_deca ">
                        <span className="font-black">
                          {profile.athlete ? (
                            <span>Scout {meetings.scout.id}</span>
                          ) : (
                            <>
                              <span className="uppercase">
                                {getFirstSixWords(
                                  meetings.athlete.profile.public_id
                                )}{" "}
                              </span>

                              <span className="font-semibold">Striker</span>
                            </>
                          )}
                        </span>
                      </div>
                      <div className="py-1 px-4 text-primary text-lg">
                        {formatStringDate(meetings.scheduled)}
                      </div>
                      <div className="py-1 px-4 text-xs">
                        {formatStringDate(meetings.scheduled, "timezzone")}
                      </div>
                    </div>
                    <MessagesMeetingIcon />
                  </td>
                </tr>
              ))}
            {/* {data ? (
              data.map((item, index) => (
                <div key={index} className="mb-2 space-x-2">
                  <span>{item.title}</span>
                  <span>{item.description}</span>
                  <span>{item.scheduled}</span>
                </div>
              ))
            ) : (
              <div>Loading...</div>
            )} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};
