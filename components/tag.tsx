export default function tag({ tagText }: { tagText: string }) {
    return <span className="text-gray-700 p-[2px] whitespace-nowrap rounded-sm underline underline-offset-[4px] decoration-dashed decoration-gray-200">{ tagText }</span>;
}