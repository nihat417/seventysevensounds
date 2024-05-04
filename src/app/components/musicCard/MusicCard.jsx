"use client"
import React, { useEffect, useState,useRef  } from "react";

const MusicCard = ({ music }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
  
    const handleTogglePlay = () => {
      setIsPlaying(!isPlaying);
    };
  
    useEffect(() => {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }, [isPlaying]);
  
    return (
      <div key={music.trackId} className="bg-gradient-to-b from-blue-400 to-blue-200 dark:from-gray-800 dark:to-gray-700 border rounded-xl w-fit mx-auto flex flex-col justify-center gap-y-4">
        <div className="w-full flex flex-col justify-between gap-y-5 max-w-[20rem] mx-auto p-5 rounded-xl">
          <img className="rounded-[calc(20px-12px)] rounded-b-none" src={music.imagePath} alt="Professional UI/UX Design Service" style={{ width: '250px', height: '250px', objectFit: 'cover' }} />
          <h2>{music.title}</h2>
          <p>{music.artistName}</p>
          <button onClick={handleTogglePlay}>Toggle Play</button>
          <audio ref={audioRef} src={music.filePath} />
        </div>
      </div>
    );
  };

export default MusicCard;