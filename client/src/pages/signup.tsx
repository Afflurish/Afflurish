import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Flex, Box } from 'reflexbox';
import { AnimatePresence, motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

/* Redux */
import { store } from '../store';
import { authActions } from '../store/actions';

import type { SignupFormValues, SignupFormHelpers } from '../components/Forms/SignupForm';

import { SignupForm } from '../components/Forms';
import { Card, LottieLoading } from '../components/Common';

import * as api from '../api';

function Signup() {

    const { push } = useRouter();

    const [isSigningUp, setIsSigningUp] = useState(false);

    const onSubmit = async (values: SignupFormValues, helpers: SignupFormHelpers) => {
        const [res, err] = await api.auth.signup(values.email, values.password);
        helpers.setSubmitting(false);

        if(err || !res) {
            if(err) {
                helpers.setFieldError("email", err.response?.data.message);
            }
            return;
        }

        setIsSigningUp(true);
        push({
            pathname: "/login",
            query: {
                signup: true
            }
        });
    };

    const renderForm = () => {
        return(
            <motion.div key="login-form" initial={{ y: "-100vh", opacity: 1 }} animate={{ y: 0 }} exit={{ y: 0, opacity: 0 }} transition={{ duration: 1 }}>
            <Card>
                <div className="flex flex-col justify-center content-center">
                    <FontAwesomeIcon className="text-8xl" icon={faUserCircle} />
                    <h1 className="text-3xl text-center mb-8 mt-4">Sign Up</h1>
                    <SignupForm onSubmit={onSubmit} />
                </div>
            </Card>
            </motion.div>
        );
    };

    return(
        <React.Fragment>
        <Head>
            <title>Sign Up</title>
        </Head>
        <Flex className="h-4/5" justifyContent="center" alignItems="center">
            <Box className="w-1/4">
                

                {
                    isSigningUp ?
                    <LottieLoading animationKey="signup-loading" height={400} width={400} /> :
                    renderForm()
                }
            </Box>
        </Flex>
        </React.Fragment>
    );
};

export default Signup;