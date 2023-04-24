import Head from 'next/head';
import { Flex } from 'reflexbox';

import { PageHeader } from '../components/Common';

function Expenses() {
    return(
        <Flex>
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
        </Flex>
    );
};

export default Expenses;