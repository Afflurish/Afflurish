import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface Route {
    title: string,
    path: string,
    displayNav?: boolean,
    faIcon?: IconProp
};