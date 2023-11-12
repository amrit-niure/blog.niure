import type { Metadata } from 'next';
import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';
import { formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';


export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default function BlogPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
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
          <div className='flex '>

          <Link
            key={post.slug}
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
                 {/* <Badge variant="outline" className='ml-auto h-fit w-fit'>{post.relatedto} </Badge> */}
            </div>
        ))}
    </section>
  );
}

