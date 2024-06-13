import { useMemo } from "react";

const useTimeUtils = () => {
  const formatDate = (date: Date | null) => {
    if (!date) return "Date";
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "long",
      year: "numeric",
    };
    const formattedDate = date.toLocaleDateString("en-GB", options);
    return formattedDate.replace(/ /g, " ").split(",").join("");
  };

  const getDayOfWeek = (date: Date | null) => {
    if (!date) return "Day";
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  const getTimeZoneString = (date: Date | null) => {
    if (!date) return "";
    const timeZoneOffset = -date.getTimezoneOffset();
    const sign = timeZoneOffset >= 0 ? "+" : "-";
    const hours = String(Math.floor(Math.abs(timeZoneOffset) / 60)).padStart(
      2,
      "0"
    );
    const minutes = String(Math.abs(timeZoneOffset) % 60).padStart(2, "0");
    const timeZoneName = date
      .toLocaleDateString("en-US", { timeZoneName: "long" })
      .split(", ")
      .pop();
    return `GMT${sign}${hours}${minutes} (${timeZoneName})`;
  };

  const formatStringDate = (dateString: string, timezone?: string) => {
    const date = new Date(dateString);

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const weekday = date.toLocaleDateString("en-US", { weekday: "long" });

    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");

    let formattedDate = `${day} ${month} ${year} ${formattedHours}:${formattedMinutes} ${period} / ${weekday}`;

    if (timezone) {
      const timezoneRegex = /GMT([+-])(\d{2}):(\d{2})/;
      const match = dateString.match(timezoneRegex);
      if (match) {
        const sign = match[1] === "+" ? "-" : "+";
        const hoursDiff = match[2];
        const minutesDiff = match[3];
        const timezone = `UTC ${sign}${hoursDiff}:${minutesDiff}`;
        formattedDate += ` ${timezone}`;
      }
    }

    return formattedDate;
  };

  return useMemo(
    () => ({
      formatDate,
      getDayOfWeek,
      formatStringDate,
      getTimeZoneString,
    }),
    []
  );
};

export default useTimeUtils;
