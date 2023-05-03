import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import React from 'react';
import { AnimatePresence } from 'framer-motion';

import Navigation from '../navigation';

function App({ Component, pageProps }: AppProps) {
    return(
        <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
            <style global jsx>
                {`
                    html,
                    body,
                    body > div:first-child,
                    div#__next,
                    div#__next > div {
                        height: 100%;
                        width: 100%;
                        overflow-x: hidden;
                    }
                `}
            </style>
            <Navigation Component={Component} {...pageProps} />
        </AnimatePresence>
    );
};

export default App;
