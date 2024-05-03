import { getPosts } from '@/sanity/sanity';
import Link from 'next/link';

export default async function Page() {

  const posts = await getPosts();

  return (
    <div className="flex flex-col space-y-12 h-screen">
      <h1 className="text-6xl text-teal-800 font-mono font-bold">Latest news</h1>
      <ul>
        {posts.map((post: any) => (
          <li
            key={post._id}
            className="flex flex-col space-y-2"
          >
            <p className='text-sm text-slate-500'>{new Date(post._createdAt).toLocaleDateString()} at {new Date(post._createdAt).toLocaleTimeString()}</p>
            <Link
              className="mt-2 text-teal-800 text-xl hover:text-teal-700 no-underline"
              href={`/blog/${post.slug.current}`}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}