"use client"
import {React,useEffect} from "react";
import { useRouter } from 'next/navigation';
import { getTokenMiddleware } from "@/lib/middlewares/getTokenMiddleware";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const checkToken = async () => {
      try {
        const tokenValid = await getTokenMiddleware();
        if (!tokenValid) 
          router.push('/auth/signin');
      } catch (error) {
        console.error('Error checking token:', error);
        router.push('/notauth');
      }
    };

    checkToken();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    </main>
  );
}
