import React from 'react';
import { connect } from 'react-redux';
import { fetchVideos } from '../actions';

const SearchBar = ({ dispatch }) => {
  let input;

  return (
    <form 
      className="col-sm-12"
      onSubmit={e => {
        e.preventDefault();
        if(!input.value.trim()) {
          return;
        }

        dispatch(fetchVideos(input.value));
        input.value = '';
      }}
    >
      <div className="input-group" id="search-bar">
        <input
          className="form-control"
          ref={node => {
            input = node
          }}
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

export default connect()(SearchBar);