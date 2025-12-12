import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface PostMeta {
    slug: string;
    title: string;
    date: string;
    description: string;
    image?: string;
}

export function getAllPosts(): PostMeta[] {
    const fileNames = fs.readdirSync(postsDirectory);

    const posts = fileNames.map((fileName) => {
        const slug = fileName.replace(".md", "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const { data } = matter(fileContents);

        return {
            slug,
            title: data.title,
            date: data.date,
            description: data.description,
            image: data.image,
        };
    });

    // ordenar por fecha
    return posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}