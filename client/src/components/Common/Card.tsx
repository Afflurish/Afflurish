import React, { PropsWithChildren } from 'react';
import { Card as FlowbiteCard } from 'flowbite-react';

export interface CardProps {
    horizontal?: boolean;
    href?: string;
    imgAlt?: string;
    imgSrc?: string;
    className?: string
};

function Card({ className, horizontal, href, imgAlt, imgSrc, children }: PropsWithChildren<CardProps>) {
    return(
        <FlowbiteCard 
            className={`${className}`}
            horizontal={horizontal}
            href={href}
            imgAlt={imgAlt}
            imgSrc={imgSrc}
            theme={{ 
                root: { 
                    base: "bg-neutral-700 h-full rounded-lg" 
                } 
            }}
        >
            {children}
        </FlowbiteCard>
    );
};

export default Card;