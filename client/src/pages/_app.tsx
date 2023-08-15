import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import React from 'react';

import Navigation from '../navigation';

function App({ Component, pageProps }: AppProps) {
    return(
        <React.Fragment>
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
        </React.Fragment>
    );
};

export default App;
