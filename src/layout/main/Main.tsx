import React from "react";
import Header from "../../components/Header/Header";

const Main: React.FC = () => {
  return (
    <div className="w-full lg:w-4/6 bg-base-300 drop-shadow-lg min-h-screen rounded-box transform transition-all p-5">
      <Header />
    </div>
  );
};

export default Main;
