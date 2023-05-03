import React from 'react';
import { Flex, Box } from 'reflexbox';
import Link from 'next/link';

export interface PageHeaderPath {
    title: string,
    path: string
};

export interface PageHeaderProps {
    title: string,
    paths: PageHeaderPath[]
};

function PageHeader({ title, paths }: PageHeaderProps) {

    const renderPath = () => {
        const mainPathColor = "text-[#00d2ff]";
        const Path = paths.map((path, index) => (
            <React.Fragment key={`dashboard-header-path-${index}`}>
                <h1 className="inline"> / </h1>
                <Link href={path.path}>
                    <h1 className={`text-lg inline ${index === (paths.length - 1) && mainPathColor}`}>
                        {path.title}
                    </h1>
                </Link>
            </React.Fragment>
        ));

        return Path;
    };

    return(
        <Flex flexDirection="column" className="pb-10">
            <Box>
            <h1 className="text-4xl font-bold mb-2">{title}</h1>
            <Link href="/">
                <h1 className="text-lg inline">Home</h1>
            </Link>
            {renderPath()}
            </Box>
        </Flex>
    );
};

export default PageHeader;