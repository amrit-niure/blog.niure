"use client"
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { allPosts } from "contentlayer/generated";
import { ArrowUpRight, Eye, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="pt-8">
        <h1 className="text-2xl font-semibold pb-8 text-foreground  ">
          hi, Im Amrit 👋{" "}
        </h1>
        <p className="text-justify tracking-tight text-foregroundLight">
          I am a <b>software developer</b> of Nepali origin, currently pursuing
          Bachelor of Business Information Systems(Exp.2025). Rooted in
          innovation, I consistently conceive novel ideas aimed at enhancing
          lives while staying abreast of evolving tools and technologies.
        </p>
      </div>
      <motion.div
      className=" border-dashed w-48 h-48 relative rounded-full border-[2px] custom-dashed-border" // Adjust the size of the main ring
      animate={{ rotate: 360 }}
      transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
    >
      <motion.div
        className="border-2 border-dotted w-24 h-24 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
        animate={{ rotate: -360 }} // Adjust the direction of rotation for the inner ring
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      >
      <motion.div
        className="border-2 border-dotted w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
        animate={{ rotate: 360 }} // Adjust the direction of rotation for the inner ring
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      ></motion.div>
</motion.div>
    </motion.div>
      <div className="pt-8">
        <div className="pb-8">
          <h1 className="text-2xl font-semibold text-foreground  ">projects</h1>
          {/* <p className="text-justify tracking-tight text-foregroundLight">
         talk is cheap, lets see the code.
        </p> */}

          <div className="columns-2 sm:columns-3 gap-4 my-8">
            <div className="relative h-40 mb-4">
              <Image
                alt="first"
                src={"/images/image1.jpg"}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover hover:scale-105 hover:bg-black transition-all ease-in duration-200"
              />
        
              <div className="absolute inset-0 flex items-center justify-center bg-black opacity-0 group hover:opacity-50 transition-opacity">
                <div className="text-opacity-0 group-hover:text-opacity-100">
                    <Link href={'/posts'} className=" text-opacity-0 group-hover:text-opacity-100"> <Badge variant={"outline"} > <Eye size={15}/>View Project</Badge> </Link>
                </div>
              </div>
            </div>
            <div className="relative h-80 mb-4 sm:mb-0">
              <Image
                alt="second"
                src={"/images/image1.jpg"}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover object-[-16px] sm:object-center"
              />
            </div>
            <div className="relative h-40 sm:h-80 sm:mb-4">
              <Image
                alt="third"
                src={"/images/image1.jpg"}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover object-top sm:object-center"
              />
            </div>
            <div className="relative h-40 mb-4 sm:mb-0">
              <Image
                alt="fourth"
                src={"/images/image1.jpg"}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative h-40 mb-4">
              <Image
                alt="fifth"
                src={"/images/image1.jpg"}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative h-80">
              <Image
                alt="sixth"
                src={"/images/image1.jpg"}
                fill
                sizes="(min-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* showcase projects */}
      </div>



      {/* recent posts */}
      <div className="py-8">
        <h1 className="text-2xl font-semibold text-foreground">
          {" "}
          recent posts
        </h1>
        <div className="mt-8 flex flex-col gap-4">
          {allPosts
            .sort((a, b) => {
              if (new Date(a.date) > new Date(b.date)) {
                return -1;
              }
              return 1;
            })
            .slice(0, 5)
            .map((post) => (
              <Link href={post.slug} key={post._id}>
                <article className="border bg-fadedBackground py-3 px-2 flex items-center justify-between cursor-pointer rounded-sm">
                  <div>
                    <h2 className="font-semibold  ">{post.title}</h2>

                    {post.description && (
                      <p className="text-foregroundLight">{post.description}</p>
                    )}
                  </div>
                  <ArrowUpRight />
                </article>
              </Link>
            ))}
        </div>
      </div>
      <div className="pt-8 flex flex-col gap-4">
        <h1 className="text-2xl font-semibold pb-4 text-foreground  ">
          ping me
        </h1>

        <div className="flex gap-4">
          <Link
            href={"https://github.com/amrit-niure"}
            className="flex gap-1 hover:underline text-foregroundLight hover:text-foreground "
          >
            {" "}
            <ArrowUpRight size={20} className="self-end" /> github
          </Link>
          <Link
            href={"https://www.linkedin.com/in/amrit-niure-313a75230"}
            className="flex gap-1 hover:underline text-foregroundLight hover:text-foreground  "
          >
            {" "}
            <ArrowUpRight size={20} className="self-end" /> linkedIn
          </Link>
        </div>
        <div className="text-foregroundLight">
          <h1 className=" font-semibold flex items-center gap-1 ">
            {" "}
            <User2 size={18} /> Amrit Niure{" "}
          </h1>
          <a
            href="mailto:niureamrit2@gmail.com?"
            target="_blank"
            className="italic flex hover:underline w-fit"
          >
            niureamrit2@gmail.com <ArrowUpRight size={15} />{" "}
          </a>
        </div>
        <p className="text-foregroundLight">
          - where simplicity meets brilliance and every line of code tells a
          story of progress.
        </p>
      </div>
    </div>
  );
}
