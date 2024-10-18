import React from "react";

interface MainContentCardProps {
  title: string;
  content: string;
  descriptions: string[];
}

const MainContentCard: React.FC<MainContentCardProps> = (props) => {
  return (
    <div className="w-full min-h-40 shadow-lg bg-base-200 rounded-box p-2">
      <h1 className="text-center font-bold">{props.title}</h1>
      <div className="divider"></div>
      <p className="font-merriweather italic font-semibold">{props.content}</p>
      {props.descriptions.map((description, idx) => (
        <p key={idx} className="text-sm my-3">
          {description}.
        </p>
      ))}
    </div>
  );
};

export default MainContentCard;
