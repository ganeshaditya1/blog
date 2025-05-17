import type { Metadata } from "next";
import Posts from '@/components/posts';
import { getSlugsFromDirectory, getPostFromMdxFile } from '@/app/mdxUtil';

export const metadata: Metadata = {
  title: "About me",
  description: "Aditya Ambadipudi about me page, detailing my career journey so far.",
};

export default async function Page({}) {
    const slugs = (await getSlugsFromDirectory('posts'))
      .map((slug) => slug.slug);

    const postPromises = slugs.map((slug) => getPostFromMdxFile(slug));
    return Promise.all(postPromises)
                  .then((posts) => (< Posts posts={ posts } />));
  }
   
  export const dynamicParams = false