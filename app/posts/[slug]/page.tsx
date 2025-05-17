import Post from '@/components/post';
import { getSlugsFromDirectory, getPostFromMdxFile } from '@/app/mdxUtil';

export default async function Page({ params }: {
    params: Promise<{ slug: string }>
  }) {
    const slug = (await params).slug
    const post = await getPostFromMdxFile(slug);
   
    return <Post postData={ post }  />
  }
   
  export const generateStaticParams = () => getSlugsFromDirectory('posts');
   
  export const dynamicParams = false