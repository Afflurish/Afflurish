import Link from 'next/link';
import { Sidebar } from 'flowbite-react';
import { NextRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Route } from '../types/routes';
import { _DashboardRoutes } from './_Routes';

import { IMAGE_RESOURCES } from '../constants';

interface SideNavProps {
    router: NextRouter
};

function SideNav({ router }: SideNavProps) {

    const isActiveRoute = (route: Route): boolean => {
        const re = /^.+?(?=\/|$)/g;
        const matchRes = router.pathname.match(re)![0];

        return matchRes === route.path;
    };

    const renderRoutes = () => {
        const Routes = _DashboardRoutes.filter((route) => route.displayNav).map((route, index) => {
            const isActive = isActiveRoute(route);
            const hoverClass = `
                hover:bg-neutral-800 hover:transition-all
            `;
            const activeClass = `
                bg-neutral-600/20
            `;
            const activeTextClass = `
                text-white font-semibold
            `;
            return(
                <Link className={`group rounded flex py-2 my-2 ${hoverClass} ${isActive && activeClass}`} href={route.path} key={`sidebar-link-${index}`}>
                    <div className={`text-md text-neutral-400 flex ml-2 group-hover:text-white ${isActive && activeTextClass}`}>
                        {
                            route.faIcon && 
                            <div className="w-12 text-lg text-center">
                                <FontAwesomeIcon icon={route.faIcon} />
                            </div>
                        }
                        <span className="mt-0.5">
                            {route.title}
                        </span>
                    </div>
                </Link>
            );
        });

        return(
            <div className="flex justify-center">
                <div className="w-52">
                <h1 className="ml-5 text-neutral-600 uppercase text-sm">Menu</h1>
                {Routes}
                </div>
            </div>
        );
    };
    
    return(
        <div className="w-fit h-full sm:hidden md:block">
            <Sidebar 
                className="first:!rounded-none" 
                theme={{ 
                    root: { 
                        inner: "h-full bg-neutral-900" 
                    } 
                }}
            >
                <Link href="/">
                    <div className="flex-row justify-center mx-auto pt-5 pb-8">
                        <div className="flex justify-center">
                            <img className="h-14" src={IMAGE_RESOURCES.AFFLURISH_ICON} alt="Afflurish Logo" />
                        </div>
                        <div className="flex justify-center">
                            <img className="h-6" src={IMAGE_RESOURCES.AFFLURISH_TEXTILE_WHITE} alt="Afflurish Logo Textile" />
                        </div>
                    </div> 
                </Link>
                <Sidebar.Items className="mt-5">
                    <Sidebar.ItemGroup>
                        {renderRoutes()}
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    );
};

export default SideNav;