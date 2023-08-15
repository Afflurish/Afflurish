import React, { useState } from 'react';
import Link from 'next/link';
import { NextRouter } from 'next/router';
import { Navbar, Dropdown, Avatar } from 'flowbite-react';
import { AnimatePresence } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons';

/* Redux */
import { store } from '../store';
import { authActions } from '../store/actions';

import type { UserState } from '../store/authSlice';

import { MobileNav } from '../components/Common';

import { _DashboardRoutes } from './_Routes';
import { IMAGE_RESOURCES } from '../constants';


export interface TopNavProps {
    user?: UserState,
    router: NextRouter
};

function TopNav({ router }: TopNavProps) {

    const user = store.getState().auth.user;
    console.log(user);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const handleLogout = () => {
        store.dispatch(authActions.clearAuthUser());
        router.push("/");
    };

    return(
        <div className="w-full">
            <Navbar className="w-full first:bg-neutral-800 first:!z-50 first:relative">
                    <Navbar.Brand>
                        <Link href="/">
                            <div className="flex md:hidden ml-0 z-50">
                                <div className="flex items-center">
                                    <img className="h-10" src={IMAGE_RESOURCES.AFFLURISH_ICON} alt="Afflurish Logo" />
                                    <img className="h-4" src={IMAGE_RESOURCES.AFFLURISH_TEXTILE_WHITE} alt="Afflurish Logo Textile" />
                                </div> 
                            </div>
                        </Link>
                    </Navbar.Brand>
                    <div className="flex md:order-2 z-50">
                        <div className="mr-5 text-xl my-auto text-neutral-800">
                            <FontAwesomeIcon icon={faBell} />
                        </div>
                        <Dropdown
                            arrowIcon={false}
                            inline={true}
                            label={
                                <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>
                            }
                        >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                {user?.display_name}
                            </span>
                            <span className="block truncate text-sm font-medium">
                                {user?.email}
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Earnings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={handleLogout}>
                            Sign out
                        </Dropdown.Item>
                        </Dropdown>
                        <div className="ml-4 mr-2 flex md:hidden justify-center content-center items-center" onClick={() => setIsMobileOpen(!isMobileOpen)}>
                            <FontAwesomeIcon className="text-2xl" icon={faBars} />
                        </div>
                    </div>
            </Navbar>
            <AnimatePresence key="topNav-ap" mode="wait">
                {isMobileOpen && <MobileNav router={router} routes={_DashboardRoutes} isOpen={isMobileOpen} setIsOpen={setIsMobileOpen} />}
            </AnimatePresence>
        </div>
    );
};

export default TopNav;