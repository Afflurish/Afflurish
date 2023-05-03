import React, { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { Flex } from 'reflexbox';

export interface LayoutProps {
    className?: string
};

function Layout({ className="", children }: PropsWithChildren<LayoutProps>) {

    const { initial, animate, exit, transition } = {
        initial: { x: "-100vw" },
        animate: { x: 0 },
        exit: { x: "100vw" },
        transition: { duration: .8 }
    };

    return(
        <motion.div initial={initial} animate={animate} exit={exit} transition={transition}>
            <Flex flexDirection="column" className={className}>
                {children}
            </Flex>
        </motion.div>
    );
};

export default Layout;