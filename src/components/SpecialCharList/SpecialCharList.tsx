import React from "react";
import { SpecialChars } from "../../constants/SpecialChars/SpecialChars";

interface SpecialCharsProps {
  onClick: () => void;
}

const SpecialCharList: React.FC<SpecialCharsProps> = (
  props: SpecialCharsProps
) => {
  return (
    <div className="flex flex-wrap sm:w-max rounded-box items-center gap-3 p-3 bg-base-200">
      {SpecialChars.map((char, idx) => {
        return (
          <div
            key={idx}
            className="rounded-lg cursor-pointer bg-base-300 hover:bg-base-100 py-1 px-3"
          >
            {char}
          </div>
        );
      })}
    </div>
  );
};

export default SpecialCharList;
