import { useRouter } from 'next/router';

function BlogPostsPage() {
  const router = useRouter();

  return (
    <div>
      <h1>The Blog Posts</h1>
      <div>{`Here is router.query: ${router.query.slug}`}</div>
    </div>
  )
}

export default BlogPostsPage;