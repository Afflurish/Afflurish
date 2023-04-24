import { Route } from '../../types/routes';
// import { icon as FontAwesomeIcon } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const _DashboardRoutes: Route[] = [
    {
        title: "Dashboard",
        path: "/dashboard",
        faIcon: "gauge-high",
        displayNav: true
    },
    {
        title: "Analytics",
        path: "/analytics",
        faIcon: "chart-simple",
        displayNav: true
    },
    {
        title: "Expenses",
        path: "/expenses",
        faIcon: "file-invoice-dollar",
        displayNav: true
    },
    {
        title: "Spending",
        path: "/spending",
        faIcon: "money-bill",
        displayNav: true
    },
    {
        title: "Settings",
        path: "/settings",
        faIcon: "cogs",
        displayNav: true
    },
];

export default _DashboardRoutes;