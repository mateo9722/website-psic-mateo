import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface PostMeta {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    category: string;
    image?: string;
}

export function getAllPosts(): PostMeta[] {
    const categories = fs.readdirSync(postsDirectory);

    const posts: PostMeta[] = [];

    categories.forEach((category) => {
        const categoryPath = path.join(postsDirectory, category);

        if (!fs.statSync(categoryPath).isDirectory()) return;

        const files = fs.readdirSync(categoryPath);

        files.forEach((file) => {
            if (!file.endsWith(".md")) return;

            const fullPath = path.join(categoryPath, file);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data } = matter(fileContents);

            if (data.published === false) return;

            posts.push({
                slug: file.replace(".md", ""),
                title: data.title,
                date: data.date,
                excerpt: data.excerpt,
                category,
                image: data.image,
            });
        });
    });

    return posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}