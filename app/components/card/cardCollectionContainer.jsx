import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../modules/tilesActions';
import Search from '../search/search.jsx';
import CardCollection from './cardCollection.jsx';

class CardCollectionContainer extends React.Component {
    componentDidMount() {
        this.props.dispatchLoadTiles();
    }
    render() {
        return (
            <div>
                <Search/>
                <CardCollection tilesData={this.props.tilesData}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchLoadTiles() {
            dispatch(actions.loadTiles());
        },
    };
};

CardCollectionContainer.propTypes = {
    tilesData: PropTypes.object,
    dispatchLoadTiles: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardCollectionContainer);
