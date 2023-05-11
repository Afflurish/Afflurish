import { Alert } from 'flowbite-react';
import type { AlertProps } from 'flowbite-react';

export interface SuccessAlertProps extends AlertProps {
    text: string,
    textClassName?: string
};

function SuccessAlert({ className="", text, textClassName="", ...rest }: SuccessAlertProps) {
    return(
        <Alert className={`${className}`} color="success" {...rest}>
            <span className={` ${textClassName}`}>
                {text}
            </span>
        </Alert>
    );
};

export default SuccessAlert;