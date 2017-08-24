import 'babel-polyfill';
import { call, put, takeEvery } from 'redux-saga/effects';
import _ from 'lodash';
import FetchApi from '../api/fetchApi';
import * as actionTypes from '../modules/tilesActionTypes';
import { searchSelector } from '../selectors/searchSelector';

export function* loadTiles() {
    try {
        const tilesData = yield call(FetchApi.getData, '/tiles');
        yield put({type: actionTypes.LOADED_TILES, tilesData});
    } catch(err) {
        console.log("Error is: " + err);
    }
}

export function* loadDetailedTile(action) {
    try {
        const tileData = yield call(FetchApi.getData, `/tiles/get/${action.id}`);
        yield put({type: actionTypes.LOADED_DETAILED_TILE, tileData});
    } catch(err) {
        console.log("Error is: " + err);
    }
}

export function* searchTiles(action) {
    try {
        const tilesData = yield call(FetchApi.getData, `/tiles/search/get/${action.searchTerm}`);
        const searchDetails = {
            'tilesData': tilesData,
            'searchTerm': action.searchTerm
        };
        const newTilesData = searchSelector(searchDetails);
        yield put({type: actionTypes.LOADED_TILES, tilesData: newTilesData});
    } catch(err) {
        console.log("Error is: " + err);
    }
}

export function* saveDetailedTile(action) {
    try {
        const formData = action.formData;
        yield call(FetchApi.putData, `/tiles/put/${formData.id}`, formData);
    } catch(err) {
        console.log("Error is: " + err);
    }
}

export function* watchTilesSaga() {
    yield takeEvery(actionTypes.LOAD_TILES, loadTiles);
    yield takeEvery(actionTypes.LOAD_DETAILED_TILE, loadDetailedTile);
    yield takeEvery(actionTypes.SEARCH_TILES, searchTiles);
    yield takeEvery(actionTypes.SAVE_DETAILED_TILE, saveDetailedTile);
}