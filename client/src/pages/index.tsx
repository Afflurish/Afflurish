import Head from 'next/head';
import Lottie from 'lottie-react';
import { Flex, Box } from 'reflexbox';
import { motion } from 'framer-motion';

/* Redux */
import { store } from '../store';

import dashboardAnimation from '../lottie/dashboard-analytics.json';
import { Button } from '../components/Common';

function Home() {

    const theme = store.getState().theme;

    return (
        <Flex>
            <Head>
                <title>Afflurish</title>
            </Head>
            <Flex className="w-full" justifyContent="center">
                <Box className="flex flex-1 flex-wrap justify-center content-center items-center">
                    <motion.div 
                        initial={{ x: "-50vw" }}
                        animate={{ x: 1 }}
                        transition={{ duration: 4, type: "spring", mass: .5 }}
                        className="flex flex-col justify-center w-6/12"
                    >
                        <p className="text-xl mb-1.5">Track. Budget. Analyze.</p>
                        <h1 
                            className={`
                                ${theme.tailwind.gradientText}
                                text-6xl
                                font-bold
                                text-left
                                mb-5
                            `}
                        >
                            Tools For Better<br />Personal Finance
                        </h1>
                        <p className="mb-7">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Etiam sit amet nisl purus. Lectus magna fringilla 
                            urna porttitor rhoncus dolor purus non.
                        </p>
                        <Flex className="gap-4">
                            <Button color="gradient" size="lg">
                                Learn More
                            </Button>
                            <Button outlined color="gradient" size="lg">
                                Learn More
                            </Button>
                        </Flex>
                    </motion.div>
                </Box>
                <Box className="flex flex-1 items-center justify-center">
                    <motion.div
                        initial={{ x: "50vw" }}
                        animate={{ x: 1 }}
                        transition={{ duration: 4, type: "spring", mass: .5, delay: .5 }}
                    >
                    <Lottie 
                        className="w-8/12 h-8/12 mt-14"
                        animationData={dashboardAnimation} 
                    />
                    </motion.div>
                </Box>
            </Flex>
        </Flex>
    );
};

export default Home;
