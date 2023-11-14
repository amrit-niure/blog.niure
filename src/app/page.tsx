"use client";
import { TbBrandNextjs,TbBrandNodejs,TbBrandTypescript,TbBrandMysql } from "react-icons/tb";
import { SiMongodb,SiTailwindcss,SiRedis,SiPrisma,SiDocker} from "react-icons/si";
import { FaReact} from "react-icons/fa";
import { BiLogoPostgresql} from "react-icons/bi";

import { allPosts } from "contentlayer/generated";
import { ArrowUpRight, Eye, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Blur from "@/components/blur";

export default function Home() {
  return (
    <div className="">
      <div className="pt-8">
        <h1 className="text-2xl font-semibold pb-8 text-foreground  ">
          hi, I&#39;m Amrit 👋{" "}
        </h1>
        <p className="text-justify tracking-normal text-foregroundLight">
          I am a <b>software developer</b> of Nepali origin, currently pursuing
          Bachelor of Business Information Systems(Exp.2025). Rooted in
          innovation, I consistently conceive novel ideas aimed at enhancing
          lives while staying abreast of evolving tools and technologies.
        </p>
      </div>

      <div className="pt-8">
        <div className="pb-8">
          <h1 className="text-2xl font-semibold text-foreground  ">projects</h1>
          <div className="columns-2 sm:columns-3 gap-4 my-8">
            <div className="relative h-40 mb-4">
              <Image
                alt="first"
                src={"/images/quote.jpg"}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover hover:scale-105 transition-all ease-in duration-300"
              />
            </div>
            <div className="relative h-80 mb-4 sm:mb-0">
              <Image
                alt="second"
                src={"/images/yougotthis.jpg"}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover object-[-16px] sm:object-center hover:scale-105 transition-all ease-in duration-300"
              />
            </div>
            <div className="relative h-40 sm:h-80 sm:mb-4">
              <Image
                alt="third"
                src={"/images/image1.jpg"}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover object-top sm:object-center hover:scale-105 transition-all ease-in duration-300"
              />
            </div>
            <div className="relative h-40 mb-4 sm:mb-0">
              <Image
                alt="fourth"
                src={"/images/rgblaptop.jpg"}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover hover:scale-105 transition-all ease-in duration-300"
              />
            </div>
            <div className="relative h-40 mb-4">
              <Image
                alt="fifth"
                src={"/images/guitar.jpg"}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover hover:scale-105 transition-all ease-in duration-300"
              />
            </div>
            <div className="relative h-80">
              <Image
                alt="sixth"
                src={"/images/music.jpg"}
                fill
                sizes="(min-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover hover:scale-105 transition-all ease-in duration-300"
              />
            </div>
          </div>
        </div>
        {/* showcase projects */}
      </div>

      {/* skills */}
      <div className=" -z-10 ">
        <h1 className="text-2xl font-semibold text-foreground">
          tools and technologies
        </h1>
        <div className="mt-8 flex gap-4 flex-wrap">
          <div className="border bg-fadedBackground py-2 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit">
            <h2 className="flex gap-2">
              <TbBrandNextjs className="text-xl" />{" "}
              <span className="font-semibold text-sm"> Next js</span>
            </h2>
          </div>

          <div className="border bg-fadedBackground py-2 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit">
            <h2 className="flex gap-2">
              <TbBrandNodejs className="text-xl" />{" "}
              <span className="font-semibold text-sm"> Node js</span>
            </h2>
          </div>

          <div className="border bg-fadedBackground py-2 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit">
            <h2 className="flex gap-2">
              <SiMongodb className="text-xl" />{" "}
              <span className="font-semibold text-sm"> Mongo DB</span>
            </h2>
          </div>

          <div className="border bg-fadedBackground py-2 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit">
            <h2 className="flex gap-2">
              <SiTailwindcss className="text-xl" />{" "}
              <span className="font-semibold text-sm"> Tailwind</span>
            </h2>
          </div>

          <div className="border bg-fadedBackground py-2 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit">
            <h2 className="flex gap-2">
              <FaReact className="text-xl" />{" "}
              <span className="font-semibold text-sm"> React</span>
            </h2>
          </div>

          <div className="border bg-fadedBackground py-2 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit">
            <h2 className="flex gap-2">
              <SiRedis className="text-xl" />{" "}
              <span className="font-semibold text-sm"> Redis</span>
            </h2>
          </div>

          <div className="border bg-fadedBackground py-2 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit">
            <h2 className="flex gap-2 ">
              <SiPrisma className="text-xl" />{" "}
              <span className="font-semibold text-sm"> Prisma</span>
            </h2>
          </div>

          <div className="border bg-fadedBackground py-2 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit">
            <h2 className="flex gap-2">
              <SiDocker className="text-xl" />{" "}
              <span className="font-semibold text-sm"> Docker</span>
            </h2>
          </div>
          <div className="border bg-fadedBackground py-2 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit">
            <h2 className="flex gap-2">
              <BiLogoPostgresql className="text-xl" />{" "}
              <span className="font-semibold text-sm"> PostgreSQL</span>
            </h2>
          </div>
          <div className="border bg-fadedBackground py-2 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit">
            <h2 className="flex gap-2">
              <TbBrandTypescript className="text-xl" />{" "}
              <span className="font-semibold text-sm"> Typescript</span>
            </h2>
          </div>

          <div className="border bg-fadedBackground py-2 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit">
            <h2 className="flex gap-2">
              <TbBrandMysql className="text-xl" />{" "}
              <span className="font-semibold text-sm"> MySQL</span>
            </h2>
          </div>
        </div>
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
        <h1 className="text-2xl font-semibold pb-2 text-foreground  ">links</h1>

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
        <p className="text-foregroundLight unique-font bg-slate-900 px-2 border-l-2">
          where simplicity meets brilliance, innovation flourishes. 
        </p>
      </div>
    </div>
  );
}
