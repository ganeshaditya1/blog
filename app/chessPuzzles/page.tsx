import type { Metadata } from "next";
import { getSlugsFromDirectory, getChessPuzzleFromMdxFile } from '@/app/mdxUtil';
import ChessPuzzles from "@/components/chessPuzzles/chessPuzzles";

export const metadata: Metadata = {
  title: "Chess puzzles",
  description: "A collection of interesting chess puzzles from Lichess.org.",
};

export default async function Page({}) {    
    const slugs = (await getSlugsFromDirectory('content/chessPuzzles'))
      .map((slug) => slug.slug);

    const postPromises = slugs.map((slug) => getChessPuzzleFromMdxFile(slug));
    return Promise.all(postPromises)
                  .then((puzzles) => (< ChessPuzzles puzzles={ puzzles } />));
  }
   
  export const dynamicParams = false