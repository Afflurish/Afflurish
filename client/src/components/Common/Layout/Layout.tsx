import React, { PropsWithChildren } from 'react';

import { motion } from 'framer-motion';
import { Flex } from 'reflexbox';

export interface LayoutProps {
    animationKey: string,
    className?: string
};

function Layout({ className="", animationKey, children }: PropsWithChildren<LayoutProps>) {

    const { initial, animate, exit, transition } = {
        initial: { x: "-100vw" },
        animate: { x: 0 },
        exit: { x: "100vw" },
        transition: { duration: .8 }
    };

    return(
        <motion.div key={animationKey} initial={initial} animate={animate} exit={exit} transition={transition}>
            <Flex flexDirection="column" className={className}>
                {children}
            </Flex>
        </motion.div>
    );
};

export default Layout;