import Link from 'next/link';
import Button from '../Button';

function GoToDashboardButton() {
    return(
        <Link href="/dashboard">
            <Button color="gradient">
                Go To Dashboard
            </Button>
        </Link>
    );
};

export default GoToDashboardButton;