import React, { useState } from 'react';
import Link from 'next/link';
import { NextRouter } from 'next/router';
import { Navbar } from 'flowbite-react';
import { Flex, Box } from 'reflexbox';
import { AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

/* Redux */
import { store } from '../store';
import type { UserState } from '../store/authSlice';

import { _HomeRoutes } from './_Routes';

import { MobileNav, GoToDashboardButton, Button } from '../components/Common';

import { IMAGE_RESOURCES } from '../constants';
import { navigation } from '../utils';

interface NavBarProps {
    user?: UserState,
    router: NextRouter
};

function NavBar({ user, router }: NavBarProps) {

    const theme = store.getState().theme;
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const renderRoutes = () => {
        const Routes = _HomeRoutes.filter((route) => route.displayNav).map((route, index) => {
            const isActive = navigation.isActiveRoute(router.pathname, route);
            return(
                <Link className={`${isActive && "font-bold"} mx-4`} href={route.path} key={`nav-link-${index}-${route.title}`}>
                    {route.title}
                </Link>
            );
        });

        return Routes;
    };

    const renderLoginButton = () => {
        return(
            <Flex>
                <Link href="/login">
                    <Button color="gradient" className="mx-1 w-24">
                        Login
                    </Button>
                </Link>
                <Link href="/signup">
                    <Button outlined color="gradient" className="mx-1 w-24">
                        Signup
                    </Button>
                </Link>
            </Flex>
        );
    };

    return(
        <div className="w-full">
            <Navbar 
                theme={{ 
                    base: `
                        ${theme.tailwind.background}
                        fixed
                        px-2 py-2.5 sm:px-4 rounded first:relative first:z-50
                    ` 
                }} 
                fluid 
                rounded
            >
                <Flex className="w-full" alignItems="center" alignContent="center">
                    <Box flex="1 1 auto">
                        <Link href="/" className="flex items-center">
                            <img
                                src={IMAGE_RESOURCES.AFFLURISH_ICON}
                                className="h-10"
                                alt="Afflurish Logo"
                            />
                            <img
                                src={IMAGE_RESOURCES.AFFLURISH_TEXTILE_WHITE}
                                className="h-5 mt-1"
                                alt="Afflurish Text Logo"
                            />
                        </Link>
                    </Box>
                    <Box flex="1 1 auto" className="hidden md:flex md:justify-center md:items-center">
                        {renderRoutes()}
                    </Box>
                    <Box flex="1 1 auto" className="flex items-center justify-end">
                        <div className="hidden md:block">
                            {user ? <GoToDashboardButton /> : renderLoginButton()}
                        </div>
                        <div className="ml-4 mr-2 flex md:hidden justify-center content-center items-center" onClick={() => setIsMobileOpen(!isMobileOpen)}>
                            <FontAwesomeIcon className="text-2xl" icon={faBars} />
                        </div>
                    </Box>
                </Flex>
            </Navbar>
            <AnimatePresence key="navbar-ap" mode="wait">
                {
                    isMobileOpen && 
                    <MobileNav router={router} routes={_HomeRoutes} isOpen={isMobileOpen} setIsOpen={setIsMobileOpen}>
                        <div className="ml-5 mt-16">
                            <GoToDashboardButton />
                        </div>
                    </MobileNav>
                }
            </AnimatePresence>
        </div>
    );
};

export default NavBar;