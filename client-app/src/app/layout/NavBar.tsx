import { observer } from "mobx-react-lite";
import { Link, NavLink } from "react-router-dom";
import { Button, Container, Dropdown, Image, Menu } from "semantic-ui-react";
import { useStore } from "../stores/store";



export default observer(function NavBar() {
    const { userStore: { user, logout } } = useStore();
    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item as={NavLink} to='/' header>
                    <img src="/assets/logo.png" alt="Logo" style={{ marginRight: 10 }} />
                    Reactivities
                </Menu.Item>
                <Menu.Item as={NavLink} to='/activities' name="Activity"></Menu.Item>
                <Menu.Item as={NavLink} to='/errors' name="Error"></Menu.Item>
                <Menu.Item>
                    <Button as={NavLink} to='createActivity' positive content='Create Activity'></Button>
                </Menu.Item>
                <Menu.Item position="right">
                    <Image src={user?.image || 'assets/user.png'} avatar spaced="right" />
                    <Dropdown pointing="top left" text={user?.displayName}>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to={`/profile/${user?.username}`} text="My Profile"></Dropdown.Item>
                            <Dropdown.Item onClick={logout} text="Logout" icon="power"></Dropdown.Item>
                        </Dropdown.Menu>


                    </Dropdown>
                </Menu.Item>
            </Container>
        </Menu>
    )
})