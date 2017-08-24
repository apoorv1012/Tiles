import { searchSelector } from '../../selectors/searchSelector.js';

describe('search selector', () => {
    it('should filter the items', () => {
        const searchDetails = {
            'tilesData': {
                "t1": {
                    "text": "Titanic",
                    "imagePath": "/images/image1.jpg",
                    "releaseYear": "1997",
                    "description": "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
                    "cast": "Leonardo DiCaprio, Kate Winslet, Billy Zane",
                    "direction": "James Cameron",
                    "genre": "Drama, Romance",
                    "id": "t1"
                },
                "t2": {
                    "text": "Jurassic Park",
                    "imagePath": "/images/image2.jpg",
                    "releaseYear": "1993",
                    "description": "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
                    "cast": "Sam Neill, Laura Dern, Jeff Goldblum",
                    "direction": "Steven Spielberg",
                    "genre": "Adventure, Sci-Fi, Thriller",
                    "id": "t2"
                },
                "t3": {
                    "text": "Inception",
                    "imagePath": "/images/image3.jpg",
                    "releaseYear": "2012",
                    "description": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
                    "cast": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
                    "direction": "Christopher Nolan",
                    "genre": "Action, Adventure, Sci-Fi..",
                    "id": "t3"
                }
            },
            'searchTerm': 'ince'
        };

        const expectedOutput = {
            "t3": {
                "text": "Inception",
                "imagePath": "/images/image3.jpg",
                "releaseYear": "2012",
                "description": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
                "cast": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
                "direction": "Christopher Nolan",
                "genre": "Action, Adventure, Sci-Fi..",
                "id": "t3"
            }
        };

        expect(searchSelector(searchDetails)).toEqual(expectedOutput);
    });
});