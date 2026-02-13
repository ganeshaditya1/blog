import { Post as PostData } from '@/models/Post';
import Tag from '../tag';

export default function Post({ postData }: { postData: PostData }) {
    return <div>            
            <h2 className="font-thin text-sm underline underline-offset-4 decoration-gray-100 text-gray-600">{ postData.prettyCreationDate }</h2>
            <h1 className="text-4xl mb-[10px] ">{ postData.title }</h1>
            <div className="flex flex-row flex-wrap gap-3 mb-[20px] mt-[10px]">
            {postData.tags.map((tag: string) => (            
                <Tag tagText={tag} key={tag} />
            ))}
            </div>
            <div>{postData.Content}</div>
        </div>;
}