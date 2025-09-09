import React, { useState, useEffect } from "react";
import { Slider as ShadcnSlider } from "@/components/ui/slider";
import { Input as ShadCnInput } from "@/components/ui/input";

interface SliderProps {
  label: string;
  sublabel: string;
  value: number[];
  min?: number;
  max?: number;
  step?: number;
  onValueChange: (value: number[]) => void;
  minLabel: string;
  maxLabel: string;
  format?: "currency" | "percent" | "months"; 
}

const Slider: React.FC<SliderProps> = ({
  value,
  label,
  sublabel,
  min = 0,
  max = 100,
  step = 1,
  onValueChange,
  minLabel,
  maxLabel,
  format = "currency",
}) => {
  const rawValue = value[0] || min;
  const [inputValue, setInputValue] = useState<string>("");

  // format display
  const formatValue = (val: number): string => {
    switch (format) {
      case "currency":
        return `Nu. ${val.toLocaleString()}`;
      case "percent":
        return `${val} %`;
      case "months":
        return `${val} months`;
      default:
        return String(val);
    }
  };

  // input to number
  const parseValue = (val: string): number => {
    const num = parseInt(val.replace(/[^0-9]/g, ""), 10); 
    if (isNaN(num)) return min;
    return Math.min(Math.max(num, min), max); 
  };

  // sync inputValue when slider moves
  useEffect(() => {
    setInputValue(formatValue(rawValue));
  }, [rawValue]);

  // handle user typing
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // show raw text while typing
  };

  // on blur or enter → parse & sync
  const handleInputCommit = () => {
    const parsed = parseValue(inputValue);
    onValueChange([parsed]);
    setInputValue(formatValue(parsed)); // reformat cleanly
  };

  return (
    <div className="my-4">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold">{label}</p>
          <p className="text-sm text-gray-500">{sublabel}</p>
        </div>
        <ShadCnInput
          className="w-32 text-center"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputCommit}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleInputCommit();
          }}
        />
      </div>

      <ShadcnSlider
        value={[rawValue]}
        min={min}
        max={max}
        step={step}
        onValueChange={(val) => onValueChange(val)}
        className="mt-3"
      />

      <div className="flex justify-between text-sm mt-1">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
};

export default Slider;
