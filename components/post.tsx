import { Post as PostData } from './types/Post';

export default function Post({ postData }: { postData: PostData }) {
    return <div>            
            <h2 className="font-thin text-sm underline underline-offset-4 decoration-gray-100 text-gray-600">{ postData.prettyCreationDate }</h2>
            <h1 className="mb-[10px]">{ postData.title }</h1>
            <div className="flex flex-row gap-3 mb-[40px]">
            {postData.tags.map((tag: string) => (            
                <span className="bg-neutral-100 p-[1px] pl-[6px] pr-[6px]" key={tag}>{tag}</span>
            ))}
            </div>
            <div>{postData.Content}</div>
        </div>;
}