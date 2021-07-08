import React from 'react';
import dynamic from 'next/dynamic';

const RootWithNoSSR = dynamic<{}>(() => import('../components/Root'), {
    ssr: false,
});

const SafeHydrate: React.FC = ({ children }) => (typeof window === 'undefined' ? <></> : <>{children}</>);

export default function Home() {
    return (
        <React.StrictMode>
            <SafeHydrate>
                <RootWithNoSSR />
            </SafeHydrate>
        </React.StrictMode>
    );
}
