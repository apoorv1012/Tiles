import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { bindHandlers } from 'react-bind-handlers';
import Card from './card.jsx';
import LoaderComponent from '../loaderComponent.jsx';

class CardCollection extends React.PureComponent {
    handleRenderCard(item) {
        return <Card key={item.id} item={item}/>;
    }
    render() {
        const tiles = _.map(this.props.tilesData, this.handleRenderCard);
        return (
            <div>
                {_.isEmpty(this.props.tilesData) ?
                    <LoaderComponent/> :
                    <div className="cardsContainer row">
                        {tiles}
                    </div>
                }
            </div>
        );
    }
}

CardCollection.propTypes = {
    tilesData: PropTypes.object,
};

export default bindHandlers(CardCollection);
