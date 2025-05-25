import { ChessPuzzle as puzzle } from '@/models/ChessPuzzle';
import ChessPuzzle from './chessPuzzle';

export default function ChessPuzzles( { puzzles }: { puzzles: Array<puzzle> } ) {
    const puzzleCollection = puzzles
        .filter((puzzle) => puzzle.published)
        .sort((puzzle1, puzzle2) => puzzle2.createdAt.getTime() - puzzle1.createdAt.getTime())
        .map((puzzle) => < ChessPuzzle puzzle={ puzzle } key={ puzzle.slug } />);
    return (<div className="mt-[30px]">
        <h2 className="mb-[50px]"> All of these puzzles are from <a className="underline" href="https://www.lichess.org">Lichess.org</a> or from my personal games.</h2>

        {puzzleCollection}
    </div>);
}