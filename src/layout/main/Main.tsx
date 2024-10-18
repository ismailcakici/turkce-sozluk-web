import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import SpecialCharList from "../../components/SpecialCharList/SpecialCharList";

const Main: React.FC = () => {
  const [word, setWord] = useState("");

  const handleSpecialCharClick = () => {};

  return (
    <div className="w-full lg:w-4/6 bg-base-300 drop-shadow-lg min-h-screen rounded-box transform transition-all p-5">
      <Header />
      <Search word={word} />
      <SpecialCharList onClick={handleSpecialCharClick} />
    </div>
  );
};

export default Main;
