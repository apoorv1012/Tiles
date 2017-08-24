import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import ModalContainer from '../modal/modalContainer.jsx';
import LoaderComponent from '../loaderComponent.jsx';

const CardDetailed = (props) => (
    <div>
        { _.isEmpty(props.tileData) ?
            <LoaderComponent/> :
            <div>
                <div className="card full">
                    <img className="card-img-top" src={props.tileData.imagePath} alt="Movie Thumbnail"/>
                    <div className="card-block">
                        <span className="card-edit" onClick={props.onHandleEditCard}><i className="glyphicon glyphicon-pencil"></i></span>
                        <h4 className="card-title">{props.tileData.text}</h4>
                        <p className="card-year">{props.tileData.releaseYear}</p>
                        <p className="card-genre">{props.tileData.genre}</p>
                        <p className="card-description">{props.tileData.description}</p>
                        <p className="card-cast"><strong>Cast: </strong>{props.tileData.cast}</p>
                        <p className="card-direction"><strong>Direction: </strong>{props.tileData.direction}</p>
                    </div>
                </div>
                <ModalContainer modalOpen={props.modalStatus} modalContent={props.tileData}/>
            </div>
        }
    </div>
);

CardDetailed.propTypes = {
    onHandleEditCard: PropTypes.func,
    modalStatus: PropTypes.bool,
    tileData: PropTypes.shape({
        imagePath: PropTypes.string,
        text: PropTypes.string,
        releaseYear: PropTypes.string,
        genre: PropTypes.string,
        description: PropTypes.string,
        cast: PropTypes.string,
        direction: PropTypes.string,
    }),
};

export default CardDetailed;
