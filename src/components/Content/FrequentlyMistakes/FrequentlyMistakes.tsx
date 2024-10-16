import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

interface FrequentlyMistakesProps {
  title: string;
  wrongWord: string;
  trueWord: string;
}

const FrequentlyMistakes: React.FC<FrequentlyMistakesProps> = (props) => {
  return (
    <div className="w-full min-h-40 shadow-lg bg-base-200 rounded-box p-2">
      <h1 className="text-center font-bold">{props.title}</h1>
      <div className="divider"></div>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-5">
          <FaTimes className="text-primary" size={20} />
          <p className="font-merriweather italic font-semibold">
            {props.wrongWord}
          </p>
        </div>
        <div className="flex items-center gap-5">
          <FaCheck className="text-success" size={20} />
          <p className="font-merriweather italic font-semibold">
            {props.trueWord}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyMistakes;
