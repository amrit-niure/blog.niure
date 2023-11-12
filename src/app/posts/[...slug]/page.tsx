
// import { FC } from 'react';
// import { notFound } from "next/navigation"
// import { allPosts } from "contentlayer/generated"
// import { Mdx } from '@/components/mdx-components';
// import { useScroll } from "framer-motion"
// interface PostProps {
//   params: {
//     slug: string[]
//   }
// }

// async function getPostFromParams(params: PostProps["params"]) {
//   const slug = params?.slug?.join("/")
//   const post = allPosts.find((post) => post.slugAsParams === slug)

//   if (!post) {
//     null
//   }

//   return post
// }

// const page: FC<PostProps> = async ({params} : PostProps) => {
//   const post = await getPostFromParams(params)
  
//   if (!post) {
//     notFound()
//   }

//   // scroll animation : \
  
//   return (
//     <article className="py-6">
//     <h1 className="mb-2 font-bold text-3xl">{post.title}</h1>
//     {post.description && (
//       <p className="text- mt-0 text-foregroundLight">
//         {post.description}
//       </p>
//     )}
//     <hr className="my-4" />
//     <Mdx code={post.body.code} />
//   </article>
//   )
// };

// export default page;
'use client'
import { FC } from 'react';
import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"
import { Mdx } from '@/components/mdx-components';
import { motion, useScroll, useSpring } from "framer-motion";
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

const page: FC<PostProps> = ({ params } : PostProps) => {
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
    <article className="py-6">
         <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-foreground transform origin-left" style={{ scaleX }} />
      <h1 className='text-2xl font-bold'>{post.title}</h1>
      {post.description && (
        <p className="text- mt-0 text-foregroundLight">
          {post.description}
        </p>
      )}
      <hr className="my-4" />
      <Mdx code={post.body.code} />
    </article>
  )
};

export default page;
