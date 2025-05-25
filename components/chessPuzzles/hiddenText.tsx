"use client";
import { useState } from 'react';

export default function HiddenText( {displayText, hiddenText }: {displayText: string, hiddenText: string}) {
    // State to manage the displayed text
    const [text, setText] = useState(displayText);

    // Function to handle the text change
    const handleTextChange = () => {
        setText(hiddenText);
    };

    return (
        <p onClick={handleTextChange} className="font-bold underline" style={{cursor: 'pointer'}}>{text}</p>
    );
};