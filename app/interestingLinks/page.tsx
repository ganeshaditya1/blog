import type { Metadata } from "next";
import InterestingLinks from '@/components/interestingLinks/interestingLinks';
import { getSlugsFromDirectory, getInterestingLinksFromMdxFile } from '@/app/mdxUtil';

export const metadata: Metadata = {
  title: "Interesting links and articles",
  description: "A collection of interesting links and articles around the topics of computer science that I found online.",
};

export default async function Page({}) {
    const slugs = (await getSlugsFromDirectory('content/interestingLinks'))
      .map((slug) => slug.slug);

    const postPromises = slugs.map((slug) => getInterestingLinksFromMdxFile(slug));
    return Promise.all(postPromises)
                  .then((iLinks) => (< InterestingLinks iLinks={ iLinks } />));
  }
   
  export const dynamicParams = false