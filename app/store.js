import { createStore, applyMiddleware } from 'redux';
import tilesReducer from './modules/tilesReducer';
import createSagaMiddleware from 'redux-saga';
import { watchTilesSaga } from './modules/watchTilesSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(tilesReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchTilesSaga);

export default store;
