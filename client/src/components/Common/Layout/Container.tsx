import React, { PropsWithChildren } from 'react';

export type ContainerCols = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "none";
export type ContainerRows = "1" | "2" | "3" | "4" | "5" | "6" | "none";
export type ContainerAutoCols = "auto" | "min" | "max" | "fr";
export type ContainerAutoRows = "auto" | "min" | "max" | "fr";
export type ContainerAutoFlow = "row" | "col" | "dense" | "row-dense" | "col-dense";

export interface ContainerProps {
    rows?: ContainerRows,
    cols?: ContainerCols,
    autoCols?: ContainerAutoCols,
    autoRows?: ContainerAutoRows,
    flow?: ContainerAutoFlow,
    fluid?: boolean;
    className?: string
};

function Container({ className="", fluid, rows, cols, autoCols, autoRows, flow, children }: PropsWithChildren<ContainerProps>): JSX.Element {

    const colAmount = {
        "1": "grid-cols-1",
        "2": "grid-cols-2",
        "3": "grid-cols-3",
        "4": "grid-cols-4",
        "5": "grid-cols-5",
        "6": "grid-cols-6",
        "7": "grid-cols-7",
        "8": "grid-cols-8",
        "9": "grid-cols-9",
        "10": "grid-cols-10",
        "11": "grid-cols-11",
        "12": "grid-cols-12",
        "none": "grid-cols-none"
    };

    const rowAmount = {
        "1": "grid-rows-1",
        "2": "grid-rows-2",
        "3": "grid-rows-3",
        "4": "grid-rows-4",
        "5": "grid-rows-5",
        "6": "grid-rows-6",
        "none": "grid-rows-none"
    };

    const autoColClass = {
        "auto": "auto-cols-auto",
        "min": "auto-cols-min",
        "max": "auto-cols-max",
        "fr": "auto-cols-fr",
    };

    const autoRowClass = {
        "auto": "auto-rows-auto",
        "min": "auto-rows-min",
        "max": "auto-rows-max",
        "fr": "auto-rows-fr",
    };

    const flowClass = {
        "row": "grid-flow-row",
        "col": "grid-flow-col",
        "dense": "grid-flow-dense",
        "row-dense": "grid-flow-row-dense",
        "col-dense": "grid-flow-col-dense"
    };

    const getColClass = (): string => {
        return cols ? colAmount[cols] : "";
    };

    const getRowClass = (): string => {
        return rows ? rowAmount[rows] : "";
    };

    const getAutoClass = (): string => {
        if(autoCols)
            return autoColClass[autoCols];
        else if(autoRows)
            return autoRowClass[autoRows];
        else
            return "";
    };

    const getFlowClass = (): string => {
        return flow ? flowClass[flow] : "";
    };

    return(
        <div 
            className={`
                container 
                grid 
                ${getColClass()} 
                ${getRowClass()} 
                ${getAutoClass()} 
                ${getFlowClass()} 
                ${className} 
                ${fluid && "max-w-full"} 
            `}
        >
            {children}
        </div>
    );
};

export default Container;