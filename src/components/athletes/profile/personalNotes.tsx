import { appointmentState } from "@/lib/recoil";
import React, { FC } from "react";
import { useRecoilState } from "recoil";

export const PersonalNotes: FC = () => {
  const [appointment, setAppointment] = useRecoilState(appointmentState);
  return (
    <>
      {!appointment && (
        <div className="bg-light-blue  rounded-b-md px-5 py-3">
          <h1 className="font-bold text-base">
            Your Personal Scout Notes{" "}
            <button className="text-secondary font-extrabold text-xs">
              CLICK TO EDIT
            </button>
          </h1>
          <p className="font-normal text-sm">
            The complete forward had 6 assists after 37 league games for the
            2022-23 season. So progress has been made in that sector
            tremendously. At a 0.41 goals per-match ratio, the former forward
            had even netted 15 goals. The player had a poor start in last season
            which can be seen by his 3 goals in 17 matches. 
          </p>
        </div>
      )}
    </>
  );
};
