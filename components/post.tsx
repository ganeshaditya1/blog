import { Post as PostData } from './types/Post';

function wrapContent(Content) {
    if (Content instanceof String) {
        return <div>Content</div>;
    } else {
        return Content;
    }
}

export default function Post({ postData }: { postData: PostData }) {
    const ContentElem = wrapContent(postData.Content);
    return <div>
            <div className="flow-root">
                <h1 className="float-left">{ postData.title }</h1>
                <h2 className="float-right">{ postData.createdAt.toString() }</h2>
            </div>
            <div className="flex flex-row gap-5 mb-[20px]">
            {postData.tags.map((tag: string) => (            
                <span className="bg-red-100 p-[6px]">{tag}</span>
            ))}
            </div>
            <ContentElem />
        </div>;
}