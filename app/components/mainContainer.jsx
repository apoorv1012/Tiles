import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './header.jsx';
import CardCollectionContainer from './card/cardCollectionContainer.jsx';
import CardDetailedContainer from './card/cardDetailedContainer.jsx';
import SearchItemsContainer from './search/searchItemsContainer.jsx';
import Footer from './footer.jsx';

const Container = () => (
    <Router>
        <div>
            <Header/>
            <div id="main-content">
                <Route exact path="/" component={CardCollectionContainer}/>
                <Route exact path="/tiles/:id" component={CardDetailedContainer}/>
                <Route exact path="/tiles/search/:term" component={SearchItemsContainer}/>
            </div>
            <Footer/>
        </div>
    </Router>
);

Container.PropTypes = {
    dispatchLoadStatic: PropTypes.func,
};

export default Container;
