import React from "react";
import { useSelector } from "react-redux";

const Videobackground = () => {
  const trailerKey = useSelector((store) => store.movies?.trailer);
  console.log(trailerKey);
  return (
    trailerKey && (
      <div className="w-screen h-screen">
        <iframe
            src={`https://www.youtube.com/embed/${trailerKey.key}?&autoplay=1&mute=1&controls=0&loop=1&hd=1`}
          // src={`https://www.youtube.com/embed/${trailerKey.key}`}
          //   className="z-20 w-screen h-screen aspect-video"
          className="w-screen aspect-video scale-[1.5]"
          //   className="w-[90%] h-[90%]"
        ></iframe>
      </div>
    )
  );
};

export default Videobackground;
