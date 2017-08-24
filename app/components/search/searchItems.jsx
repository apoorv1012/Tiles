import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Card from '../card/card.jsx';
import LoaderComponent from '../loaderComponent.jsx';

class SearchItems extends React.PureComponent {
    handleRenderCard(item, index) {
        return <Card key={index} item={item}/>;
    }
    render() {
        const tiles = _.map(this.props.tilesData, this.handleRenderCard);
        return (
            <div>
                {_.isEmpty(this.props.tilesData) ?
                    <LoaderComponent/> :
                    <div className="cardsContainer">
                        {tiles}
                    </div>
                }
            </div>
        );
    }
}

SearchItems.propTypes = {
    tilesData: PropTypes.object,
};

export default SearchItems;
