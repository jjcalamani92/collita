// 'use client'

import { FC, useRef } from "react";
import { useLongPress } from 'ahooks';
import Link from "next/link";
import { Site } from "../../interfaces";

interface CardSite {
  site?: Site
  checked: boolean
  partiallySelected: boolean
  toggle: () => void
}
export const CardSite: FC<CardSite> = ({ site, checked, partiallySelected,  toggle }) => {
  const ref = useRef<HTMLDivElement>(null);
  useLongPress(toggle, ref, {
    moveThreshold: { x: 5, y: 5 },
  }, );
  console.log(site);
  
  return (
    <div   className="group relative max-w-xs rounded-md shadow hover:shadow-2xl transition-all z-0  delay-150  bg-gray-100 text-gray-800">
      <input
        type="checkbox"
        className={`h-5 w-5 rounded border-gray-400 text-indigo-600 focus:ring-indigo-500 absolute  top-2 left-2 z-100 opacity-0 ${partiallySelected  && "opacity-100"} group-hover:opacity-100 transition ease-in-out delay-150`}
      onChange={toggle}  
      checked={checked}
      onClick={toggle}
      />
      <div ref={ref} className="">
      <img
        className="h-[12rem] w-full object-cover"
        src={site?.data.seo.image?.src! || "https://res.cloudinary.com/dqsbh2kn0/image/upload/v1663014890/zawkgpyjvvxrfwp9j7w1.jpg"}
        alt={site?.data.seo.image?.alt!}
      />
        

       
        <Link href={`/dashboard/sites/${site?.data.type}/${site?._id}`} className="flex items-center h-[3rem] mx-2 cursor-pointer">
          
            <h2 className=" text-sm tracking-wide truncate">{site?.data.seo.title}</h2>
          
        </Link>
      </div>

    </div>
  )
}