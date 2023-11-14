"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import {useRef , useState, useEffect} from 'react'
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
// {tags.map((tag) => (
//     <div className="border bg-fadedBackground p-1 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit h-fit">
//       <span className="font-semibold text-xs"> {tag}</span>
//     </div>
//   ))}
const PostTags: FC<marqueeProps> = ({}) => {
  return (
    <motion.div className="carousel">
Hello
    </motion.div>
  );
};

export default PostTags;
