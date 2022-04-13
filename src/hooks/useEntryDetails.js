import { v4 as uuidv4 } from 'uuid';
import { createEntryRedux, updateEntryRedux } from '../actions/entries.actions';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { closeEditModal } from '../actions/modals.actions';

function useEntryDetails(desc = "", val = "", isExp = true) {

    const [description, setDescription] = useState(desc);
    const [value, setValue] = useState(val);
    const [isExpense, setIsExpense] = useState(isExp);
    const dispatch = useDispatch();

    useEffect(() => {
        setDescription(desc);
        setValue(val);
        setIsExpense(isExp);
    }, [desc, val, isExp])

    function updateEntry(id) {
        dispatch(
            updateEntryRedux(
                id,
                {
                    id,
                    description,
                    value,
                    isExpense
                }
            )
        );
        dispatch(closeEditModal());
        resetValues();
    }

    function createEntry() {
        dispatch(
            createEntryRedux({
                id: uuidv4(),
                description,
                value,
                isExpense
            })
        );
        resetValues();
    }

    function resetValues() {
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
        createEntry,
        updateEntry
    }
} export default useEntryDetails;