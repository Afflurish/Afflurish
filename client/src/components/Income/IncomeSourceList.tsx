import { Flex, Box } from 'reflexbox'; 

import { Table } from '../Common';
import type { IncomeSource } from '../../api/budget/incomeSources';
import type { ApiPaginatedResponse, ApiResponse } from '../../types/api';

import { dates } from '../../utils';

export interface IncomeSourceListProps {
    incomeSources?: ApiPaginatedResponse<IncomeSource>,
    incomeTotal?: number
};

function IncomeSourceList({ incomeSources, incomeTotal }: IncomeSourceListProps) {

    const parseTableData = () => {
        if(!incomeSources) {
            return [];
        }

        return incomeSources.results.map((source, i) => {
            const index = i + 1;
            const label = source.label;
            const amount = "$ " + source.amount.toLocaleString();
            const createdAt = dates.format(source.created_at, {
                dateFormat: "MMM Do, YYYY"
            }).date;
            return [index, label, amount, createdAt];
        });
    };

    return(
        <Flex>
            <Box className="w-full">
                <Table
                    title={`Total: $${incomeTotal ? incomeTotal.toLocaleString() : 0}`}
                    subtitle={`List of all Income Sources`}
                    headers={[
                        "#", "Label", "Amount", "Added On"
                    ]}
                    data={parseTableData()} 
                />
            </Box>
        </Flex>
    );
};

export default IncomeSourceList;