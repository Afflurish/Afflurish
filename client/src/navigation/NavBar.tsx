import Link from 'next/link';
import { Navbar, Button } from 'flowbite-react';
import { NextRouter } from 'next/router';

import { Route } from '../types/routes';
import { _HomeRoutes } from './_Routes';

import { IMAGE_RESOURCES } from '../constants';

interface NavBarProps {
    router: NextRouter
};

function NavBar({ router }: NavBarProps) {

    const isActiveRoute = (route: Route): boolean => {
        const re = /^.+?(?=\/|$)/g;
        const matchRes = router.pathname.match(re)![0];

        return matchRes === route.path;
    };

    const renderRoutes = () => {
        const Routes = _HomeRoutes.filter((route) => route.displayNav).map((route, index) => (
            <Link href={route.path} key={`nav-link-${index}`}>
                {route.title}
            </Link>
        ));

        return Routes;
    };

    return(
        <Navbar fluid={true} rounded={true}>
            <Navbar.Brand href="https://afflurish.com/">
                <img
                    src={IMAGE_RESOURCES.AFFLURISH_ICON}
                    className="mr-1 h-10 sm:h-9"
                    alt="Flowbite Logo"
                />
                <img
                    src={IMAGE_RESOURCES.AFFLURISH_TEXTILE_WHITE}
                    className="h-5 sm:h-9 mt-1"
                    alt="Flowbite Logo"
                />
            </Navbar.Brand>
            <Navbar.Collapse>
                {renderRoutes()}
            </Navbar.Collapse>
            <div className="flex md:order-2">
                <Link href="/dashboard">
                    <Button gradientDuoTone="greenToBlue" size="sm">
                        Go To Dashboard
                    </Button>
                </Link>
            </div>
        </Navbar>
    );
};

export default NavBar;