import * as actionTypes from './tilesActionTypes';

export function loadTiles() {
    return {
        type: actionTypes.LOAD_TILES,
    };
}

export function loadDetailedTile(id) {
    return {
        type: actionTypes.LOAD_DETAILED_TILE,
        id,
    };
}

export function changeModalStatus(modalStatus) {
    return {
        type: actionTypes.CHANGE_MODAL_STATUS,
        modalStatus,
    };
}

export function searchTiles(searchTerm) {
    return {
        type: actionTypes.SEARCH_TILES,
        searchTerm,
    };
}

export function saveFormData(formData) {
    return {
        type: actionTypes.SAVE_DETAILED_TILE,
        formData,
    };
}
