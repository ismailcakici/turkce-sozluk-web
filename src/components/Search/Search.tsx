import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import autoCompleteData from "../../constants/AutoComplete/AutoComplete.json";

interface SearchProps {
  word: string;
  searchWord: (word: string) => void;
  setWord: (newWord: string) => void;
}

interface AutoCompleteItem {
  madde: string;
}

const Search: React.FC<SearchProps> = ({ word, setWord, searchWord }) => {
  const autoCompleteList: AutoCompleteItem[] =
    autoCompleteData as AutoCompleteItem[];
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setWord(userInput);

    if (userInput.length >= 3) {
      const suggestions = autoCompleteList
        .filter((item) =>
          item.madde.toLowerCase().startsWith(userInput.toLowerCase())
        )
        .map((item) => item.madde);

      setFilteredSuggestions(suggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setWord(suggestion);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchWord(word);
      setShowSuggestions(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef}>
      <label className="input input-bordered rounded-box flex items-center text-xs md:text-sm lg:text-base">
        <input
          type="text"
          className="grow"
          placeholder="Güncel Türkçe Sözlük'te Ara"
          value={word}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={() => {
            searchWord(word);
            setShowSuggestions(false);
          }}
          className="btn absolute btn-success rounded-box right-5"
        >
          <FaSearch />
        </button>
      </label>
      {showSuggestions && (
        <ul className="absolute bg-base-100 border rounded-box shadow-lg w-[90%] sm:w-[95%] max-h-80 overflow-auto z-10">
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((suggestion, idx) => (
              <li
                key={idx}
                className="p-2 cursor-pointer hover:bg-base-200"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">Sonuç bulunamadı</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Search;
