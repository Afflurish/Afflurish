import Head from 'next/head';

import { Layout, PageHeader } from '../components/Common';

function Analytics() {
    return(
        <Layout animationKey="analytics-page">
            <Head>
                <title>Analytics</title>
            </Head>
            <PageHeader 
                title="Analytics" 
                paths={[{
                    title: "Analytics",
                    path: "/analytics"
                }]} 
            />
        </Layout>
    );
};

export default Analytics;