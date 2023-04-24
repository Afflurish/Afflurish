import React from 'react';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import { Flex, Box } from 'reflexbox';

import { Container, Col } from '../components/Common';

import NavBar from './NavBar';
import SideNav from './SideNav';
import TopNav from './TopNav';

import { _HomeRoutes, _DashboardRoutes } from './_Routes';
import { Route } from '../types/routes';

function Navigation({ Component, pageProps }: AppProps) {

    const router = useRouter();

    const renderHomeNav = () => (
        <React.Fragment>
            <NavBar router={router} />
            <Component {...pageProps} />
        </React.Fragment>
    );

    const renderDashboardNav = () => (
        <Flex>
            <Box className="hidden lg:block">
                <SideNav router={router} />
            </Box>
            <Box flex="1 1 auto">
                <TopNav />
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