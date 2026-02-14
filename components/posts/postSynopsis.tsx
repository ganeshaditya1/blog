import Link from 'next/link';
import { Post } from '@/models/Post';
import Tag from '../tag';

export default function PostSynopsis({ post }: { post: Post }) {
    return <div className="mb-[20px]">

            <h2 className="font-thin italic text-sm mb-[10px] text-gray-600">{ post.prettyCreationDate }</h2>
            <h1 className="mb-[3px]">
                <Link href={`posts/${post.slug}`}>{ post.title }</Link>
            </h1>
            <div className="flex flex-row flex-wrap gap-3 mb-[15px]">
                {post.tags.map((tag: string) => (            
                    <Tag tagText={tag} key={tag} />
                ))}
            </div>

            <div className="mb-[40px] pb-[10px] ">{post.synopsis}</div>
        </div>;
}