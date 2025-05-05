"use client";

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';

export default function NotFound() {
    const searchParams = useSearchParams();

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                {searchParams && (
                    <p>Query Parameters: {JSON.stringify(Object.fromEntries(searchParams.entries()))}</p>
                )}
                <Link href="/" style={{ color: 'blue', textDecoration: 'underline' }}>Go back to Home</Link>
            </div>
        </Suspense>
    );
}