import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import type { IncomeFormValues, IncomeFormHelpers } from '../Forms/IncomeForm';

/* Redux */
import { store } from '../../store';
import type { AuthState } from '../../store/authSlice';

import { IncomeForm } from '../Forms';
import { Button } from '../Common';

import * as api from '../../api';
import { useToggle } from '../../hooks';

export interface IncomeSourceProps {
    getIncomeSources: (page?: number) => void
};

function AddIncomeSource({ getIncomeSources }: IncomeSourceProps) {

    const auth = store.getState().auth as AuthState;
    const [displayForm, toggleDisplayForm] = useToggle();

    const onSubmit = async (values: IncomeFormValues, helpers: IncomeFormHelpers) => {
        const { label, amount } = values;
        const parsedAmount = parseInt(amount.replace(/,/gi, ""), 10);
        
        if(Number.isNaN(parsedAmount)) {
            helpers.setSubmitting(false);
            return helpers.setFieldError("amount", "Invalid Number");
        }

        const [res, err] = await api.incomeSources.create(auth, { 
            label, 
            amount: parsedAmount 
        });
        helpers.setSubmitting(false);

        if(err || !res) {
            return;
        }

        getIncomeSources();
    };

    const renderForm = () => {
        return(
            <motion.div 
                key="incomeSource-form"
                initial={{ opacity: 0, y: "-2vh" }}
                animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                        type: "spring",
                        damping: 10,
                        mass: 0.75,
                        stiffness: 100,
                    }
                }}
                exit={{ opacity: 0, y: "-2vh" }}
            >
                <IncomeForm onSubmit={onSubmit} />
            </motion.div>
        );
    };

    return(
        <div>
            <Button className="mb-5" color="secondary" onClick={() => toggleDisplayForm()}>
                {displayForm ? "Close" : "Add Income Source"}
            </Button>
            <AnimatePresence key="addIncomeSource-ap" mode="wait">
                {displayForm && renderForm()}
            </AnimatePresence>
        </div>
    );
};

export default AddIncomeSource;