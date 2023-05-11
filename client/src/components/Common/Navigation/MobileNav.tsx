import React, { PropsWithChildren } from 'react';
import { NextRouter } from 'next/router';
import { motion } from 'framer-motion';

import type { Route } from '../../../types/routes';
import SideNavRoute from './SideNavRoute';

export interface MobileNavProps {
    router: NextRouter,
    routes: Route[],
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
};

function MobileNav({ router, routes, isOpen, setIsOpen, children }: PropsWithChildren<MobileNavProps>) {

    const { initial, animate, exit, transition } = {
        initial: { y: "-100vh" },
        animate: { y: 0 },
        exit: { y: "-100vh" },
        transition: { duration: .3 }
    };

    const renderRoutes = () => {
        const Routes = routes.filter((route) => route.displayNav).map((route, index) => {
            const key = `nav-link-${index}-${route.title}`;
            return(
                <div key={key} onClick={() => setIsOpen(!isOpen)}>
                    <SideNavRoute router={router} route={route} />
                </div>
            );
        });

        return(
            <div className="ml-5 mt-10">
                <div className="flex flex-col w-52">
                    {Routes}
                </div>
            </div>
        );
    };

    return(
        <motion.div key="mobile-nav" className="z-10 absolute bg-neutral-800 w-screen h-screen" initial={initial} animate={animate} exit={exit} transition={transition}>
            {renderRoutes()}
            {children}
        </motion.div>
    );
};

export default MobileNav;