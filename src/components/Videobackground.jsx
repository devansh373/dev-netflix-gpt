import React from "react";
import { useSelector } from "react-redux";

const Videobackground = ({ isWatchPage }) => {
  const trailerKey = useSelector((store) => store.movies?.trailer);
  console.log(trailerKey);
  return (
    trailerKey && (
      <div className=" pt-[20%] sm:pt-0 w-full sm:h-screen relative overflow-hidden">
        <div
          className={`w-full sm:h-screen absolute top-0 left-0 ${
            !isWatchPage ? "z-5" : "-z-1"
          }`}
        ></div>
        <iframe
          src={`https://www.youtube.com/embed/${trailerKey.key}?&${
            isWatchPage ? "autoplay=0" : "autoplay=1"
          }&mute=1&${isWatchPage ? "controls=1" : "controls=0"}&loop=1&hd=1`}
          // src={`https://www.youtube.com/embed/${trailerKey.key}`}
          //   className="z-20 w-screen h-screen aspect-video"
          className={`${
            !isWatchPage ? "w-full aspect-video scale-[1.5]" : "w-full max-h-[100vh] aspect-video scale-[1]"
          }`}
          allowFullScreen
          //   className="w-[90%] h-[90%]"
        ></iframe>
      </div>
    )
  );
};

export default Videobackground;
