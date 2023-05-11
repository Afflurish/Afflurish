import Head from 'next/head';

import { Layout, PageHeader } from '../components/Common';

function Spending() {
    return(
        <Layout animationKey="spending-page">
            <Head>
                <title>Spending</title>
            </Head>
            <PageHeader 
                title="Spending" 
                paths={[{
                    title: "Spending",
                    path: "/spending"
                }]} 
            />
        </Layout>
    );
};

export default Spending;