import React, { useEffect, useState } from "react";
import { WordResponse } from "../../types/Word/WordResponse";
import { AiFillSound } from "react-icons/ai";
import Collapse from "../Collapse/Collapse";
import SignLanguage from "../SignLanguage/SignLanguage";
import { fetchAudioUrl } from "../../utils/VoiceCode/VoiceCode";

interface WordResponseProps {
  wordResponse?: WordResponse[];
  onItemClick: (word: string) => void;
}

const WordResponseData: React.FC<WordResponseProps> = (
  props: WordResponseProps
) => {
  const [audioExists, setAudioExists] = useState<boolean[]>([]);

  useEffect(() => {
    const checkAudioExists = async () => {
      if (!props.wordResponse) return;

      const existsArray: boolean[] = await Promise.all(
        props.wordResponse.map(async (word) => {
          try {
            const audioUrl = await fetchAudioUrl(word.madde);
            const response = await fetch(audioUrl);
            return response.ok;
          } catch {
            return false;
          }
        })
      );
      setAudioExists(existsArray);
    };

    checkAudioExists();
  }, [props.wordResponse]);

  const playAudio = async (word: string) => {
    try {
      const audioUrl = await fetchAudioUrl(word);
      const newAudio = new Audio(audioUrl);
      newAudio.play();
    } catch (error) {
      console.error("Ses dosyası bulunamadı", error);
    }
  };

  if (
    !props.wordResponse ||
    !Array.isArray(props.wordResponse) ||
    props.wordResponse.length === 0
  ) {
    return <div className="">Aradığınız kelime bulunamadı.</div>;
  }

  return (
    <div className="flex flex-col w-full p-5">
      {props.wordResponse.map((word, idx) => (
        <div key={idx} className="flex flex-col">
          <div className="flex items-center text-xl sm:text-3xl lg:text-4xl gap-5">
            <h1 className="font-merriweather font-bold">
              {word.on_taki && word.on_taki}
              {word.madde}
              {word.taki && ", -" + word.taki}
            </h1>
            {audioExists[idx] && (
              <AiFillSound
                className="cursor-pointer"
                onClick={() => playAudio(word.madde)}
              />
            )}
          </div>
          <div className="flex gap-1 my-2 text-secondary italic text-sm sm:text-base">
            {word.telaffuz && <p>({word.telaffuz}),</p>}
            {word.lisan && <p>{word.lisan},</p>}
            {word.ozel_mi === "1" && <p>özel</p>}
          </div>
          <div className="flex flex-col my-5">
            {word.anlamlarListe.map((anlam, idx) => (
              <div
                key={idx}
                className="flex flex-col my-3 text-sm sm:text-base"
              >
                <div className="flex items-center flex-wrap">
                  <p>{anlam.anlam_sira}.</p>
                  {anlam.ozelliklerListe?.map((ozellik, idx) => (
                    <div className="text-secondary italic ml-1" key={idx}>
                      {ozellik.tam_adi}
                      {idx < anlam.ozelliklerListe!.length - 1 && ","}
                    </div>
                  ))}
                  <span className="ml-2">
                    {anlam.anlam}
                    {anlam.orneklerListe ? ":" : "."}
                  </span>
                </div>
                {anlam.orneklerListe && anlam.orneklerListe.length > 0 && (
                  <div className="ml-2 sm:ml-10 mt-2">
                    {anlam.orneklerListe.map((ornek, idx) => (
                      <div key={idx} className="text-sm sm:text-base">
                        {ornek.yazar ? (
                          <div className="flex flex-wrap">
                            <span className="italic">"{ornek.ornek}" -</span>
                            {ornek.yazar.map((yazar, idx) => (
                              <span className="font-bold ml-1" key={idx}>
                                {yazar.tam_adi}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className="italic">{ornek.ornek}</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div>
            {word.birlesikler && (
              <Collapse
                title="Birleşik Kelimeler"
                birlesikler={word.birlesikler}
                onItemClick={props.onItemClick}
              />
            )}
            {word.atasozu && (
              <Collapse
                title="Atasözleri, Deyimler veya Kalıp Sözler"
                atasozleri={word.atasozu}
                onItemClick={props.onItemClick}
              />
            )}
          </div>
        </div>
      ))}
      <div className="divider"></div>
      <div className="my-3 text-sm sm:text-base">
        <span>Türk İşaret Dili Parmak Alfabesiyle Gösterilişi</span>
        <SignLanguage word={props.wordResponse![0].madde} />
      </div>
    </div>
  );
};

export default WordResponseData;
