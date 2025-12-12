// app/blog/[slug]/page.tsx
import { getAllPosts } from "@/lib/getPosts";
import { getPostBySlug } from "@/lib/getPostBySlug";
import React from "react";

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

export default async function ArticlePage(props: any) {
    // Next 16 puede entregar params como Promise, por eso lo resolvemos:
    const resolvedParams = await props.params;
    const slug: string | undefined = resolvedParams?.slug;

    console.log("ArticlePage - resolvedParams:", resolvedParams);

    if (!slug) {
        return (
            <div className="max-w-3xl mx-auto py-10">
                <h1 className="text-2xl font-bold mb-4">Artículo no encontrado</h1>
                <p>El identificador del artículo no está disponible.</p>
            </div>
        );
    }

    let post = null;
    try {
        post = await getPostBySlug(slug);
    } catch (err) {
        console.error("Error al leer post por slug:", slug, err);
        post = null;
    }

    if (!post) {
        return (
            <div className="max-w-3xl mx-auto py-10">
                <h1 className="text-2xl font-bold mb-4">Artículo no encontrado</h1>
                <p>No se encontró ningún artículo con el slug «{slug}».</p>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto py-10">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-500 mb-6">{post.date}</p>

            {post.image && (
                <img src={post.image} alt={post.title} className="rounded mb-6" />
            )}

            <article
                className="prose prose-neutral"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </div>
    );
}