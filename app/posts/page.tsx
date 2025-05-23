import type { Metadata } from "next";
import Posts from '@/components/posts/posts';
import { getSlugsFromDirectory, getPostFromMdxFile } from '@/app/mdxUtil';

export const metadata: Metadata = {
  title: "All the posts",
  description: "Synopsises of all the technical posts I wrote on this blog so far.",
};

export default async function Page({}) {
    const slugs = (await getSlugsFromDirectory('content/posts'))
      .map((slug) => slug.slug);

    const postPromises = slugs.map((slug) => getPostFromMdxFile(slug));
    return Promise.all(postPromises)
                  .then((posts) => (< Posts posts={ posts } />));
  }
   
  export const dynamicParams = false