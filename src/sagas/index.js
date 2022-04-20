//import * as testSaga from './testSaga';
import * as entriesSaga from './entriesSaga';
import * as entriesSagaDeletion from './entriesSagaDeletion';
import * as entriesSagaCreate from './entriesSagaCreate';

export function initSagas(sagaMiddleware) {
    //Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
    Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
    Object.values(entriesSagaDeletion).forEach(sagaMiddleware.run.bind(sagaMiddleware));
    Object.values(entriesSagaCreate).forEach(sagaMiddleware.run.bind(sagaMiddleware));
} 