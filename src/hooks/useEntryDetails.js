import { v4 as uuidv4 } from 'uuid';
import { createEntryRedux } from '../actions/entries.actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function useEntryDetails() {
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
    return {
        description,
        setDescription,
        value,
        setValue,
        isExpense,
        setIsExpense,
        createEntry
    }
} export default useEntryDetails;