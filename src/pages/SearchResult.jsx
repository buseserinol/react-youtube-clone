import { useSearchParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";
import { getData } from "../helpers/getData.jsx";
import VideoCard from "../components/VideoCard";
import Loader from "../components/Loader";

const SearchResult = () => {
  const [results, setResults] = useState(null);
  //url'den aratılan terimi al
  const [searchParams] = useSearchParams();
  const sQuery = searchParams.get("search_query");

  //api'den aratılan terime uygun videoları al
  useEffect(() => {
    getData(`/search?query=${sQuery}`).then((res) => setResults(res));
  }, [sQuery]);
  return (
    <div className="flex">
      <SideBar />
      <div className="flex items-center flex-col flex-1 px-4 h-screen gap-10 overflow-auto">
        <div className="flex flex-col gap-10">
          <p className="flex text-lg gap-2 ">
            <span className="font-bold">{sQuery}</span>
            <span>için sonuçlar</span>
          </p>
          {!results ? (
            <Loader />
          ) : (
            results.data.map(
              (item) =>
                item.type === "video" && (
                  <VideoCard key={item.videoId} video={item} isRow={true} />
                )
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
