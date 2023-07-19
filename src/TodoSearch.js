import React from 'react';
import './TodoSearch.css';

function TodoSearch({
  searchValue,
  setSearcValue,
}) {
  return (
    
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearcValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };