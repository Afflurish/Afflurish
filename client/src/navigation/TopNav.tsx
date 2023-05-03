import React, { useState } from 'react';
import Link from 'next/link';
import { NextRouter } from 'next/router';
import { Navbar, Dropdown, Avatar } from 'flowbite-react';
import { AnimatePresence } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { MobileNav } from '../components/Common';

import { _DashboardRoutes } from './_Routes';
import { IMAGE_RESOURCES } from '../constants';

export interface TopNavProps {
    router: NextRouter
};

function TopNav({ router }: TopNavProps) {

    const [isMobileOpen, setIsMobileOpen] = useState(false);

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
                            <FontAwesomeIcon icon="bell" />
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
                                Bonnie Green
                            </span>
                            <span className="block truncate text-sm font-medium">
                                name@flowbite.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Earnings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            Sign out
                        </Dropdown.Item>
                        </Dropdown>
                        <div className="ml-4 mr-2 flex md:hidden justify-center content-center items-center" onClick={() => setIsMobileOpen(!isMobileOpen)}>
                            <FontAwesomeIcon className="text-2xl" icon={faBars} />
                        </div>
                    </div>
            </Navbar>
            <AnimatePresence mode="wait">
                {isMobileOpen && <MobileNav router={router} routes={_DashboardRoutes} isOpen={isMobileOpen} setIsOpen={setIsMobileOpen} />}
            </AnimatePresence>
        </div>
    );
};

export default TopNav;