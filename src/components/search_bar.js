import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
  }

  handleKeyPress = (target) => {
    if(target.charCode === 13) {
      this.props.onClick(this.state.term);
    }
  }

  render() {
    return (
      <div className="col-sm-10 col-sm-push-1">
        <div className="input-group" id="search-bar">
          <input
            className="form-control"
            value={this.state.term}
            onChange={ event => this.setState({ term: event.target.value })}
            onKeyPress={this.handleKeyPress}
          />
          <span className="input-group-btn">
            <button 
              className="btn btn-default"
              type="submit"
              onSubmit={() => this.props.onClick(this.state.term)}
            >
              Go!
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default SearchBar;