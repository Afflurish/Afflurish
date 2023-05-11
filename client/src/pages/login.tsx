import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Flex, Box } from 'reflexbox';
import { AnimatePresence, motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

/* Redux */
import { store } from '../store';
import { authActions } from '../store/actions';

import type { LoginFormValues, LoginFormHelpers } from '../components/Forms/LoginForm';

import { LoginForm } from '../components/Forms';
import { Card, LottieLoading, SuccessAlert } from '../components/Common';

import * as api from '../api';

function Login() {

    const router = useRouter();

    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [hasSignedUp, setHasSignedUp] = useState(false);

    useEffect(() => {
        if(!hasSignedUp && router.query.signup === "true") {
            setHasSignedUp(true);
        }
    }, [router, hasSignedUp]);

    const onSubmit = async (values: LoginFormValues, helpers: LoginFormHelpers) => {
        const [res, err] = await api.auth.login(values.email, values.password);
        helpers.setSubmitting(false);

        if(err || !res) {
            if(err) {
                helpers.setFieldError("email", err.response?.data.message);
            }
            return;
        }

        setIsLoggingIn(true);
        store.dispatch(authActions.setAuthUser(res));
        router.push("/dashboard");  
    };

    const renderForm = () => {
        return(
            <motion.div key="login-form" initial={{ y: "-100vh", opacity: 1 }} animate={{ y: 0 }} exit={{ y: 0, opacity: 0 }} transition={{ duration: 1 }}>
            <Card>
                <div className="flex flex-col justify-center content-center">
                    <FontAwesomeIcon className="text-8xl" icon={faUserCircle} />
                    <h1 className="text-3xl text-center mb-8 mt-4">Login</h1>
                    {
                        hasSignedUp && <SuccessAlert className="mb-4" text="Account created successfully!" />
                    }
                    <LoginForm onSubmit={onSubmit} />
                </div>
            </Card>
            </motion.div>
        );
    };

    return(
        <React.Fragment>
        <Head>
            <title>Login</title>
        </Head>
        <Flex className="h-4/5" justifyContent="center" alignItems="center">
            <Box className="w-1/4">
                <AnimatePresence mode="wait">
                    {
                        isLoggingIn ? 
                        <LottieLoading animationKey="login-loading" height={400} width={400} /> : 
                        renderForm()
                    }
                </AnimatePresence>
            </Box>
        </Flex>
        </React.Fragment>
    );
};

export default Login;