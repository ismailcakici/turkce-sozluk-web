import React from "react";
import { SpecialChars } from "../../constants/SpecialChars/SpecialChars";

interface SpecialCharsProps {
  onClick: (char: string) => void;
}

const SpecialCharList: React.FC<SpecialCharsProps> = (
  props: SpecialCharsProps
) => {
  return (
    <div className="flex flex-wrap sm:w-max rounded-box items-center gap-3 p-3 bg-base-200 mt-3">
      {SpecialChars.map((char, idx) => {
        return (
          <div
            onClick={() => props.onClick(char)}
            key={idx}
            className="rounded-lg cursor-pointer bg-base-300 hover:bg-base-100 py-1 px-3"
          >
            <p className="text-xs md:text-sm lg:text-base">{char}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SpecialCharList;
