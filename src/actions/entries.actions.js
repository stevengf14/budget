const types = {
    CREATE_ENTRY: 'CREATE_ENTRY',
    REMOVE_ENTRY: 'REMOVE_ENTRY',
    UPDATE_ENTRY: 'UPDATE_ENTRY'
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