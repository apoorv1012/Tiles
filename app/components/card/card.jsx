import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = (props) => (
    <div className="card col-sm-4">
        <img className="card-img-top" src={props.item.imagePath} alt="Movie Thumbnail"/>
        <div className="card-block">
            <h4 className="card-title">{props.item.text}</h4>
            <Link to={`/tiles/${props.item.id}`} className="btn btn-primary">Know More</Link>
        </div>
    </div>
);

Card.propTypes = {
    item: PropTypes.shape({
        imagePath: PropTypes.string,
        text: PropTypes.string,
        id: PropTypes.string,
    }),
};

export default Card;
