"use client";
import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
    <motion.div className="overflow-x-hidden py-4 px-4">
      <motion.div className="flex gap-2  border-2">
  
      </motion.div>
    </motion.div>
  );
};

export default PostTags;
