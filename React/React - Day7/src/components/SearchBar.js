import React, { Component, useState } from 'react'

function SearchBar(props) {


  const [searchTerm, setSearchTerm] = useState('')

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit(searchTerm)
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <label>Search for Images</label>
        <input type="text" className='form-control' onChange={(event) => setSearchTerm(event.target.value)} />
      </div>
    </form>
  );


}

export default SearchBar;
