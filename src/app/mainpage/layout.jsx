"use client"
import React from 'react'
import HeaderNav from '../components/Header/HeaderNav';
import Providers from "../../lib/redux/provider/provider";

const layout = ({children}) => {
  return (
    <div>
        <HeaderNav/>
        <Providers><div>{children}</div></Providers>   
    </div>
  )
}

export default layout