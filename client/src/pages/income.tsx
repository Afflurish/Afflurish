import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import { Flex, Box } from 'reflexbox';

import { Layout, PageHeader } from '../components/Common';
import { AddIncomeSource, IncomeSourceList } from '../components/Income';

/* Redux */
import { store } from '../store';
import { AuthState } from '../store/authSlice';

import * as api from '../api';
import type { IncomeSource } from '../api/budget/incomeSources';
import type { ApiPaginatedResponse, ApiResponse } from '../types/api';

function Income() {

    const auth = store.getState().auth as AuthState;
    const [incomeSources, setIncomeSources]: [ApiPaginatedResponse<IncomeSource> | undefined, Function] = useState(undefined);
    const [incomeTotal, setIncomeTotal]: [ApiResponse<{ total: number }> | undefined, Function] = useState(undefined);

    const getIncomeSources = async (page?: number) => {
        const [res, err] = await api.incomeSources.getByUserId(auth, {
            page: page
        });

        if(err || !res) {
            return;
        }

        setIncomeSources(res);
    };

    const getIncomeTotal = async () => {
        const [res, err] = await api.incomeSources.getTotalByUserId(auth);

        if(err || !res) {
            return;
        }

        setIncomeTotal(res.total);
    };

    const callback = useCallback(() => {
        getIncomeSources();
        getIncomeTotal();
    }, [getIncomeSources, getIncomeTotal]);

    useEffect(() => {
        callback();
    }, []);

    return(
        <Layout animationKey="income-page">
            <Head>
                <title>Income</title>
            </Head>
            <PageHeader
                title="Income"
                paths={[{
                    title: "Income",
                    path: "/income"
                }]}
            />
            <Flex flexDirection="column">
                <Box className="pb-5">
                    <AddIncomeSource getIncomeSources={getIncomeSources} />
                </Box>
                <Box className="w-full">
                    <IncomeSourceList incomeSources={incomeSources} incomeTotal={incomeTotal} />
                </Box>
            </Flex>
        </Layout>
    );
};

export default Income;