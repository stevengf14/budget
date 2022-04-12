import React from 'react';
import { Form } from 'semantic-ui-react';
import ButtonSaveCancel from './ButtonSaveCancel';
import EntryForm from './EntryForm';
import useEntryDetails from '../hooks/useEntryDetails';

function NewEntryForm() {

    const {
        description, 
        setDescription, 
        value, 
        setValue, 
        isExpense, 
        setIsExpense, 
        createEntry
    } = useEntryDetails();

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
            <ButtonSaveCancel createEntry={createEntry} />
        </Form>
    );
} export default NewEntryForm;