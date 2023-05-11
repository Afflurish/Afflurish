import Link from 'next/link';
import { useFormik } from 'formik';
import { Flex } from 'reflexbox';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

import type { FormikHelpers } from 'formik';

import { TextInput, Button } from '../Common';

export interface LoginFormValues {
    email: string,
    password: string
};

export type LoginFormHelpers = FormikHelpers<LoginFormValues>;

export interface LoginFormProps {
    onSubmit: (values: LoginFormValues, helpers: LoginFormHelpers) => void
};

function LoginForm({ onSubmit }: LoginFormProps) {

    const { 
        handleChange, 
        handleBlur, 
        handleSubmit, 
        isSubmitting, 
        values,
        errors
    } = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit
    });

    return(
        <Flex justifyContent="center">
            <form className="w-full" onSubmit={handleSubmit}>
                <div className="my-3">
                    <TextInput
                        id="email"
                        type="email"
                        icon={faUser}
                        placeholder="Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        errorMessage={errors.email}
                        required={true}
                    />
                </div>
                <div className="mt-3 mb-2">
                    <TextInput
                        id="password"
                        type="password"
                        icon={faLock}
                        placeholder="Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        errorMessage={errors.password}
                        required={true}
                    />
                </div>
                <div className="flex justify-end">
                    <Link className="text-xs text-[#00ff3c]" href="forgot-password">
                        Forgot Password?
                    </Link>
                </div>
                <div className="mb-5 mt-10">
                    <Button type="submit" disabled={isSubmitting} loading={isSubmitting} gradientDuoTone="greenToBlue" className="w-full uppercase font-semibold">
                        Login
                    </Button>
                </div>
                <div className="text-sm text-center">
                    <p className="mb-1">Don{"'"}t have an account?</p>
                    <Link className="text-[#00ff3c]" href="/signup">
                        Sign up!
                    </Link>
                </div>
            </form>
        </Flex>
    );
};

export default LoginForm;