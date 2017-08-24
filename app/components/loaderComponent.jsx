import React from 'react';

class LoaderComponent extends React.PureComponent {
    render() {
        return(
            <div id="loader">
                <img src="/images/loader.gif" alt="loader"/>
            </div>
        );
    }
}

export default LoaderComponent;