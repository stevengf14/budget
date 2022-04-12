export const createEntryRedux = (payload) => {
    return { type: 'CREATE_ENTRY', payload }
}

export const removeEntryRedux = (id) => {
    return { type: 'REMOVE_ENTRY', payload: { id } }
}