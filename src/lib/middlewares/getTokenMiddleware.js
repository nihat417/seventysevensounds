"use server"

import { cookies } from "next/headers"

export const getTokenMiddleware = async ()=> {
  const cookieList = cookies();
  return cookieList.get("token") ? true :false;
}