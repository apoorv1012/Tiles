import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Container from './components/mainContainer.jsx';
import './assets/styles/main.less';

export function TilesApp() {
    return (
        <Provider store={store}>
            <Container/>
        </Provider>
    );
}

ReactDOM.render(<TilesApp/>, document.getElementById('container'));
