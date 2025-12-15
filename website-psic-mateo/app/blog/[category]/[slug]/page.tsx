// app/blog/[category]/[slug]/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/getPosts";
import { getPostBySlug } from "@/lib/getPostBySlug";

/* =========================
   Metadata SEO
========================= */
export async function generateMetadata(
    { params }: { params: Promise<{ category: string; slug: string }> }
): Promise<Metadata> {
    const { category, slug } = await params;
    const post = await getPostBySlug(category, slug);

    return {
        title: post.title,
        description: post.excerpt,
        authors: [{ name: "Mateo Morejón" }],
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: post.image ? [post.image] : [],
        },
    };
}

/* =========================
   Static params
========================= */
export async function generateStaticParams() {
    const posts = getAllPosts();

    return posts.map((post) => ({
        category: post.category,
        slug: post.slug,
    }));
}

/* =========================
   Página del artículo
========================= */
export default async function ArticlePage(
    { params }: { params: Promise<{ category: string; slug: string }> }
) {
    const { category, slug } = await params;

    let post;
    try {
        post = await getPostBySlug(category, slug);
    } catch {
        post = null;
    }

    if (!post) {
        return (
            <div className="max-w-3xl mx-auto py-20 px-4">
                <h1 className="text-2xl font-semibold mb-4">
                    Artículo no encontrado
                </h1>
                <p className="text-neutral-600">
                    No se encontró ningún artículo en la categoría{" "}
                    <strong>{category}</strong> con el identificador{" "}
                    <strong>{slug}</strong>.
                </p>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto py-20 px-4">

            {/* Imagen destacada */}
            {post.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={post.image}
                    alt={post.title}
                    className="rounded-2xl mb-16 w-full object-cover"
                />
            )}

            {/* Título */}
            <h1 className="text-4xl font-semibold leading-tight mb-6">
                {post.title}
            </h1>

            {/* Fecha */}
            <p className="text-sm text-neutral-500">
                {new Date(post.date).toLocaleDateString("es-EC", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
            </p>

            {/* Autor */}
            <p className="text-sm text-neutral-500 mb-16">
                Por{" "}
                <span className="font-medium text-neutral-700">
          Mateo Morejón
        </span>
            </p>

            {/* Contenido */}
            <article
                className="
          prose
          prose-neutral
          prose-lg
          max-w-none
          leading-relaxed

          prose-p:my-7
          prose-p:text-neutral-700

          prose-p:first-of-type:text-lg
          prose-p:first-of-type:text-neutral-800
          prose-p:first-of-type:leading-relaxed

          prose-h2:mt-16
          prose-h2:mb-6

          prose-h3:mt-12
          prose-h3:mb-4

          prose-blockquote:border-l-neutral-300
          prose-blockquote:text-neutral-600
          prose-blockquote:italic
        "
                dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Volver al blog */}
            <div className="mt-24">
                <Link
                    href="/blog"
                    className="
            inline-flex
            items-center
            text-sm
            text-neutral-600
            hover:text-neutral-900
            transition-colors
          "
                >
                    ← Volver al blog
                </Link>
            </div>
        </div>
    );
}