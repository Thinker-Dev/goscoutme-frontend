import { useMemo } from "react";

const useTextUtils = () => {
  const getFirstSixWords = (text?: string): string => {
    if (!text) return "";
    const words = text.split(" ");
    return words.length > 1 ? words.slice(0, 6).join(" ") : text.slice(0, 6);
  };

  const formatDate = (dateString?: string): string => {
    if (!dateString) return "";

    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const capitalizeFirstLetter = (text?: string): string => {
    if (!text) return "";

    text = text.toLowerCase().replace("_", " ");
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return useMemo(
    () => ({
      getFirstSixWords,
      formatDate,
      capitalizeFirstLetter,
    }),
    []
  );
};

export default useTextUtils;
