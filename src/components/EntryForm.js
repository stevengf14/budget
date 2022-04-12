import { React, Fragment } from "react";
import { Form, Segment, Checkbox } from 'semantic-ui-react';

function EntryForm({
    description, value, isExpense, setDescription, setValue, setIsExpense
}) {
    return (
        <Fragment>
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
        </Fragment>
    );
} export default EntryForm;