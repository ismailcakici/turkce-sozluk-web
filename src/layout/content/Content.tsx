import React, { useEffect, useState } from "react";
import { fetchContentData } from "../../service/Content/Content";
import { ContentResponse, Kelime } from "../../types/Content/ContentResponse";
import MainContentCard from "../../components/Content/MainContentCard/MainContentCard";
import FrequentlyMistakes from "../../components/Content/FrequentlyMistakes/FrequentlyMistakes";
import { KelimeGrubu } from "../../types/Word/WordResponse";
import Header from "../../components/Header/Header";

const Content: React.FC = () => {
  const [contentData, setContentData] = useState<ContentResponse>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getContentData();
  }, []);

  const getContentData = async () => {
    setLoading(true);
    try {
      const data: ContentResponse = await fetchContentData();
      setContentData(data);
    } catch (error) {
      console.error("Error fetching content data", error);
    }
    setLoading(false);
  };

  const groupedData = contentData?.kelime.reduce(
    (acc: KelimeGrubu, item: Kelime) => {
      if (!acc[item.madde]) {
        acc[item.madde] = [];
      }
      acc[item.madde].push(item.anlam);
      return acc;
    },
    {} as KelimeGrubu
  );

  return (
    <div className="w-full flex flex-col items-center lg:w-3/12 bg-base-300 drop-shadow-lg min-h-screen rounded-box mt-5 lg:mt-0 transform transition-all">
      <div className="flex flex-col items-center justify-center m-5 gap-5">
        <Header />
        {loading ? (
          <div className="loading loading-spinner loading-md"></div>
        ) : (
          <>
            {groupedData &&
              Object.entries(groupedData).map(([madde, anlamlar], idx) => (
                <MainContentCard
                  key={idx}
                  title="Bir Kelime"
                  content={madde}
                  descriptions={anlamlar}
                />
              ))}
            {contentData?.atasoz.map((atasoz, idx) => {
              return (
                <MainContentCard
                  title="Bir Deyim-Atasözü"
                  content={atasoz.madde}
                  descriptions={[atasoz.anlam]}
                  key={idx}
                />
              );
            })}
            {contentData?.syyd.map((syyd, idx) => {
              return (
                <FrequentlyMistakes
                  title="Sıkça Yapılan Yanlışlar"
                  trueWord={syyd.dogrukelime}
                  wrongWord={syyd.yanliskelime}
                  key={idx}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Content;
