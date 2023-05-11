import Head from 'next/head';
import { Flex, Box } from 'reflexbox';

import { Layout, PageHeader, RecapCard, Card, Table, EditAction } from '../components/Common';

function Dashboard() {

    return(
        <Layout animationKey="dashboard-page">
            <Head>
                <title>Dashboard</title>
            </Head>
            <PageHeader 
                title="Dashboard" 
                paths={[{
                    title: "Dashboard",
                    path: "/dashboard"
                }]} 
            />
            <Flex className="gap-6 py-4" justifyContent="center" flexWrap="wrap">
                <Box className="md:flex-1 w-full">
                    <RecapCard title="Total Spending" data={(1544).toLocaleString()} />
                </Box>
                <Box className="md:flex-1 w-full">
                    <RecapCard title="Budget Spending" data={(827).toLocaleString()} />
                </Box>
                <Box className="md:flex-1 w-full">
                    <RecapCard title="Total Spending" data={(1544).toLocaleString()} />
                </Box>
            </Flex>
            <Flex className="gap-6 py-4" justifyContent="center" flexWrap="wrap">
                <Box className="md:flex-1 w-full">
                    <Table
                        title="Spending"
                        subtitle="Overall Spending This Month"
                        headers={["Amount Spent", "Date", "Category", " "]}
                        createAction
                        data={[
                            ["$" + (1200).toLocaleString(), "3/17/23", "Shopping", <EditAction key={`edit-action-1`} />],
                            ["$" + (1200).toLocaleString(), "3/17/23", "Shopping", <EditAction key={`edit-action-2`} />],
                            ["$" + (1200).toLocaleString(), "3/17/23", "Shopping", <EditAction key={`edit-action-3`} />],
                            ["$" + (1200).toLocaleString(), "3/17/23", "Shopping", <EditAction key={`edit-action-4`} />]
                        ]}
                    />
                </Box>
                <Box className="md:flex-1 w-full">
                    <Table
                        headers={["Amount Spent", "Date", "Category", " "]}
                        data={[
                            [1200, "3/17/23", "Shopping", ""],
                            [1200, "3/17/23", "Shopping", ""],
                            [1200, "3/17/23", "Shopping", ""],
                            [1200, "3/17/23", "Shopping", ""]
                        ]}
                    />
                </Box>
            </Flex>
        </Layout>
    );
};

export default Dashboard;