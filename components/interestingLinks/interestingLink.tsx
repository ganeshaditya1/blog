import { InterestingLink as ILink} from '../types/InterestingLink';

export default function InterestingLink({ iLink }: { iLink: ILink }) {
    return <div className="mb-[20px]">
            <h2 className="font-thin text-sm underline underline-offset-4 decoration-gray-100 text-gray-600">{ iLink.prettyCreationDate }</h2>
            <h1 className="mb-[10px]">
                <a href={`${iLink.url}`}>{ iLink.title }</a>
            </h1>
            <div className="flex flex-row gap-3 mb-[20px]">
                {iLink.tags.map((tag: string) => (            
                    <span className="bg-neutral-100 p-[1px] pl-[6px] pr-[6px]" key={tag}>{tag}</span>
                ))}
            </div>
            <div className="mb-[50px] pb-[20px] ">{iLink.Content}</div>
        </div>;
}