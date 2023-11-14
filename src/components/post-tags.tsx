"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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
  return (
    <motion.div className="carousel overflow-hidden">
      <motion.div className="inner-carousel bg-slate-400 flex gap-2 bg ">
        {tags.map((tag,index) => (
          <motion.div key={index} >
            <div className="border bg-fadedBackground p-1 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit h-fit">
              <span className="font-semibold text-xs"> {tag}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default PostTags;
