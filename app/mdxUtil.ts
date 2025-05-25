import fs from 'fs';
import { ChessPuzzle } from '@/models/ChessPuzzle';
import { InterestingLink } from '@/models/InterestingLink';
import { JSX } from "react";
import { Post } from '@/models/Post';

export async function getSlugsFromDirectory(dirname: string): Promise<Array<{ slug: string }>> {
    "use server";
    return fs
    .readdirSync(dirname)
    // Remove file extensions for page paths
    .map((path: string) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug: string) => ({ "slug":  slug }));
}

export async function getPostFromMdxFile(filename: string): Promise<Post> {
    "use server";
    const { default: Content, frontmatter: metadata } = await import(`@/content/posts/${filename}.mdx`);
    
    return new Post(metadata.title,
                    metadata.createdAt, 
                    metadata.tags.split(','), 
                    metadata.published,
                    filename,
                    metadata.synopsis, 
                    Content());
}

export async function getInterestingLinksFromMdxFile(filename: string): Promise<InterestingLink> {
    "use server";
    const { default: Content, frontmatter: metadata } = await import(`@/content/interestingLinks/${filename}.mdx`);
    
    return new InterestingLink(metadata.title,
                    metadata.createdAt, 
                    metadata.tags.split(','), 
                    metadata.published,
                    filename,
                    metadata.url, 
                    Content());
}

export async function getChessPuzzleFromMdxFile(filename: string): Promise<ChessPuzzle> {
    "use server";
    const { frontmatter: metadata } = await import(`@/content/chessPuzzles/${filename}.mdx`);
    
    return new ChessPuzzle(metadata.title,
        metadata.createdAt,
        metadata.difficulty,
        metadata.tags,
        metadata.published,
        filename,
        metadata.hint1,
        metadata.hint2,
        metadata.hint3,
        metadata.solution);
}

export async function getAboutMeFromMdxFile(): Promise<JSX.Element> {
    "use server";
    const { default: Content } = await import('@/content/aboutMe.mdx');
    
    return Content({});
}