import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
  }

  render() {
    return (
      <div className="col-sm-8">
        <input
          value={this.state.term}
          onChange={ event => this.setState({ term: event.target.value })}
        />
        <span className="input-group-btn">
          <button 
            className="btn btn-default"
            onClick={() => this.props.onClick(this.state.term)}
          >
            Go!
          </button>
        </span>
      </div>
    );
  }
}

export default SearchBar;