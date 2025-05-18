import Post from '@/components/post';
import type { Metadata } from 'next';
import { getSlugsFromDirectory, getPostFromMdxFile } from '@/app/mdxUtil';

export async function generateMetadata({ params }: {
    params: Promise<{ slug: string }>
  }): Promise<Metadata> {
  const slug = (await params).slug
  
  // Fetch the post for the given slug.
  const post = await getPostFromMdxFile(slug);
 
  return {
    title: post.title,
    description: post.synopsis,
    keywords: post.tags
  }
}
 

export default async function Page({ params }: {
    params: Promise<{ slug: string }>
  }) {
    const slug = (await params).slug
    const post = await getPostFromMdxFile(slug);
   
    return <Post postData={ post }  />
  }
   
  export const generateStaticParams = () => getSlugsFromDirectory('posts');
   
  export const dynamicParams = false