import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface Post {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    category: string;
    image?: string;
    content: string;
}

export async function getPostBySlug(
    category: string,
    slug: string
): Promise<Post> {
    const fullPath = path.join(postsDirectory, category, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        throw new Error(`Post not found: ${category}/${slug}`);
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(html).process(content);
    const htmlContent = processedContent.toString();

    return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        category,
        image: data.image,
        content: htmlContent,
    };
}