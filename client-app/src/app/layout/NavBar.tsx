import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";



export default function NavBar() {
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
            </Container>
        </Menu>
    )
}