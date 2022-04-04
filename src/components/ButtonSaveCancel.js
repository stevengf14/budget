import React from "react";
import { Button } from 'semantic-ui-react';

function ButtonSaveCancel({ createEntry, description, value, isExpense }) {
    return (
        <Button.Group style={{ marginTop: 20 }}>
            <Button>Cancel</Button>
            <Button.Or />
            <Button primary onClick={() => createEntry(description, value, isExpense)}>Ok</Button>
        </Button.Group>
    );
} export default ButtonSaveCancel;