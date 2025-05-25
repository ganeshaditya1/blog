import { ChessPuzzle as Puzzle} from '@/models/ChessPuzzle';
import Image from 'next/image';
import HiddenText from './hiddenText';

export default function ChessPuzzle({ puzzle }: { puzzle: Puzzle }) {
    const classMap: { [key: string]: string } = {
        Easy: 'text-blue-500',   
        Medium: 'text-orange-500', 
        Hard: 'text-red-500',
    };
    return <div className="mb-[20px]">
            <h1 className="mb-[10px]">{ puzzle.title }</h1>    
            <div className="xl:w-[400px] w-[300px] mb-[20px]">            
                <Image src={`/chessPuzzles/${puzzle.slug}.png`} alt="Chess puzzle image" layout="responsive" height={ 200 } width={ 200 } />
            </div>
            <p className={classMap[puzzle.difficulty] || 'text-black'}>{puzzle.difficulty}</p>
            {puzzle.hint1 && < HiddenText displayText="Hint 1" hiddenText={puzzle.hint1} />}
            {puzzle.hint2 && < HiddenText displayText="Hint 2" hiddenText={puzzle.hint2} />}
            {puzzle.hint3 && < HiddenText displayText="Hint 3" hiddenText={puzzle.hint3} />}
            < HiddenText displayText="Solution" hiddenText={puzzle.solution} />
        </div>;
}