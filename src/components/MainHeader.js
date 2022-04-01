import React from 'react'
import { Header } from 'semantic-ui-react'

function MainHeader({ title, type }) {
    return (
        <Header as={type} textAlign='center'>
            {title}
        </Header>
    );
} export default MainHeader;