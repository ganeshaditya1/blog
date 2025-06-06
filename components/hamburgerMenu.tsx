"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

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
                <Image src="/icons/hamburgerIcon.png" height={25} width={25} alt="hamburger menu icon" className="inline align-top"/> 
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