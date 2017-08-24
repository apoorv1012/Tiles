import sagaHelper from 'redux-saga-testing/main';
import { call, put } from 'redux-saga/effects';
import * as sagaMethods from '../../modules/watchTilesSaga';
import * as actionTypes from '../../modules/tilesActionTypes';
import FetchApi from '../../api/fetchApi';

describe('asyncActions:-load tiles method', () => {
    const it = sagaHelper(sagaMethods.loadTiles());
    const expectedAction = () => ({ type: actionTypes.LOADED_TILES, tilesData: undefined });
    it('should have called the api first', (result) => {
        expect(result).toEqual(call(FetchApi.getData, '/tiles'));
    });
    it('and then trigger an action', (result) => {
        expect(result).toEqual(put(expectedAction()));
    });
});

describe('asyncActions:-load detailed tile method', () => {
    const action = {
        'id': 't2'
    };
    const it = sagaHelper(sagaMethods.loadDetailedTile(action));
    const expectedAction = () => ({ type: actionTypes.LOADED_DETAILED_TILE, tileData: undefined });
    it('should have called the api first', (result) => {
        expect(result).toEqual(call(FetchApi.getData, '/tiles/get/t2'));
    });
    it('and then trigger an action', (result) => {
        expect(result).toEqual(put(expectedAction()));
    });
});

describe('asyncActions:-search tiles method', () => {
    const action = {
        'searchTerm': 'ince'
    };
    const it = sagaHelper(sagaMethods.searchTiles(action));
    const expectedAction = () => ({ type: actionTypes.LOADED_TILES, tilesData: {} });
    it('should have called the api first', (result) => {
        expect(result).toEqual(call(FetchApi.getData, '/tiles/search/get/ince'));
    });
    it('and then trigger an action with the transformed data from the API', (result) => {
        expect(result).toEqual(put(expectedAction()));
    });
});

describe('asyncActions:-save detailed tile', () => {
    const action = {
        'formData': {
            'releaseYear': '1995',
            'id': 't2',
        }
    };
    const it = sagaHelper(sagaMethods.saveDetailedTile(action));
    it('should have called the api first', (result) => {
        expect(result).toEqual(call(FetchApi.putData, '/tiles/put/t2', action.formData));
    });
});
