"use client"

import React from 'react';
import Image from 'next/image';
import profilePic from '@/public/prof.jpg';

export default function Bio() {

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
                    <span className="game-title">
                        game
                    </span>{' '}
                    and{' '}
                    <span className="web-title">
                        web
                    </span>{' '}
                    developer based in Queens, NY.
                </h2>
            </div>
        </div>
    );
}