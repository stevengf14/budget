import React from 'react';
import { Button } from 'semantic-ui-react';

function ButtonSaveCancel() {
    return (
        <Button.Group style={{ marginTop: 20 }}>
            <Button>Cancel</Button>
            <Button.Or />
            <Button primary>Ok</Button>
        </Button.Group>
    );
} export default ButtonSaveCancel;