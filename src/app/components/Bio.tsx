// create a little component to render profile picture, and bio paragraph in a horizontal line beneath the header

import Image from 'next/image';
import profilePic from '../../../public/prof.jpg';

export default function Bio() {
    return (
        <div className="bio">
            <Image
                src={profilePic}
                alt="Profile Picture"
                width={150}
                height={150}
                className="bio-image"
            />
            <div className="bio-text">
                <h2 className="text-2xl font-bold">Alex Carlson is a game and web developer based in Queens, NY.</h2>
            </div>
        </div>
    )
}