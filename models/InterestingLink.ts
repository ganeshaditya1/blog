import { format } from 'date-fns';
import { JSX } from "react";

export class InterestingLink {
    private readonly _title: string;
    private readonly _createdAt: Date;
    private readonly _tags: string[];
    private readonly _published: boolean;
    private readonly _slug: string;
    private readonly _url: string;
    private readonly _Content: JSX.Element;

    constructor(title: string, createdAt: Date, tags: string[], published: boolean,
                slug: string, url: string, Content: JSX.Element) {
        this._title = title;
        this._createdAt = new Date(createdAt);
        this._tags = tags;
        this._published = published;
        this._slug = slug;
        this._url = url;
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

    get url(): string {
        return this._url;
    }

    get Content(): JSX.Element {
        return this._Content;
    }
    
    get prettyCreationDate(): string {
        return format(this._createdAt, "MMMM do, yyyy");
    }
};