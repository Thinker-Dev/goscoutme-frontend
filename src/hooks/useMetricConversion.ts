import { useEffect, useState } from "react";

interface MetricConversionProps {
  weight?: number;
  height?: number;
  weightMetric?: string;
  heightMetric?: string;
}

const useMetricConversion = ({
  weight,
  height,
  weightMetric,
  heightMetric,
}: MetricConversionProps) => {
  const [convertedWeight, setConvertedWeight] = useState<number>(weight || 0);
  const [convertedHeight, setConvertedHeight] = useState<number>(height || 0);
  const [convertedWValue, setConvertedWValue] = useState<string>("");
  const [convertedHValue, setConvertedHValue] = useState<string>("");

  useEffect(() => {
    if (
      weight !== undefined &&
      height !== undefined &&
      weightMetric !== undefined &&
      heightMetric !== undefined
    ) {
      if (heightMetric === "cm") {
        // Convert height from cm to ft
        const inches = height / 2.54;
        const feet = Math.floor(inches / 12);
        const remainingInches = Math.round(inches % 12);
        setConvertedHValue(`${height}cm/${feet}ft ${remainingInches}in`);
      } else {
        // Convert height from ft to cm
        const parts = height.toString().split(".");
        const feet = parseInt(parts[0].replace("ft", ""), 10);
        const inches = parts[1] ? parseInt(parts[1].replace("in", ""), 10) : 0;
        setConvertedHValue(
          `${(feet * 30.48 + inches * 2.54).toFixed(1)}cm/${feet}ft ${inches}in`
        );
      }

      if (weightMetric === "kg") {
        // Convert weight from kg to lbs
        setConvertedWValue(`${weight}kg/${(weight * 2.20462).toFixed(1)}lb`);
      } else {
        // Convert weight from lbs to kg
        setConvertedWValue(`${(weight / 2.20462).toFixed(1)}kg/${weight}lb`);
      }
    }
  }, [weight, height, weightMetric, heightMetric]);

  return {
    convertedHValue,
    convertedWValue,
  };
};

export default useMetricConversion;
