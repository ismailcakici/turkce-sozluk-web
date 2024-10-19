import React, { useState } from "react";
import Search from "../../components/Search/Search";
import SpecialCharList from "../../components/SpecialCharList/SpecialCharList";
import { WordResponse } from "../../types/Word/WordResponse";
import { fetchWordData } from "../../service/SearchWord/SearchWord";
import WordResponseData from "../../components/WordResponseData/WordResponseData";

const Main: React.FC = () => {
  const [word, setWord] = useState("");
  const [wordData, setWordData] = useState<WordResponse[]>();
  const [initialState, setInitialState] = useState(true);
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
    setInitialState(false);
  };

  const handleItemClick = (clickedWord: string) => {
    setWord(clickedWord);
    searchWord(clickedWord);
  };

  return (
    <div className="w-full lg:w-4/6 bg-base-300 drop-shadow-lg min-h-screen rounded-box transform transition-all p-5">
      <Search word={word} setWord={setWord} searchWord={searchWord} />
      <SpecialCharList onClick={handleSpecialCharClick} />
      {loading ? (
        <div className="flex w-full items-center justify-center mt-5">
          <div className="loading loading-spinner loading-lg"></div>
        </div>
      ) : (
        <div className="flex w-full mt-5">
          {!initialState && (
            <WordResponseData
              wordResponse={wordData}
              onItemClick={handleItemClick}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Main;
