import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import SpecialCharList from "../../components/SpecialCharList/SpecialCharList";
import { WordResponse } from "../../types/Word/WordResponse";
import { fetchWordData } from "../../service/SearchWord/SearchWord";

const Main: React.FC = () => {
  const [word, setWord] = useState("");
  const [wordData, setWordData] = useState<WordResponse[]>();
  const [loading, setLoading] = useState(false);

  const handleSpecialCharClick = (char: string) =>
    setWord((prevWord) => prevWord + char);

  const searchWord = async (word: string) => {
    setLoading(true);
    try {
      const response = await fetchWordData(word);
      setWordData(response);
    } catch (error) {
      console.error("Error occured while fetching word data", error);
    }
    setLoading(false);
  };
  return (
    <div className="w-full lg:w-4/6 bg-base-300 drop-shadow-lg min-h-screen rounded-box transform transition-all p-5">
      <Header />
      <Search word={word} setWord={setWord} searchWord={searchWord} />
      <SpecialCharList onClick={handleSpecialCharClick} />
    </div>
  );
};

export default Main;
