import React, { PropsWithChildren } from 'react';

export type ColSpan = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "full";
export type ColStart = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "auto";
export type ColEnd = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "auto";

export interface ColProps {
    span?: ColSpan,
    start?: ColStart,
    end?: ColEnd,
    className?: string
};

function Col({ className="", span, start, end, children }: PropsWithChildren<ColProps>): JSX.Element {

    const spanClass = {
        "1": "col-span-1",
        "2": "col-span-2",
        "3": "col-span-3",
        "4": "col-span-4",
        "5": "col-span-5",
        "6": "col-span-6",
        "7": "col-span-7",
        "8": "col-span-8",
        "9": "col-span-9",
        "10": "col-span-10",
        "11": "col-span-11",
        "12": "col-span-12",
        "full": "col-span-full"
    };

    const startClass = {
        "1": "col-start-1",
        "2": "col-start-2",
        "3": "col-start-3",
        "4": "col-start-4",
        "5": "col-start-5",
        "6": "col-start-6",
        "7": "col-start-7",
        "8": "col-start-8",
        "9": "col-start-9",
        "10": "col-start-10",
        "11": "col-start-11",
        "12": "col-start-12",
        "auto": "col-start-auto"
    };

    const endClass = {
        "1": "col-end-1",
        "2": "col-end-2",
        "3": "col-end-3",
        "4": "col-end-4",
        "5": "col-end-5",
        "6": "col-end-6",
        "7": "col-end-7",
        "8": "col-end-8",
        "9": "col-end-9",
        "10": "col-end-10",
        "11": "col-end-11",
        "12": "col-end-12",
        "auto": "col-end-auto"
    };

    const getClass = (): string => {
        if(span) 
            return spanClass[span];
        else if(start) 
            return startClass[start];
        else if(end) 
            return endClass[end];
        else 
            return "col-auto";
    };

    return(
        <div className={`${getClass()} ${className}`}>
            {children}
        </div>
    );
};

export default Col;