"use client";
import {
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandTypescript,
  TbBrandMysql,
  TbSquareLetterT,
} from "react-icons/tb";
import { VscSymbolMethod } from "react-icons/vsc";
import {
  SiMongodb,
  SiTailwindcss,
  SiRedis,
  SiPrisma,
  SiDocker,
  SiGooglecloud,
  SiKubernetes,
  SiGithubactions,
  SiFigma,
  SiJest,
  SiTrello,
  SiSlack,
} from "react-icons/si";
import { FaReact, FaCode, FaLinux } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

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
          hi, I&#39;m Amrit 👋
        </h1>
        <p className=" tracking-wide  text-foregroundLight">
          I&#39;m Amrit Niure, a <span className="italic">junior</span>
          <span className="font-semibold"> Software Developer. </span> I
          specialize in the developement of Web Applications. <br />
          <p className="border my-2 border-l-4 px-2 italic py-1 tracking-normal">
          &#34; The true measure of success lies not just in the tools and
            technologies used, but in the positive impact the software makes. &#34;
          </p>
          Explore my portfolio to see how I&#39;m translating this philosophy into
          practical applications, and {" "}
          <span className="font-semibold hover:underline cursor-pointer italic">
            let&#39;s connect
          </span>
          {" "} to discuss how we can collaboratively create software that truly
          matters.
        </p>
      </div>
      {/* 
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
      
      </div> */}

      {/* skills */}
      <div className="py-8 -z-10 ">
        <h1 className="text-2xl font-semibold text-foreground">
          tools and technologies
        </h1>
        <div className="mt-8 flex gap-4 flex-wrap">
          <div className="border bg-fadedBackground py-2 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit">
            <h2 className="flex gap-2">
              <TbBrandNextjs className="text-xl" />
              <span className="font-semibold text-sm"> Next js</span>
            </h2>
          </div>

          <div className="border bg-fadedBackground py-2 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit">
            <h2 className="flex gap-2">
              <TbBrandNodejs className="text-xl" />
              <span className="font-semibold text-sm"> Node js</span>
            </h2>
          </div>

          <div className="border bg-fadedBackground py-2 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit">
            <h2 className="flex gap-2">
              <SiMongodb className="text-xl" />
              <span className="font-semibold text-sm"> Mongo DB</span>
            </h2>
          </div>

          <div className="border bg-fadedBackground py-2 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit">
            <h2 className="flex gap-2">
              <SiTailwindcss className="text-xl" />
              <span className="font-semibold text-sm"> Tailwind</span>
            </h2>
          </div>

          <div className="border bg-fadedBackground py-2 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit">
            <h2 className="flex gap-2">
              <FaReact className="text-xl" />
              <span className="font-semibold text-sm"> React</span>
            </h2>
          </div>

          <div className="border bg-fadedBackground py-2 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit">
            <h2 className="flex gap-2">
              <SiRedis className="text-xl" />
              <span className="font-semibold text-sm"> Redis</span>
            </h2>
          </div>

          <div className="border bg-fadedBackground py-2 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit">
            <h2 className="flex gap-2 ">
              <SiPrisma className="text-xl" />
              <span className="font-semibold text-sm"> Prisma</span>
            </h2>
          </div>
          <div className="border bg-fadedBackground py-2 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit">
            <h2 className="flex gap-2">
              <BiLogoPostgresql className="text-xl" />
              <span className="font-semibold text-sm"> PostgreSQL</span>
            </h2>
          </div>
          <div className="border bg-fadedBackground py-2 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit">
            <h2 className="flex gap-2">
              <TbBrandTypescript className="text-xl" />
              <span className="font-semibold text-sm"> Typescript</span>
            </h2>
          </div>

          <div className="border bg-fadedBackground py-2 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit">
            <h2 className="flex gap-2">
              <TbBrandMysql className="text-xl" />
              <span className="font-semibold text-sm"> MySQL</span>
            </h2>
          </div>
        </div>

        <div className="mt-8">
          <p className="tracking-wide">
            With the <span className="font-semibold">depth</span> of Web
            Application development my <span className="font-semibold">horizantal</span> abilites starts
            form the system and ui/ux design, testing and continious
            intergration and continious delivery to the successful deployment to
            cloud platforms.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="border bg-fadedBackground py-2 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit">
              <h2 className="flex gap-2">
                <SiDocker className="text-xl" />
                <span className="font-semibold text-sm"> Docker</span>
              </h2>
            </div>
            <div className="border bg-fadedBackground py-2 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit">
              <h2 className="flex gap-2">
                <SiKubernetes className="text-xl" />
                <span className="font-semibold text-sm"> Kubernaties</span>
              </h2>
            </div>
            <div className="border bg-fadedBackground py-2 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit">
              <h2 className="flex gap-2">
                <VscSymbolMethod className="text-xl" />
                <span className="font-semibold text-sm"> CD/CI</span>
              </h2>
            </div>
            <div className="border bg-fadedBackground py-2 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit">
              <h2 className="flex gap-2">
                <FaLinux className="text-xl" />
                <span className="font-semibold text-sm"> Linux</span>
              </h2>
            </div>
            <div className="border bg-fadedBackground py-2 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit">
              <h2 className="flex gap-2">
                <SiFigma className="text-xl" />
                <span className="font-semibold text-sm"> Figma</span>
              </h2>
            </div>
            <div className="border bg-fadedBackground py-2 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit">
              <h2 className="flex gap-2">
                <SiJest className="text-xl" />
                <span className="font-semibold text-sm"> Jest</span>
              </h2>
            </div>
            <div className="border bg-fadedBackground py-2 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit">
              <h2 className="flex gap-2">
                <FaCode className="text-xl" />
                <span className="font-semibold text-sm">
                  {" "}
                  Test Driven Developemt
                </span>
              </h2>
            </div>
            <div className="border bg-fadedBackground py-2 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit">
              <h2 className="flex gap-2">
                <SiGithubactions className="text-xl" />
                <span className="font-semibold text-sm">Github Actions</span>
              </h2>
            </div>
            <div className="border bg-fadedBackground py-2 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit">
              <h2 className="flex gap-2">
                <SiGooglecloud className="text-xl" />
                <span className="font-semibold text-sm">
                  Google Cloud Platform
                </span>
              </h2>
            </div>
            <div className="border bg-fadedBackground py-2 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit">
              <h2 className="flex gap-2">
                <SiTrello className="text-xl" />
                <span className="font-semibold text-sm">Trello</span>
              </h2>
            </div>
            <div className="border bg-fadedBackground py-2 px-2 flex items-center justify-between cursor-pointer rounded-sm w-fit">
              <h2 className="flex gap-2">
                <SiSlack className="text-xl" />
                <span className="font-semibold text-sm">Slack</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* recent posts */}
      <div className="pb-8">
        <h1 className="text-2xl font-semibold text-foreground">
          read my blogs
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
      <div className=" flex flex-col gap-4">
        <h1 className="text-2xl font-semibold pb-2 text-foreground  ">links</h1>

        <div className="flex gap-4">
          <Link
            href={"https://github.com/amrit-niure"}
            className="flex gap-1 hover:underline text-foregroundLight hover:text-foreground "
          >
            <ArrowUpRight size={20} className="self-end" /> github
          </Link>
          <Link
            href={"https://www.linkedin.com/in/amrit-niure-313a75230"}
            className="flex gap-1 hover:underline text-foregroundLight hover:text-foreground  "
          >
            <ArrowUpRight size={20} className="self-end" /> linkedIn
          </Link>
        </div>
        <div className="text-foregroundLight">
          <h1 className=" font-semibold flex items-center gap-1 ">
            <User2 size={18} /> Amrit Niure
          </h1>
          <a
            href="mailto:niureamrit2@gmail.com?"
            target="_blank"
            className="italic flex hover:underline w-fit"
          >
            niureamrit2@gmail.com <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
