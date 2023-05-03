import Link from 'next/link';
import { NextRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Route } from '../../../types/routes';

import { navigation } from '../../../utils';

export interface SideNavRouteProps {
    route: Route,
    router: NextRouter
}

function SideNavRoute({ route, router }: SideNavRouteProps) {

    const isActive = navigation.isActiveRoute(router.pathname, route);
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
        <Link className={`group rounded flex py-2 my-2 ${hoverClass} ${isActive && activeClass}`} href={route.path}>
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
};

export default SideNavRoute;