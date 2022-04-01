import React from 'react';
import { Form } from 'semantic-ui-react';
import ButtonSaveCancel from './ButtonSaveCancel';

function NewEntryForm() {
    return (
        <Form unstackable>
            <Form.Group>
                <Form.Input
                    icon="tags"
                    width={12}
                    label="Description"
                    placholder="New shinny thing"
                />
                <Form.Input
                    icon="dollar"
                    width={4}
                    label="Value"
                    placholder="100.00"
                    iconPosition="left"
                />
            </Form.Group>
            <ButtonSaveCancel />
        </Form>
    );
} export default NewEntryForm;