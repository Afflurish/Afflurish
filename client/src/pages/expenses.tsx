import Head from 'next/head';

import { Layout, PageHeader } from '../components/Common';

function Expenses() {
    return(
        <Layout animationKey="expenses-page">
            <Head>
                <title>Expenses</title>
            </Head>
            <PageHeader 
                title="Expenses" 
                paths={[{
                    title: "Expenses",
                    path: "/expenses"
                }]} 
            />
        </Layout>
    );
};

export default Expenses;