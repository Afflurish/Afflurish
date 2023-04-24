import Head from 'next/head';
import { Flex } from 'reflexbox';

import { PageHeader } from '../components/Common';

function Analytics() {
    return(
        <Flex>
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
        </Flex>
    );
};

export default Analytics;