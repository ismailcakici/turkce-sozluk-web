import React from "react";

interface SignLanguageProps {
  word: string;
}

const SignLanguage: React.FC<SignLanguageProps> = ({ word }) => {
  const letters = word.split("");

  return (
    <div className="w-full flex overflow-x-auto gap-3 mt-3">
      {letters.map((letter, index) => {
        const lowerCaseLetter = letter.toLowerCase();

        if (!/[a-zğüşıöç]/i.test(lowerCaseLetter)) {
          return null;
        }

        const gifUrl = `https://sozluk.gov.tr/assets/img/isaret/${lowerCaseLetter}.gif`;

        return (
          <div key={index} className="flex flex-col items-center">
            <span>{lowerCaseLetter}</span>
            <img
              key={index}
              src={gifUrl}
              alt={`Sign language for ${lowerCaseLetter}`}
              className="rounded-box min-w-20 sm:w-10"
            />
          </div>
        );
      })}
    </div>
  );
};

export default SignLanguage;
