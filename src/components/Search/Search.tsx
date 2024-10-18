import React from "react";
import { FaSearch } from "react-icons/fa";

interface SearchProps {
  word: string;
}

const Search: React.FC<SearchProps> = (props: SearchProps) => {
  return (
    <label className="input input-bordered rounded-box flex items-center text-xs md:text-sm lg:text-base gap-2 my-3">
      <input
        type="text"
        className="grow"
        placeholder="Güncel Türkçe Sözlük'te Ara"
      />
      <FaSearch />
    </label>
  );
};

export default Search;
