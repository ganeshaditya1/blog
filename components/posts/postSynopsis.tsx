import Link from 'next/link';
import { Post } from '../types/Post';

export default function PostSynopsis({ post }: { post: Post }) {
    return <div className="mb-[20px]">
            <h2 className="font-thin text-sm underline underline-offset-4 decoration-gray-100 text-gray-600">{ post.prettyCreationDate }</h2>
            <h1 className="mb-[10px]">
                <Link href={`posts/${post.slug}`}>{ post.title }</Link>
            </h1>
            <div className="flex flex-row gap-3 mb-[20px]">
                {post.tags.map((tag: string) => (            
                    <span className="bg-neutral-100 p-[1px] pl-[6px] pr-[6px]" key={tag}>{tag}</span>
                ))}
            </div>
            <div className="mb-[50px] pb-[20px] ">{post.synopsis}</div>
        </div>;
}