import React from 'react';
import { useFormik } from 'formik';
import { Flex, Box } from 'reflexbox';
import { faDollarSign, faTag } from '@fortawesome/free-solid-svg-icons';

import type { FormikHelpers } from 'formik';

import { TextInput, Button } from '../Common';

export interface IncomeFormValues {
    amount: string,
    label: string
};

export type IncomeFormHelpers = FormikHelpers<IncomeFormValues>;

export interface IncomeFormProps {
    onSubmit: (values: IncomeFormValues, helpers: IncomeFormHelpers) => void
};

function IncomeForm({ onSubmit }: IncomeFormProps) {

    const {
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        isSubmitting,
        values,
        errors
    } = useFormik({
        initialValues: {
            amount: "",
            label: ""
        },
        onSubmit
    });

    const handleAmountChange = (e: React.ChangeEvent<any>) => {

        const amount = e.currentTarget.value.replace(/,/gi, "");
        const parsedValue = parseInt(amount, 10);
        const adjustedValue = Number.isNaN(parsedValue) ? amount : parsedValue.toLocaleString();

        return setFieldValue("amount", adjustedValue);
    };

    return(
        <Flex justifyContent="center">
            <form className="w-full" onSubmit={handleSubmit}>
                <Flex className="gap-4">
                    <Box className="my-3">
                        <TextInput
                            id="label"
                            label="Label"
                            type="text"
                            icon={faTag}
                            placeholder="Work"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.label}
                            errorMessage={errors.label}
                            required={true}
                        />                            
                    </Box>
                    <Box className="my-3">
                        <TextInput
                            id="amount"
                            label="Income Per Month"
                            type="text"
                            icon={faDollarSign}
                            placeholder="0"
                            onChange={handleAmountChange}
                            onBlur={handleBlur}
                            value={values.amount}
                            errorMessage={errors.amount}
                            required={true}
                        />
                    </Box>
                    <Box className="mt-10 pt-5">
                        <Button type="submit" className="w-24" color="gradient" disabled={isSubmitting} loading={isSubmitting}>
                            Add
                        </Button>
                    </Box>
                </Flex>
            </form>
        </Flex>
    );
};

export default IncomeForm;