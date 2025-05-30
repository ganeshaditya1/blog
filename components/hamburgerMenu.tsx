"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HamburgerMenu() {
    const pathname = usePathname();
    const [isHidden, setVisibility] = useState(true);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const onclickHandler = () => {
        setVisibility(!isHidden);
    }

    const handleClickOutside = (event: MouseEvent) => {
        // Check if the click is outside the dropdown
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as HTMLDivElement)) {
            setVisibility(true);
        }
    };

    // Reset state when the route changes
    useEffect(() => {
        setVisibility(true); // Reset your state here
    }, [pathname]);

    useEffect(() => {
        // Add event listener to the document
        document.addEventListener('mousedown', handleClickOutside);

    }, []);

    return (
        <div className="block xl:hidden">
            <p onClick={onclickHandler} style={{cursor: 'pointer'}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="inline size-6" style={{ verticalAlign: "top" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg> &nbsp;
            </p>
            {!isHidden &&
            (<div ref={dropdownRef} className="absolute z-10 bg-white bg-opacity-100  rounded border border-black-50 w-[300px] inline-block leading-10 block xl:hidden">                  
                <h3 className="border-b border-color-black-100 p-[10px]"><Link href="/posts">All posts</Link> </h3>
                <h3 className="border-b border-color-black-100 p-[10px]"><Link href="/interestingLinks">Interesting papers/articles</Link> </h3>
                <h3 className="border-b border-color-black-100 p-[10px]"><Link href="/bookReports">Book reports</Link></h3>
                <h3 className="p-[10px]"><Link href="/chessPuzzles">Chess puzzles</Link></h3>
            </div>)}
        </div>);
}