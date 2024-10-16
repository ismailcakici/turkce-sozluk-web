import React, { useEffect, useState } from "react";
import { fetchContentData } from "../../service/Content/Content";
import { ContentResponse } from "../../types/Content/ContentResponse";
import MainContentCard from "../../components/Content/MainContentCard/MainContentCard";

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

  return (
    <div className="w-full flex flex-col items-center lg:w-3/12 bg-base-300 drop-shadow-lg min-h-screen rounded-box mt-5 lg:mt-0 transform transition-all">
      <div className="flex flex-col items-center justify-center m-5 gap-5">
        {loading ? (
          <div className="loading loading-spinner loading-md"></div>
        ) : (
          <>
            {contentData?.kelime.map((kelime, idx) => {
              return (
                <MainContentCard
                  title="Bir Kelime"
                  content={kelime.madde}
                  description={kelime.anlam}
                  key={idx}
                />
              );
            })}
            {contentData?.atasoz.map((atasoz, idx) => {
              return (
                <MainContentCard
                  title="Bir Deyim-Atasözü"
                  content={atasoz.madde}
                  description={atasoz.anlam}
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
