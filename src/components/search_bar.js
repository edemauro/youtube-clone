import React from 'react';

const SearchBar = (props) => {
  return (
    <div className="col-sm-8">
      <input
        onChange={ event => props.onChange(event.target.value) } />
    </div>
  );
}

export default SearchBar;