import Head from 'next/head';

import { Layout, PageHeader } from '../components/Common';

function Budget() {
    return(
        <Layout animationKey="budget-page">
            <Head>
                <title>Budget</title>
            </Head>
            <PageHeader 
                title="Budget"
                paths={[{
                    title: "Budget",
                    path: "/budget"
                }]}
            />
        </Layout>
    );
};

export default Budget;