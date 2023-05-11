import type { Route } from '../types/routes';

export function isActiveRoute(currentPathname: string, route: Route): boolean {
    const re = /^.+?(?=\/|$)/g;
    const matchRes = currentPathname.match(re)![0];

    return matchRes === route.path;
};