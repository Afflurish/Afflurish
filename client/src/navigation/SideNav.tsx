import Link from 'next/link';
import { Sidebar } from 'flowbite-react';
import { NextRouter } from 'next/router';

import { _DashboardRoutes } from './_Routes';
import { SideNavRoute } from '../components/Common';

import { IMAGE_RESOURCES } from '../constants';

interface SideNavProps {
    router: NextRouter
};

function SideNav({ router }: SideNavProps) {

    const renderRoutes = () => {
        const Routes = _DashboardRoutes.filter((route) => route.displayNav).map((route, index) => {
            return(
                <SideNavRoute 
                    route={route} 
                    router={router} 
                    key={`sidebar-link-${index}-${route.title}`}
                />
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