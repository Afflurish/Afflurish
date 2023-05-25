import type { Route } from '../../types/routes';
import { 
    faGaugeHigh, 
    faChartSimple,
    faMoneyBill,
    faMoneyBillTransfer,
    faCogs,
    faScaleBalanced,
    faSackDollar
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
        title: "Budget",
        path: "/budget",
        faIcon: faScaleBalanced,
        displayNav: true,
    },
    {
        title: "Income",
        path: "/income",
        faIcon: faSackDollar,
        displayNav: true
    },
    {
        title: "Expenses",
        path: "/expenses",
        faIcon: faMoneyBillTransfer,
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