"use client"
import { FC } from 'react';
import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"
import { Mdx } from '@/components/mdx-components';
import { motion, useScroll, useSpring } from "framer-motion";
import { formatDate } from '@/lib/utils';
import { Timer } from 'lucide-react';
interface PostProps {
  params: {
    slug: string[]
  }
}

function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    return null
  }

  return post
}

const Post: FC<PostProps> = ({ params } : PostProps) => {
  const post = getPostFromParams(params)

  if (!post) {
    notFound()
  }

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <article className="py-6 prose dark:prose-invert">
         <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-purple-500 transform origin-left" style={{ scaleX }} />
         <div className='flex gap-2 justify-end'>
      <span className='text-xs mt-0 text-foregroundLight'>{formatDate(post.date)}</span>
      <span className='text-xs mt-0 text-foregroundLight flex items-center gap-1'> <Timer size={15}/> {post.readingTime}</span>
      </div>
      <h1 className='text-2xl font-bold'>{post.title}</h1>
      {post.description && (
        <p className=" mt-0 text-foregroundLight">
          {post.description}
        </p>
      )}
     
      <hr className="my-4" />
      <Mdx code={post.body.code} />
    </article>
  )
};

export default Post;
