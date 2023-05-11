import type { Route } from '../../types/routes';
import { 
    faGaugeHigh, 
    faChartSimple,
    faFileInvoiceDollar,
    faMoneyBill,
    faCogs
} from '@fortawesome/free-solid-svg-icons';

const _DashboardRoutes: Route[] = [
    {
        title: "Dashboard",
        path: "/dashboard",
        faIcon: faGaugeHigh,
        displayNav: true
    },
    {
        title: "Analytics",
        path: "/analytics",
        faIcon: faChartSimple,
        displayNav: true
    },
    {
        title: "Expenses",
        path: "/expenses",
        faIcon: faFileInvoiceDollar,
        displayNav: true
    },
    {
        title: "Spending",
        path: "/spending",
        faIcon: faMoneyBill,
        displayNav: true
    },
    {
        title: "Settings",
        path: "/settings",
        faIcon: faCogs,
        displayNav: true
    },
];

export default _DashboardRoutes;