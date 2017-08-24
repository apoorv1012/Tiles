import * as actions from '../../modules/tilesActions';
import * as actionTypes from '../../modules/tilesActionTypes';

describe('actions', () => {
    it('should create an action to load tiles', () => {
        const expectedAction = {
            type: actionTypes.LOAD_TILES,
        };
        expect(actions.loadTiles()).toEqual(expectedAction);
    });

    it('should create an action to load static content', () => {
        const expectedAction = {
            type: actionTypes.LOAD_STATIC_CONTENT,
        };
        expect(actions.loadStaticContent()).toEqual(expectedAction);
    });

    it('should create an action to load detailed tile', () => {
        const id='t2';
        const expectedAction = {
            type: actionTypes.LOAD_DETAILED_TILE,
            id,
        };
        expect(actions.loadDetailedTile(id)).toEqual(expectedAction);
    });

    it('should create an action to change modal status', () => {
        const modalStatus = true;
        const expectedAction = {
            type: actionTypes.CHANGE_MODAL_STATUS,
            modalStatus,
        };
        expect(actions.changeModalStatus(modalStatus)).toEqual(expectedAction);
    });

    it('should create an action for searching tiles', () => {
        const searchTerm = 'ince';
        const expectedAction = {
            type: actionTypes.SEARCH_TILES,
            searchTerm,
        };
        expect(actions.searchTiles(searchTerm)).toEqual(expectedAction);
    });

    it('should create an action to save form data', () => {
        const formData = {
            'releaseYear': '1990',
        };
        const expectedAction = {
            type: actionTypes.SAVE_DETAILED_TILE,
            formData,
        };
        expect(actions.saveFormData(formData)).toEqual(expectedAction);
    });
});