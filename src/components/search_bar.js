import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.term)
  }

  render() {
    return (
      <form 
        className="col-sm-10 col-sm-push-1"
        onSubmit={ this.handleSubmit }
      >
        <div className="input-group" id="search-bar">
          <input
            className="form-control"
            value={this.state.term}
            onChange={ event => this.setState({ term: event.target.value })}
          />
          <span className="input-group-btn">
            <button 
              className="btn btn-default"
              type="submit"
            >
              Go!
            </button>
          </span>
        </div>
      </form>
    );
  }
}

export default SearchBar;