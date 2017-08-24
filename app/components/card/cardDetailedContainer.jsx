import React from 'react';
import { connect } from 'react-redux';
import { bindHandlers } from 'react-bind-handlers';
import PropTypes from 'prop-types';
import * as actions from '../../modules/tilesActions';
import CardDetailed from './cardDetailed.jsx';

class CardDetailedContainer extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.dispatchLoadDetailedTile(id);
    }
    handleEditCard() {
        this.props.dispatchModalChange(!this.props.editPopUpOpen);
    }
    render() {
        return (
            <CardDetailed tileData={this.props.detailedTileData} onHandleEditCard={this.handleEditCard}
                modalStatus={this.props.editPopUpOpen}
            />
        );
    }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchLoadDetailedTile(id) {
            dispatch(actions.loadDetailedTile(id));
        },
        dispatchModalChange(modalStatus) {
            dispatch(actions.changeModalStatus(modalStatus));
        },
    };
};

CardDetailedContainer.propTypes = {
    match: PropTypes.object,
    dispatchLoadDetailedTile: PropTypes.func,
    dispatchModalChange: PropTypes.func,
    detailedTileData: PropTypes.object,
    editPopUpOpen: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(bindHandlers(CardDetailedContainer));
