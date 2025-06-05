"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HamburgerMenu() {
    const pathname = usePathname();
    const [isHidden, setVisibility] = useState(true);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    const onclickHandler = () => {
        setVisibility(!isHidden);
    }

    const handleClickOutside = (event: MouseEvent) => {
        // Check if the click is outside the dropdown
        if ((buttonRef.current && !buttonRef.current.contains(event.target as HTMLDivElement)) && (dropdownRef.current && !dropdownRef.current.contains(event.target as HTMLDivElement))) {
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
            <p onClick={onclickHandler} ref={buttonRef} style={{cursor: 'pointer'}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="inline size-6" style={{ verticalAlign: "top" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </p>
            {!isHidden &&
            (<div ref={dropdownRef} className="absolute z-10 bg-white bg-opacity-100  w-[100%] inline-block leading-10 block xl:hidden left-0">
                <h3 className={`mt-[5px] border-b border-color-black-50 p-[10px] ${pathname.includes('posts') ? 'bg-gray-200' : ''}`}><Link href="/posts">All posts</Link> </h3>
                <h3 className={`border-b border-color-black-50 p-[10px] ${pathname.includes('interestingLink') ? 'bg-gray-200' : ''}`}><Link href="/interestingLinks">Interesting papers/articles</Link> </h3>
                <h3 className={`border-b border-color-black-50 p-[10px] ${pathname.includes('bookReports') ? 'bg-gray-200' : ''}`}><Link href="/bookReports">Book reports</Link></h3>
                <h3 className={`border-b border-color-black-50 p-[10px] ${pathname.includes('chessPuzzles') ? 'bg-gray-200' : ''}`}><Link href="/chessPuzzles">Chess puzzles</Link></h3>
            </div>)}
        </div>);
}