import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getData } from "../helpers.jsx/getData";
import { useState } from "react";
import ReactPlayer from "react-player";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import millify from "millify";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  console.log(video);
  //! arama parametresine erişim için kurulum
  const [searchParams] = useSearchParams();
  //! url'den 'v' isimli arama parametresini al
  const id = searchParams.get("v");
  // console.log(id);

  //! id'si bilinen videonun bilgilerini api'dan al
  useEffect(() => {
    getData(`/video/info?id=${id}&extend=1`).then((data) => setVideo(data));
  }, [searchParams]);

  return (
    <div className=" detail-page h-screen overflow-auto p-5">
      {/*video içeriği */}
      <div>
        <ReactPlayer
          className={"rounded cursor-pointer"}
          width={"100%"}
          height={"50vh"}
          // light
          playing
          controls
          url={`https://www.youtube.com/watch?v=${id}`}
        />

        {!video ? (
          <p>Yükleniyor..</p>
        ) : (
          <>
            {/* başlık */}
            <h1 className="my-3 text-xl font-bold">{video.title}</h1>
            {/* kanal bilgileri */}
            <div className="flex justify-between">
              {/* sol */}
              <div className="flex  items-center gap-4">
                <img
                  className="rounded-full w-12 h-12"
                  src={video.channelThumbnail[0].url}
                  alt="channel thumbnail"
                />
                <div>
                  <h4 className="font-bold">{video.channelTitle}</h4>
                  <p className="text-gray-400">{video.subscriberCountText}</p>
                </div>

                <button className="px-3 rounded-full bg-white text-black h-9 transition hover:bg-gray-400">
                  Abone Ol
                </button>
              </div>

              {/* sağ */}
              <div className="flex items-center bg-[#272727] rounded-full cursor-pointer">
                <div className="flex items-center gap-4 py-2 px-4 border-r">
                  <AiOutlineLike />
                </div>
                <div className="py-2 px-4">
                  <AiOutlineDislike />
                </div>
              </div>
            </div>
            {/* video bilgileri */}

            <div className="bg-[#272727] rounded p-2 mt-4 cursor-pointer hover:bg-opacity-80">
              <div className="flex gap-3">
                <p>{millify(video.viewCount)} Görüntülenme</p>
                <p>{new Date(video.publishDate).toLocaleDateString()}</p>
              </div>
            </div>
          </>
        )}
      </div>

      {/*alakalı içerikler */}
      <div></div>
    </div>
  );
};

export default VideoDetail;
