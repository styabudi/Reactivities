import React from "react";
import { Calendar } from "react-calendar";
import { Header, Menu } from "semantic-ui-react";

export default function ActivityFilters() {
    return (
        <>
            <Menu vertical size="large" style={{ width: '100%' }}>
                <Header icon={'filter'} attached color="teal" content="Filters"></Header>
                <Menu.Item content="All Activities"></Menu.Item>
                <Menu.Item content="I'm Going"></Menu.Item>
                <Menu.Item content="I'm Hosting"></Menu.Item>
            </Menu>
            <Calendar />
        </>
    )
}