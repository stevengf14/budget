import React from 'react';
import { Form } from 'semantic-ui-react';
import ButtonSaveCancel from './ButtonSaveCancel';
import { useState } from 'react';
import EntryForm from './EntryForm';

function NewEntryForm({ createEntry }) {

    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [isExpense, setIsExpense] = useState(true);
    return (
        <Form unstackable>
            <EntryForm description={description}
                value={value}
                isExpense={isExpense}
                setDescription={setDescription}
                setValue={setValue}
                setIsExpense={setIsExpense}
            />
            <ButtonSaveCancel
                createEntry={createEntry}
                description={description}
                value={value}
                isExpense={isExpense}
            />
        </Form>
    );
} export default NewEntryForm;