import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
    type: "text" | "email" | "password" | "number" | "url" | "tel",
    icon?: IconProp,
    iconRight?: boolean,
    iconClassName?: string,
    errorMessage?: string
};

function TextInput({ id="", className="", type, icon, iconRight, iconClassName="", errorMessage, ...rest }: TextInputProps) {

    const baseInputClassName = `
        block w-full border 
        disabled:cursor-not-allowed 
        disabled:opacity-50 
        bg-neutral-800 
        ${errorMessage ? "border-red-500" : "border-neutral-600"} 
        text-white 
        rounded-lg 
        p-2.5
        text-sm
        ${(icon && !iconRight) && "pl-10"} 
    `;

    const focusInputClassName = `
        focus:border-blue-500 
        focus:ring-blue-500 
    `;

    const renderIcon = (faIcon: IconProp) => {
        const baseIconClassName = `
            pointer-events-none absolute flex items-center p-3
            ${iconRight ? "inset-y-0 right-0 pr-3" : "inset-y-0 left-0 pl-3"}
        `;

        return(
            <div className={`${baseIconClassName}`}>
                <FontAwesomeIcon className={`${iconClassName}`} icon={faIcon} />
            </div>
        );
    };

    const renderErrorMessage = () => {
        return(
            <p className="text-red-500 text-sm">{errorMessage}</p>
        );
    };

    return(
        <React.Fragment>
            <div className="relative w-full">
                {icon && renderIcon(icon)}
                <input
                    id={id}
                    className={`${baseInputClassName} ${focusInputClassName} ${className}`}
                    type={type}
                    {...rest}
                />
            </div>
            {errorMessage && renderErrorMessage()}
        </React.Fragment>
    );
};

export default TextInput;;