import React from 'react';
import { Form, Segment, Checkbox } from 'semantic-ui-react';
import ButtonSaveCancel from './ButtonSaveCancel';
import { useState } from 'react';

function NewEntryForm({ createEntry }) {

    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [isExpense, setIsExpense] = useState(true);
    return (
        <Form unstackable>
            <Form.Group>
                <Form.Input
                    icon="tags"
                    width={12}
                    label="Description"
                    placholder="New shinny thing"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <Form.Input
                    icon="dollar"
                    width={4}
                    label="Value"
                    placholder="100.00"
                    iconPosition="left"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
            </Form.Group>
            <Segment compact>
                <Checkbox
                    toggle
                    lable="is expense"
                    checked={isExpense}
                    onChange={() => setIsExpense(oldState => !oldState)}
                />
            </Segment>
            <ButtonSaveCancel
                createEntry={createEntry}
                description={description}
                value={value}
                isExpense={isExpense}
            />
        </Form>
    );
} export default NewEntryForm;