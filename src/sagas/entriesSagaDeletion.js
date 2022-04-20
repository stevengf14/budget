import { take, call, put, fork } from 'redux-saga/effects';
import entriesTypes, { populateEntries, populateEntryDetails } from '../actions/entries.actions';
import axios from 'axios';


export function* deleteEntrySaga() {
    while (true) {
        const { payload } = yield take(entriesTypes.REMOVE_ENTRY);
        yield call(deteleEntry, payload.id);
        yield put({ type: 'REMOVE_ENTRY_RESULT', payload: { id: payload.id } })
    }
}

async function deteleEntry(id) {
    axios.delete(`http://localhost:3001/entries/${id}`)
    axios.delete(`http://localhost:3001/values/${id}`)
    await new Promise((s) => setTimeout(s, 3000));
}