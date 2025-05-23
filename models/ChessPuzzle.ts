import { format } from 'date-fns';

type Difficulty = "Easy" | "Medium" | "Hard";

export class ChessPuzzle {
    private readonly _createdAt: Date;
    private readonly _difficulty: Difficulty;
    private readonly _tags: string[];
    private readonly _published: boolean;
    private readonly _slug: string;
    private readonly _hint1: string;
    private readonly _hint2: string;
    private readonly _hint3: string;
    private readonly _solution: string;


    constructor(createdAt: Date, difficulty: Difficulty, tags: string[], published: boolean,
                slug: string, hint1: string, hint2: string, hint3: string, solution: string) {
        this._createdAt = new Date(createdAt);
        this._difficulty = difficulty;
        this._tags = tags;
        this._published = published;
        this._slug = slug;
        this._hint1 = hint1;
        this._hint2 = hint2;
        this._hint3 = hint3;
        this._solution = solution;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    get difficulty(): string {
        return this._difficulty;
    }

    get tags(): string[] {
        return this._tags;
    }

    get published(): boolean {
        return this._published;
    }

    get slug(): string {
        return this._slug;
    }

    get hint1(): string {
        return this._hint1;
    }

    get hint2(): string {
        return this._hint2;
    }

    get hint3(): string {
        return this._hint3;
    }

    get solution(): string {
        return this._solution;
    }
    
    get prettyCreationDate(): string {
        return format(this._createdAt, "MMMM do, yyyy");
    }
};