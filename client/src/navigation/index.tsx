import React from 'react';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import { Flex, Box } from 'reflexbox';

import NavBar from './NavBar';
import SideNav from './SideNav';
import TopNav from './TopNav';

import { _HomeRoutes, _DashboardRoutes } from './_Routes';
import { Route } from '../types/routes';

function Navigation({ Component, pageProps }: AppProps) {

    const router = useRouter();

    const renderHomeNav = () => (
        <Flex>
            <Box flex="1 1 auto">
                <NavBar router={router} />
                <Component {...pageProps} />
            </Box>
        </Flex>
    );

    const renderDashboardNav = () => (
        <Flex>
            <Box className="hidden lg:block z-10">
                <SideNav router={router} />
            </Box>
            <Box flex="1 1 auto" className="z-0">
                <TopNav router={router} />
                <div className="p-6 sm:p-12">
                    <Component {...pageProps} />
                </div>
            </Box>
        </Flex>
    );

    const routeFilter = (route: Route) => {
        const re = /^.+?(?=\/|$)/g;
        const matchRes = router.pathname.match(re)![0];

        return matchRes === route.path;
    };

    return(
        <React.Fragment>
            {_HomeRoutes.filter(routeFilter).length > 0 && renderHomeNav()}
            {_DashboardRoutes.filter(routeFilter).length > 0 && renderDashboardNav()}
        </React.Fragment>
    );
};

export default Navigation;