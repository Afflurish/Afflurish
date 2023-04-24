import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faGaugeHigh, faFileInvoiceDollar, faMoneyBill, faCogs, faBell, faCirclePlus, faPen, faChartSimple, faArrowTrendUp, faArrowTrendDown } from '@fortawesome/free-solid-svg-icons';

import Navigation from '../navigation';

library.add(
    fab, 
    faGaugeHigh, 
    faFileInvoiceDollar, 
    faMoneyBill, 
    faCogs, 
    faBell, 
    faCirclePlus, 
    faPen, 
    faChartSimple,
    faArrowTrendUp,
    faArrowTrendDown
);

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
                    }
                `}
            </style>
            <Navigation Component={Component} {...pageProps} />
        </React.Fragment>
    );
};

export default App;
