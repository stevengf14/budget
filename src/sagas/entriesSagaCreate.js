import { call, put, takeLatest } from 'redux-saga/effects';
import entriesTypes from '../actions/entries.actions';
import axios from 'axios';


export function* createEntrySaga() {
    yield takeLatest(entriesTypes.CREATE_ENTRY, createEntryToDB);
}

function* createEntryToDB({ payload }) {
    yield call(createEntry, payload);
    yield call(createEntryDetails, payload);
    yield put({ type: entriesTypes.CREATE_ENTRY_RESULT, payload })
}

async function createEntry({ id, description }) {
    await axios.post('http://localhost:3001/entries', {
        id,
        description
    });
}

async function createEntryDetails({ id, isExpense, value }) {
    await axios.post('http://localhost:3001/values', {
        id,
        isExpense,
        value
    });
}