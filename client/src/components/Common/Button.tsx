import React from 'react';
import { Spinner } from 'flowbite-react';
import { motion } from 'framer-motion';

/* Redux */
import { store } from '../../store';
import { MotionProps } from 'framer-motion';

export type ButtonSizes = "xs" | "sm" | "md" | "lg" | "xl";
export type PropExtenders = React.ButtonHTMLAttributes<HTMLButtonElement> & MotionProps;

export interface ButtonProps extends PropExtenders {
    color?: "primary" | "secondary" | "accent" | "gradient",
    size?: ButtonSizes,
    spinnerSize?: ButtonSizes,
    outlined?: boolean,
    loading?: boolean
};

function Button({ color="primary", size="md", outlined, loading, children, className="", ...rest }: ButtonProps) {

    const theme = store.getState().theme;

    const renderSpinner = () => (
        <Spinner size={size} />
    );

    const colorStyles = {
        "primary": outlined ? theme.tailwind.outlinedButtonPrimary : theme.tailwind.buttonPrimary,
        "secondary": outlined ? theme.tailwind.outlinedButtonSecondary : theme.tailwind.buttonSecondary,
        "accent": outlined ? theme.tailwind.outlinedAccentButton : theme.tailwind.accentButton,
        "gradient": outlined ? theme.tailwind.outlinedButtonGradient : theme.tailwind.buttonGradient
    };

    const sizeStyles = {
        "xs": "w-14 py-1 text-xs",
        "sm": "py-1 text-xs",
        "md": "px-4 py-1.5 text-sm",
        "lg": "px-6 py-2.5 text-md",
        "xl": "px-5 py-2.5 text-lg"
    };

    const buttonClassNames = `
        ${colorStyles[color]}
        rounded p-0.5 items-center justify-center 
        border-0 flex h-min text-center
        ${className}
    `;

    const spanClassNames = `
        ${sizeStyles[size]}
        w-full rounded border border-transparent 
        flex items-center justify-center z-10 
        font-medium
        ${(color === "gradient" && outlined) && theme.tailwind.background}
    `;

    return(
        <motion.button
            className={buttonClassNames}
            whileHover={{
                y: "-.5vh"
            }}
            {...rest}
        >
            <span className={spanClassNames}>
                {loading ? renderSpinner() : children}
            </span>
        </motion.button>
    );
};

export default Button;