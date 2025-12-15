import Link from "next/link";
import { getAllPosts } from "@/lib/getPosts";

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="max-w-5xl mx-auto py-16 px-4">
            <h1 className="text-4xl font-semibold mb-12">Blog</h1>

            {posts.length === 0 && (
                <p className="text-neutral-500">No hay artículos todavía.</p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post) => (
                    <Link
                        key={`${post.category}-${post.slug}`}
                        href={`/blog/${post.category}/${post.slug}`}
                        className="group"
                    >
                        <article
                            className="
                h-full
                rounded-2xl
                bg-neutral-50
                p-8
                transition-all
                duration-300
                hover:bg-brandPeach/10
                hover:-translate-y-1
                hover:shadow-md
                hover:ring-1
                hover:ring-brandPeach/30
              "
                        >
                            {/* Título */}
                            <h2
                                className="
                  text-xl
                  font-semibold
                  text-neutral-900
                  mb-3
                  group-hover:underline
                  group-hover:text-brandPeach
                  underline-offset-4
                "
                            >
                                {post.title}
                            </h2>

                            {/* Fecha */}
                            <p className="text-sm text-neutral-500 mb-4">
                                {new Date(post.date).toLocaleDateString("es-EC", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </p>

                            {/* Excerpt */}
                            <p className="text-neutral-700 leading-relaxed mb-6">
                                {post.excerpt}
                            </p>

                        </article>
                    </Link>
                ))}
            </div>
        </div>
    );
}