import React from "react";
import { WordResponse } from "../../types/Word/WordResponse";
import { AiFillSound } from "react-icons/ai";
import Collapse from "../Collapse/Collapse";

interface WordResponseProps {
  wordResponse?: WordResponse[];
}

const WordResponseData: React.FC<WordResponseProps> = (
  props: WordResponseProps
) => {
  return (
    <div className="flex flex-col w-full p-5">
      {props.wordResponse === undefined ||
      !Array.isArray(props.wordResponse) ||
      props.wordResponse.length === 0 ? (
        <div className="">Aradığınız kelime bulunamadı.</div>
      ) : (
        props.wordResponse.map((word, idx) => {
          return (
            <div key={idx} className="flex flex-col">
              {
                <>
                  <div className="flex items-center text-xl sm:text-3xl lg:text-4xl gap-5">
                    <h1 className="font-merriweather font-bold">
                      {word.madde}
                    </h1>
                    <AiFillSound className="cursor-pointer" />
                  </div>
                  <div className="flex gap-1 my-2 text-secondary italic text-sm sm:text-base">
                    {word.telaffuz && <p>({word.telaffuz}),</p>}
                    {word.lisan && <p>{word.lisan},</p>}
                    {word.ozel_mi === "1" && <p>özel</p>}
                  </div>
                  <div className="flex flex-col my-5">
                    {word.anlamlarListe.map((anlam, idx) => {
                      return (
                        <div
                          key={idx}
                          className="flex flex-col my-3 text-sm sm:text-base"
                        >
                          <div className="flex items-center flex-wrap">
                            <p>{anlam.anlam_sira}.</p>
                            {anlam.ozelliklerListe?.map((ozellik, idx) => {
                              return (
                                <div className="text-secondary ml-1" key={idx}>
                                  {ozellik.tam_adi}
                                  {idx < anlam.ozelliklerListe!.length - 1 &&
                                    ","}
                                </div>
                              );
                            })}
                            <span className="ml-2">
                              {anlam.anlam}
                              {anlam.orneklerListe ? ":" : "."}
                            </span>
                          </div>
                          {anlam.orneklerListe &&
                            anlam.orneklerListe.length > 0 && (
                              <div className="ml-2 sm:ml-10 mt-2">
                                {anlam.orneklerListe.map((ornek, idx) => {
                                  return (
                                    <div
                                      key={idx}
                                      className="text-sm sm:text-base"
                                    >
                                      {ornek.yazar ? (
                                        <div className="flex flex-wrap">
                                          <span className="italic">
                                            "{ornek.ornek}" -
                                          </span>
                                          {ornek.yazar.map((yazar, idx) => {
                                            return (
                                              <span
                                                className="font-bold ml-1"
                                                key={idx}
                                              >
                                                {yazar.tam_adi}
                                              </span>
                                            );
                                          })}
                                        </div>
                                      ) : (
                                        <span className="italic">
                                          {ornek.ornek}
                                        </span>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    <Collapse
                      title="Birleşik Kelimeler"
                      birlesikler={word.birlesikler}
                    />
                    <Collapse
                      title="Atasözleri,Deyimler veya Kalıp Sözler"
                      atasozleri={word.atasozu}
                    />
                  </div>
                </>
              }
            </div>
          );
        })
      )}
    </div>
  );
};

export default WordResponseData;
