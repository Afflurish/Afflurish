import Link from 'next/link';
import { Button } from 'flowbite-react';

function GoToDashboardButton() {
    return(
        <Link href="/dashboard">
            <Button gradientDuoTone="greenToBlue" size="sm">
                Go To Dashboard
            </Button>
        </Link>
    );
};

export default GoToDashboardButton;