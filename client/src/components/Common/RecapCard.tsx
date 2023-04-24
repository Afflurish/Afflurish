import { Flex, Box } from 'reflexbox';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface RecapCard {
    title: string,
    data: string | number
};

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function RecapCard({ title, data }: RecapCard) {

    const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const options = {
        responsive: true,
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                },
                border: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        },
    };

    const fakeData = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                borderColor: 'green',
                backgroundColor: 'green', 
            }
        ],
    };

    return(
        <Card className="flex min-w-full">
            <Flex className="">
                <Box flex="auto" justifyContent="flex-start" className="pr-10">
                    <h1 className="font-semibold">{title}</h1>
                </Box>
                <Box flex="auto" justifyContent="flex-end" className="text-right text-neutral-400 pl-10">
                    <h1>January 7, 2023</h1>
                </Box>
            </Flex>
            <Flex alignItems="center" alignContent="center">
                <Box flex={1}>
                    <h1 className="text-2xl font-bold">${data}</h1>
                </Box>
                <Box flex={1}>
                    <div className="h-14 w-36 float-right">
                    <Line options={options} data={fakeData} />
                    </div>
                </Box>
            </Flex>
            <Flex>
                <Box>
                    <FontAwesomeIcon icon="arrow-trend-up" className="text-green-600 mr-2" />
                </Box>
                <Box>
                    <h1 className="text-green-600 mr-2">2.5%</h1>
                </Box>
                <Box>
                    <h1 className="text-neutral-400">+1.2k this week</h1>
                </Box>
            </Flex>
        </Card>
    );
};

export default RecapCard;