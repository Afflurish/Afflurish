import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { Flex, Box } from 'reflexbox';

/* Redux */
import { store } from '../store';

import type { Route } from '../types/routes';

import NavBar from './NavBar';
import SideNav from './SideNav';
import TopNav from './TopNav';

import { _HomeRoutes, _DashboardRoutes } from './_Routes';

function Navigation({ Component, pageProps }: AppProps) {

    const user = store.getState().auth.user;
    const router = useRouter();

    const isDashboardRoute = () => {
        return _DashboardRoutes.filter(routeFilter).length > 0;
    };

    useEffect(() => {
        if(!user && isDashboardRoute()) {
            router.push("/");
        }
    }, [user, isDashboardRoute, router]);

    const renderHomeNav = () => (
        <Flex>
            <Box flex="1 1 auto">
                <NavBar user={user} router={router} />
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
                <TopNav user={user} router={router} />
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
            {isDashboardRoute() && renderDashboardNav()}
        </React.Fragment>
    );
};

export default Navigation;