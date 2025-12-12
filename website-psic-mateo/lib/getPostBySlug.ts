import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

// El tipo completo de un artículo
export interface Post {
    slug: string;
    title: string;
    date: string;
    description: string;
    image?: string;
    content: string;
}

export async function getPostBySlug(slug: string): Promise<Post> {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(html).process(content);
    const htmlContent = processedContent.toString();

    return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        image: data.image,
        content: htmlContent,
    };
}