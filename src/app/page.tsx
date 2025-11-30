import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'
import { format, parseISO } from 'date-fns'

export default function Home() {
  const posts = getSortedPostsData()

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">我的博客</h1>
      <div className="space-y-6">
        {posts.map(post => (
          <article key={post.id} className="border-b pb-6">
            <Link href={`/posts/${post.id}`}>
              <h2 className="text-2xl font-semibold text-blue-600 hover:underline">
                {post.title}
              </h2>
            </Link>
            <time className="text-gray-500 text-sm">
              {format(parseISO(post.date), 'yyyy年MM月dd日')}
            </time>
            <p className="mt-2 text-gray-700">{post.description}</p>
          </article>
        ))}
      </div>
    </div>
  )
}