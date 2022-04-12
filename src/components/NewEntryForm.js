import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { createEntryRedux } from '../actions/entries.actions'
import ButtonSaveCancel from './ButtonSaveCancel';
import EntryForm from './EntryForm';
import { v4 as uuidv4 } from 'uuid'

function NewEntryForm() {
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [isExpense, setIsExpense] = useState(true);
    const dispatch = useDispatch();
    function createEntry() {
        dispatch(
            createEntryRedux({
                id: uuidv4(),
                description,
                value,
                isExpense
            })
        );
        setDescription('');
        setValue('');
        setIsExpense(true);
    }

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