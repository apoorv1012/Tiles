import React from 'react';
import { bindHandlers } from 'react-bind-handlers';
import { withRouter } from 'react-router-dom';

class Search extends React.PureComponent {
    handleSearch() {
        this.props.history.push(`/tiles/search/${this.searchBox.value}`);        
    }
    render() {
        return (
            <div className="search-area">
                <div className="input-group">
                    <input type="search" className="form-control" ref={(ref) => (this.searchBox = ref)} id="searchBox"
                        placeholder="Search here"
                    />
                    <div className="input-group-btn">
                        <span className="btn btn-default" ref={(ref) => (this.searchBtn = ref)}
                            onClick={this.handleSearch}
                        >
                            <i className="glyphicon glyphicon-search"></i>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(bindHandlers(Search));
