const types = {
    CREATE_ENTRY: 'CREATE_ENTRY',
    REMOVE_ENTRY: 'REMOVE_ENTRY',
    UPDATE_ENTRY: 'UPDATE_ENTRY',
    GET_ENTRIES: 'GET_ENTRIES',
    POPULATE_ENTRIES: 'POPULATE_ENTRIES',
    POPULATE_ENTRY_DETAILS: 'POPULATE_ENTRY_DETAILS',
    REMOVE_ENTRY_RESULT: 'REMOVE_ENTRY_RESULT',
    CREATE_ENTRY_RESULT: 'CREATE_ENTRY_RESULT'
};
export default types;

export const createEntryRedux = (payload) => {
    return { type: types.CREATE_ENTRY, payload }
}

export const removeEntryRedux = (id) => {
    return { type: types.REMOVE_ENTRY, payload: { id } }
}

export const updateEntryRedux = (id, entry) => {
    return { type: types.UPDATE_ENTRY, payload: { id, entry } }
}

export const getAllEntries = () => {
    return { type: types.GET_ENTRIES }
}

export const populateEntries = (entries) => {
    return { type: types.POPULATE_ENTRIES, payload: entries }
}

export const populateEntryDetails = (id, entry) => {
    return { type: types.POPULATE_ENTRY_DETAILS, payload: { id, entry } }
}