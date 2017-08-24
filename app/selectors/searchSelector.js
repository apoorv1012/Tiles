import { createSelector } from 'reselect';
import _ from 'lodash';

const filterTiles = (searchDetails) => {
    const searchTerm = searchDetails.searchTerm;
    const tilesData = searchDetails.tilesData;
    let filteredTiles = {};
    for (let item in tilesData) {
        let itemValue = tilesData[item];
        if (itemValue.text.toLowerCase().indexOf(searchTerm) > -1 ||
            itemValue.releaseYear.toLowerCase().indexOf(searchTerm) > -1 ||
            itemValue.description.toLowerCase().indexOf(searchTerm) > -1 ||
            itemValue.cast.toLowerCase().indexOf(searchTerm) > -1 ||
            itemValue.direction.toLowerCase().indexOf(searchTerm) > -1 ||
            itemValue.genre.toLowerCase().indexOf(searchTerm) > -1) {
                const addItem = {};
                addItem[item] = itemValue;
                _.defaults(filteredTiles, addItem);
        }
    }
    return filteredTiles;
}

export const searchSelector = createSelector(
    filterTiles,
    (filteredTiles) => filteredTiles
);
