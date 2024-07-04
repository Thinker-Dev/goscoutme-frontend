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

    text = text.toLowerCase().replace(/_/g, " ");
    const smallWords = [
      "and",
      "of",
      "the",
      "in",
      "on",
      "at",
      "for",
      "with",
      "a",
      "an",
    ];

    return text
      .split(" ")
      .map((word, index) => {
        if (smallWords.includes(word) && index !== 0) {
          return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };

  const convertHeightToCm = (height: number, height_metric: string): number => {
    if (height_metric.toLocaleLowerCase() === "ft") {
      const feet = Math.floor(height);
      const inches = (height - feet) * 12;
      const heightInCm = feet * 30.48 + inches * 2.54;
      return parseFloat(heightInCm.toFixed(1));
    }
    return height;
  };

  const convertWeightToKg = (weight: number, metric: string): number => {
    if (metric.toLocaleLowerCase() === "lb") {
      const weightInKg = weight * 0.453592;
      return parseFloat(weightInKg.toFixed(1));
    }
    return weight;
  };

  return useMemo(
    () => ({
      getFirstSixWords,
      formatDate,
      capitalizeFirstLetter,
      convertHeightToCm,
      convertWeightToKg,
    }),
    []
  );
};

export default useTextUtils;
