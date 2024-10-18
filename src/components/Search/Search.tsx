import React from "react";
import { FaSearch } from "react-icons/fa";

interface SearchProps {
  word: string;
  setWord: (newWord: string) => void;
}

const Search: React.FC<SearchProps> = ({ word, setWord }) => {
  return (
    <label className="input input-bordered rounded-box flex items-center text-xs md:text-sm lg:text-base gap-2 my-3">
      <input
        type="text"
        className="grow"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Güncel Türkçe Sözlük'te Ara"
      />
      <FaSearch />
    </label>
  );
};

export default Search;
