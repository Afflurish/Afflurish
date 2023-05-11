import { Button as FlowbiteButton, Spinner } from 'flowbite-react';
import { ButtonProps as FlowbiteButtonProps } from 'flowbite-react';

export interface ButtonProps extends FlowbiteButtonProps {
    loading?: boolean,
    spinnerSize?: "xs" | "sm" | "md" | "lg" | "xl"
};

function Button({ loading, children, size, ...rest }: ButtonProps) {

    const renderSpinner = () => (
        <Spinner size={size} />
    );

    return(
        <FlowbiteButton {...rest}>
            {loading ? renderSpinner() : children}
        </FlowbiteButton>
    );
};

export default Button;