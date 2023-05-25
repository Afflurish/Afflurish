import React, { PropsWithChildren } from 'react';
import { Card as FlowbiteCard } from 'flowbite-react';

/* Redux */
import { store } from '../../store';

export interface CardProps {
    horizontal?: boolean;
    href?: string;
    imgAlt?: string;
    imgSrc?: string;
    className?: string
};

function Card({ className, horizontal, href, imgAlt, imgSrc, children }: PropsWithChildren<CardProps>) {
    
    const theme = store.getState().theme;

    return(
        <FlowbiteCard 
            className={`${className}`}
            horizontal={horizontal}
            href={href}
            imgAlt={imgAlt}
            imgSrc={imgSrc}
            theme={{ 
                root: { 
                    base: theme.tailwind.card + ` h-full rounded-lg` 
                } 
            }}
        >
            {children}
        </FlowbiteCard>
    );
};

export default Card;