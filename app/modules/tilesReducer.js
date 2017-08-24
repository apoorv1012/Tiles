import * as actionTypes from './tilesActionTypes';
import _ from 'lodash';

const DEFAULT_STATE = {
    staticContent: {},
    tilesData: {},
    detailedTileData: {},
    editPopUpOpen: false,
};

const loadedTiles = (state, action) =>
    _.defaults({
        tilesData: action.tilesData,
    }, state);

const loadedDetailedTile = (state, action) =>
    _.defaults({
        detailedTileData: action.tileData,
    }, state);

const changeModal = (state, action) =>
    _.defaults({
        editPopUpOpen: action.modalStatus,
    }, state);

export default function tilesReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case actionTypes.LOADED_TILES:
            return loadedTiles(state, action);

        case actionTypes.LOADED_DETAILED_TILE:
            return loadedDetailedTile(state, action);

        case actionTypes.CHANGE_MODAL_STATUS:
            return changeModal(state, action);

        default:
            return state;
    }
}
