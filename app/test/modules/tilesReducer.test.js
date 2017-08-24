import tilesReducer from '../../modules/tilesReducer';
import * as actionTypes from '../../modules/tilesActionTypes';

describe('tiles reducer', () => {

    const initialState = {
                            staticContent: {},
                            tilesData: {},
                            detailedTileData: {},
                            editPopUpOpen: false,
                         };

    it('should return the initial state', () => {
        expect(tilesReducer(undefined, {})).toEqual(initialState);
    });

    it('should return the modified state after loading the tiles', () => {
        const action = {
            type: actionTypes.LOADED_TILES,
            tilesData: {
                "tile1": {
                    "text": "Titanic",
                    "imagePath": "/images/image1.jpg",
                    "id": "t1"
                },
                "tile2": {
                    "text": "Jurassic Park",
                    "imagePath": "/images/image2.jpg",
                    "id": "t2"
                }
            }
        };

        const finalState = {
            staticContent: {},
            tilesData: {
                "tile1": {
                    "text": "Titanic",
                    "imagePath": "/images/image1.jpg",
                    "id": "t1"
                },
                "tile2": {
                    "text": "Jurassic Park",
                    "imagePath": "/images/image2.jpg",
                    "id": "t2"
                }
            },
            detailedTileData: {},
            editPopUpOpen: false,
        };

        expect(tilesReducer(initialState, action)).toEqual(finalState);
    });

    it('should return the modified state after loading the detailed tile', () => {
        const action = {
            type: actionTypes.LOADED_DETAILED_TILE,
            tileData: {
                "text": "The Dark Knight",
                "imagePath": "/images/image5.jpg",
                "releaseYear": "2008",
                "description": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
                "cast": "Christian Bale, Heath Ledger, Aaron Eckhart",
                "direction": "Christopher Nolan",
                "genre": "Action, Crime, Drama",
                "id": "t5"
            }
        };

        const finalState = {
            staticContent: {},
            tilesData: {},
            detailedTileData: {
                "text": "The Dark Knight",
                "imagePath": "/images/image5.jpg",
                "releaseYear": "2008",
                "description": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
                "cast": "Christian Bale, Heath Ledger, Aaron Eckhart",
                "direction": "Christopher Nolan",
                "genre": "Action, Crime, Drama",
                "id": "t5"
            },
            editPopUpOpen: false,
        };

        expect(tilesReducer(initialState, action)).toEqual(finalState);
    });

    it('should change the modal status in the state', () => {
        const action = {
            type: actionTypes.CHANGE_MODAL_STATUS,
            modalStatus: true,
        };

        const finalState = {
            staticContent: {},
            tilesData: {},
            detailedTileData: {},
            editPopUpOpen: true,
        };

        expect(tilesReducer(initialState, action)).toEqual(finalState);
    });
});