import React from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router";

const VideoTitle = ({ videoTitle, overview,videoId }) => {
  return (
    // bg-black/15
    // w-[700px]
    <div className="absolute bottom-0 h-full text-white shadow-lg bg-gradient-to-r from-black/30 to-transparent flex flex-col-reverse z-6">
      <div className="w-full p-10">
        <h1 className="text-3xl font-bold  p-4 w-[500px] rounded-lg text-center">
          {videoTitle}
        </h1>
        <h1 className="w-[600px]">{overview}</h1>
        <div className="flex items-center gap-2 mt-3">
          <Link to={`/watch/${videoId}`} className="w-[200px] p-3 bg-gray-100 text-black font-medium text-xl rounded-lg mx-2 flex gap-2 items-center pl-15 cursor-pointer hover:bg-gray-400">
            <FaPlay />
            <button >Play</button>
          </Link>
          <button className="w-[200px] p-3 bg-gray-400 text-white font-medium text-xl rounded-lg mx-2 cursor-pointer hover:bg-gray-500 ">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
