import React from "react";
import { Atasozu } from "../../types/Word/WordResponse";

interface CollapseProps {
  title: string;
  birlesikler?: string;
  atasozleri?: Atasozu[];
  onItemClick: (item: string) => void;
}

const Collapse: React.FC<CollapseProps> = ({
  title,
  birlesikler,
  atasozleri,
  onItemClick,
}) => {
  return (
    <div className="collapse bg-base-200 shadow-lg my-3 text-sm sm:text-base">
      <input type="checkbox" />
      <div className="collapse-title text-base">{title}</div>
      <div className="collapse-content">
        {
          <>
            {birlesikler && (
              <ul className="w-full flex flex-wrap gap-2">
                {birlesikler?.split(",").map((birlesik, idx) => {
                  return (
                    <li
                      className="outline outline-1 p-1 hover:underline cursor-pointer"
                      key={idx}
                      onClick={() => onItemClick(birlesik)}
                    >
                      {birlesik}
                    </li>
                  );
                })}
              </ul>
            )}
            {atasozleri && (
              <ul className="w-full flex flex-wrap gap-2">
                {atasozleri.map((atasoz, idx) => {
                  return (
                    <li
                      className="outline outline-1 p-1 hover:underline cursor-pointer"
                      key={idx}
                      onClick={() => onItemClick(atasoz.madde)}
                    >
                      {atasoz.on_taki && atasoz.on_taki}
                      {atasoz.madde}
                    </li>
                  );
                })}
              </ul>
            )}
          </>
        }
      </div>
    </div>
  );
};

export default Collapse;
