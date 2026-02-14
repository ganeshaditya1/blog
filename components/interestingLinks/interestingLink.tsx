import { InterestingLink as ILink} from '@/models/InterestingLink';
import Tag from '../tag';

export default function InterestingLink({ iLink }: { iLink: ILink }) {
    return <div className="mb-[20px]">
            <h2 className="font-thin text-sm italic text-gray-600">{ iLink.prettyCreationDate }</h2>
            <h1 className="mb-[3px]">
                <a href={`${iLink.url}`}>{ iLink.title }</a>
            </h1>
            <div className="flex flex-row gap-3 mb-[20px]">
                {iLink.tags.map((tag: string) => (            
                    <Tag tagText={tag} key={tag} />
                ))}
            </div>
            <div className="mb-[30px] pb-[20px] ">{iLink.Content}</div>
        </div>;
}