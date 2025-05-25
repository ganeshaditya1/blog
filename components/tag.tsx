export default function tag({ tagText }: { tagText: string }) {
    return <span className="bg-neutral-100 pl-[6px] pr-[6px] p-[2px] whitespace-nowrap inline rounded-md">{ tagText }</span>;
}