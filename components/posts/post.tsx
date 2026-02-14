import { Post as PostData } from '@/models/Post';
import Tag from '../tag';

export default function Post({ postData }: { postData: PostData }) {
    return <div>            
            <h1 className="text-4xl mb-[5px] mt-[20px] font-normal">{ postData.title }</h1>
            <div className="flex flex-row flex-wrap gap-3 mb-[7px]">
            {postData.tags.map((tag: string) => (            
                <Tag tagText={tag} key={tag} />
            ))}
            </div>
            
            <h2 className="font-thin italic text-sm text-gray-600 mb-[15px] text-right">{ postData.prettyCreationDate }</h2>
            <div className="text-gray-700 leading-15">{postData.Content}</div>
        </div>;
}