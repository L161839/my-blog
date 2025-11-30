import { getSortedPostsData, getPostData } from '@/lib/posts'

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map(post => ({
    id: post.id
  }))
}

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params  // ← 关键：await params
  const post = await getPostData(id)

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <time className="text-gray-500 text-sm">{post.date}</time>
      <div 
        className="prose prose-lg mt-8 max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </div>
  )
}