import Link from 'next/link';
import { Post } from './types/Post';

export default function PostSynopsis({ post }: { post: Post }) {
    return <div className="mb-[20px]">
            <div className="flow-root">
                <h1 className="float-left">
                    <Link href={`/posts/${post.slug}`}>{ post.title }</Link>
                </h1>
                <h2 className="float-right">{ post.createdAt.toString() }</h2>
            </div>
            <div className="flex flex-row gap-5 mb-[20px]">
            {post.tags.map((tag: string) => (            
                <span className="bg-red-100 p-[6px]" key={tag}>{tag}</span>
            ))}
            </div>
            <div>{post.synopsis}</div>
        </div>;
}

// <Link href={`/posts/${post.slug}`}>{ post.title }</Link>