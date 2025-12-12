// app/blog/page.tsx
import Link from "next/link";
import { getAllPosts } from "@/lib/getPosts";

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="max-w-4xl mx-auto py-10">
            <h1 className="text-4xl font-bold mb-8">Blog</h1>

            {posts.length === 0 && (
                <p className="text-gray-500">No hay artículos todavía.</p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`}>
                        <div className="border p-5 rounded-lg hover:shadow cursor-pointer">
                            {post.image && (
                                <img src={post.image} alt={post.title} className="rounded mb-4" />
                            )}

                            <h2 className="text-xl font-semibold">{post.title}</h2>
                            <p className="text-gray-600">{post.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}