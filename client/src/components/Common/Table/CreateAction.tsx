import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface CreateActionProps {
    onCreate?: React.MouseEventHandler
};

function CreateAction({ onCreate }: CreateActionProps) {

    const hoverClass = `
        group-hover:cursor-pointer group-hover:text-green-500 group-hover:outline group-hover:outline-2 group-hover:outline-white group-hover:transition-all
    `;

    return(
        <div className="pl-2">
            <div className="group hover:bg-white rounded-full" onClick={onCreate}>
                <FontAwesomeIcon className={`text-2xl order-last rounded-full z-10 ${hoverClass}`} icon="circle-plus" />
            </div>
        </div>
    );
};

export default CreateAction;