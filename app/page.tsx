import Posts from '@/components/posts';
import { getSlugsFromDirectory, getPostFromMdxFile } from '@/app/mdxUtil';

export default async function Page({}) {
    const slugs = (await getSlugsFromDirectory('posts'))
      .map((slug) => slug.slug);

    console.log(slugs);
    const postPromises = slugs.map((slug) => getPostFromMdxFile(slug));
    return Promise.all(postPromises)
                  .then((posts) => (< Posts posts={ posts } />));
  }
   
  export const dynamicParams = false