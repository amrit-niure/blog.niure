import type { Metadata } from "next";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { formatDate } from "@/lib/utils";
import PostTags from "@/components/post-tags";

export const metadata: Metadata = {
  title: "Post",
  description: "Read my thoughts on software development, design, and more.",
};

export default function AllPosts() {
  return (
    <section>
     
      
      <PostTags />
      <h1 className="font-semibold text-2xl my-8 tracking-tighter">
        all posts
      </h1>
      {allPosts
        .sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <div className="flex " key={post.slug}>
            <Link
              className="flex flex-col space-y-1 mb-4 w-fit "
              href={`${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="text-foreground tracking-tight flex gap-2 ">
                  {post.title}
                </p>
                <p className="text-muted-foreground text-sm tracking-tight">
                  {formatDate(post.date)}
                </p>
              </div>
            </Link>
          </div>
        ))}
    </section>
  );
}
