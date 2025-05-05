'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function VisibilityController() {
    const searchParams = useSearchParams();

    useEffect(() => {
        const isWeb = searchParams.has('web');
        const isGame = searchParams.has('game');

        const gameElements = document.querySelectorAll('.game');
        const webElements = document.querySelectorAll('.web');

        console.log('isWeb:', isWeb, 'isGame:', isGame);

        gameElements.forEach(el => {
            (el as HTMLElement).style.display = isWeb ? 'none' : '';
        });

        webElements.forEach(el => {
            (el as HTMLElement).style.display = isGame ? 'none' : '';
        });
    }, [searchParams]);

    return null; // This is a logic-only component
}
