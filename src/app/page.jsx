"use client"
import React, { useEffect, useState,useRef  } from "react";
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMusics, selectAllMusics, selectMusicLoading, selectMusicError } from "@/lib/redux/slices/musicSlice";
import { getTokenMiddleware } from "@/lib/middlewares/getTokenMiddleware";

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

const Home = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const allMusics = useSelector(selectAllMusics);
  const isLoading = useSelector(selectMusicLoading);
  const error = useSelector(selectMusicError);

  useEffect(() => {
    const fetchMusicData = async () => {
      try {
        const tokenValid = await getTokenMiddleware();
        if (!tokenValid) {
          router.push('/auth/signin');
          return;
        }
        console.log(allMusics);
        dispatch(fetchAllMusics());
      } catch (error) {
        console.error('Error fetching music data:', error);
      }
    };

    fetchMusicData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24  dark:bg-gray-900">
      <div className="flex flex-col w-fit mx-auto">
        <div className="product-card grid grid-cols-1 md:grid-cols-3 gap-10 py-12 lg:pb-8 lg:pt-10">
          {allMusics.map((music) => (
            <MusicCard key={music.trackId} music={music} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
