import React from 'react';
import { Flex } from 'reflexbox';

import { TableHeadHeadersProp } from './TableHead';
import { TableData } from './TableRows';

import TableHead from './TableHead';
import TableRows from './TableRows';
import CreateAction from './CreateAction';

export interface TableProps {
    title?: string,
    subtitle?: string,
    headers: TableHeadHeadersProp,
    data: TableData[][],
    containerClass?: string,
    tableHeadClass?: string,
    tableClass?: string,
    createAction?: boolean,
    onCreateAction?: React.MouseEventHandler
};

function Table(props: TableProps) {

    const {
        containerClass="", 
        tableHeadClass="", 
        tableClass="", 
        title="", 
        subtitle="",
        headers, 
        data=[],
        createAction,
        onCreateAction
    } = props;

    return(
        <Flex flexDirection="column" className={`table ${containerClass}`}>
            <div>
                <div className="bg-gradient-to-tr mx-auto from-[#00ff3c] to-[#00d2ff] rounded-t-lg w-10/11">
                    <div className="bg-neutral-900/40 flex justify-between rounded-t-lg items-center h-14 px-5">
                        <div className="flex-1">
                            <h1 className="text-lg font-bold mb-0 pb-0">{title}</h1>
                            <p className="text-sm font-semibold mt-0 pt-0">{subtitle}</p>
                        </div>
                        {createAction && <CreateAction onCreate={onCreateAction} />}
                    </div>
                </div>
            </div>
            <div className="bg-neutral-700 rounded-b-md w-full pt-2 pb-2">
                <div className={`table w-full ${tableClass}`}>
                    <TableHead className={tableHeadClass} headers={headers} />
                    <TableRows data={data} />
                </div>
            </div>
        </Flex>
    );
};

export default Table;