const reducer = (state = initialEntries, action) => {
    let newEntries;
    switch (action.type) {
        case 'CREATE_ENTRY':
            newEntries = state.concat({ ...action.payload });
            return newEntries;
        case 'REMOVE_ENTRY':
            newEntries = state.filter((entry) => entry.id !== action.payload.id);
            return newEntries;
        default:
            break;
    }
    return state;
};
export default reducer;

var initialEntries = [
    {
        id: 1,
        description: "Work income redux",
        value: 100.00,
        isExpense: false
    },
    {
        id: 2,
        description: "Water bill",
        value: 20.00,
        isExpense: true
    },
    {
        id: 3,
        description: "Rent redux",
        value: 300.00,
        isExpense: true
    },
    {
        id: 4,
        description: "Power bill",
        value: 50.00,
        isExpense: true
    }
]