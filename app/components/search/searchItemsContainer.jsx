import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchItems from './searchItems.jsx';
import * as actions from '../../modules/tilesActions';

class SearchItemsContainer extends React.PureComponent {
    componentDidMount() {
        const searchTerm = (this.props.match.params.term).toLowerCase();
        this.props.dispatchSearchTiles(searchTerm);
    }
    render() {
        return (
            <SearchItems tilesData={this.props.tilesData}/>
        );
    }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchSearchTiles(searchTerm) {
            dispatch(actions.searchTiles(searchTerm));
        },
    };
};

SearchItemsContainer.propTypes = {
    match: PropTypes.object,
    tilesData: PropTypes.object,
    dispatchSearchTiles: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchItemsContainer);
