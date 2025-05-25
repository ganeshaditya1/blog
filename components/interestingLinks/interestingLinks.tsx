import { InterestingLink as ILink } from '@/models/InterestingLink';
import InterestingLink from './interestingLink';

export default function InterestingLinks( { iLinks }: { iLinks: Array<ILink> } ) {
    const iLinkCollection = iLinks
        .filter((iLink) => iLink.published)
        .sort((iLink1, iLink2) => iLink2.createdAt.getTime() - iLink1.createdAt.getTime())
        .map((iLink) => < InterestingLink iLink={ iLink } key={ iLink.title } />);
    return (<div className="mt-[20px]">
        {iLinkCollection}
    </div>);
}