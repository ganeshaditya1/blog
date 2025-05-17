import { JSX } from "react";

export class Post {
    private readonly _title: string;
    private readonly _createdAt: Date;
    private readonly _tags: string[];
    private readonly _published: boolean;
    private readonly _slug: string;
    private readonly _synopsis: string;
    private readonly _Content: JSX.Element;

    constructor(title: string, createdAt: Date, tags: string[], published: boolean,
                slug: string, synopsis: string, Content: JSX.Element) {
        this._title = title;
        this._createdAt = createdAt;
        this._tags = tags;
        this._published = published;
        this._slug = slug;
        this._synopsis = synopsis;
        this._Content = Content;
    }

    get title(): string {
        return this._title;
    }

    get createdAt(): Date {
        return this._createdAt;
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

    get synopsis(): string {
        return this._synopsis;
    }

    get Content(): JSX.Element {
        return this._Content;
    }
};