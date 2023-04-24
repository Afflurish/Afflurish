import Head from 'next/head';
import { Flex } from 'reflexbox';

import { PageHeader } from '../components/Common';

function Spending() {
    return(
        <Flex>
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
        </Flex>
    );
};

export default Spending;