"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
interface marqueeProps {}
const tags = [
  "nextjs",
  "vercel",
  "tailwindcss",
  "nextjs",
  "vercel",
  "tailwindcss",
  "nextjs",
  "vercel",
  "tailwindcss",
  "nextjs",
  "vercel",
  "tailwindcss",
];

const PostTags: FC<marqueeProps> = ({}) => {

const [width,setWidth] = useState(0);
const carousel = useRef<HTMLDivElement>(null);

const handlePrevClick = () => {
  console.log("Clicked")
};

const handleNextClick = () => {
  console.log("Clicked")

};

useEffect(()=>{
setWidth(carousel.current!.scrollWidth - carousel.current!.offsetWidth)
},[])
  return (
    <motion.div ref={carousel} className="carousel relative overflow-hidden mb-4 ">
      <motion.div  
      drag="x" 
      dragConstraints={{right : 0,left : -width}}
      className="inner-carousel  flex gap-2 ">
        {tags.map((tag,index) => (
          <motion.div key={index} className="">
            <div className="border bg-fadedBackground p-1 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit h-fit pointer-events-none">
              <span className="font-semibold text-xs hover:underline  pointer-events-none"> {tag}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default PostTags;
