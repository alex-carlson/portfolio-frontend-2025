"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import profilePic from '../../../public/prof.jpg';

export default function Bio() {
    const [activeSpans, setActiveSpans] = useState<{ [key: string]: boolean }>({
        game: false,
        web: false,
    });

    const toggleActive = (key: string) => {
        setActiveSpans((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <div className="bio">
            <Image
                src={profilePic}
                alt="Profile Picture"
                className="bio-image"
            />
            <div className="bio-text">
                <h2 className="text-2xl font-bold">
                    Alex Carlson is a{' '}
                    <span
                        className={`game ${activeSpans.game ? 'active' : ''}`}
                        onClick={() => toggleActive('game')}
                    >
                        game
                    </span>{' '}
                    and{' '}
                    <span
                        className={`web ${activeSpans.web ? 'active' : ''}`}
                        onClick={() => toggleActive('web')}
                    >
                        web
                    </span>{' '}
                    developer based in Queens, NY.
                </h2>
            </div>
        </div>
    );
}