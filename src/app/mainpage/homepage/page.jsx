"use client"
import React, { useEffect  } from "react";
import MusicCard from "@/lib/components/musicCard/MusicCard";
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMusics, selectAllMusics, selectMusicLoading, selectMusicError } from "@/lib/redux/slices/musicSlice";
import { getTokenMiddleware } from "@/lib/middlewares/getTokenMiddleware";

const homepage = () => {
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

export default homepage;