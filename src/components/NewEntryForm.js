import React from 'react';
import { Form } from 'semantic-ui-react';
import ButtonSaveCancel from './ButtonSaveCancel';
import EntryForm from './EntryForm';

function NewEntryForm({ 
    createEntry,
    description, 
    value, 
    isExpense, 
    setDescription, 
    setValue, 
    setIsExpense }) {
    return (
        <Form unstackable>
            <EntryForm
                description={description}
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