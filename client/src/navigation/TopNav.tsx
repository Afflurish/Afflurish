import { Navbar, Dropdown, Avatar } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TopNav() {
    return(
        <div className="w-full">
            <Navbar className="w-full first:bg-neutral-800">
            <Navbar.Brand />
            <div className="flex md:order-2">
                <div className="mr-5 text-xl my-auto text-neutral-800">
                    <FontAwesomeIcon icon="bell" />
                </div>
                <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>
                    }
                >
                <Dropdown.Header>
                    <span className="block text-sm">
                        Bonnie Green
                    </span>
                    <span className="block truncate text-sm font-medium">
                        name@flowbite.com
                    </span>
                </Dropdown.Header>
                <Dropdown.Item>
                    Settings
                </Dropdown.Item>
                <Dropdown.Item>
                    Earnings
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                    Sign out
                </Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            </Navbar>
        </div>
    );
};

export default TopNav;