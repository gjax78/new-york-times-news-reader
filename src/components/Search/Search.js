import React from 'react'
import './Search.css'
import PropTypes from 'prop-types'

const Search = ({ search, setSearch }) => {

  const onChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <form className='form-search'>
      <input
      type='text'
      className='controlled-search'
      placeholder='Search articles'
      value={search}
      onChange={onChange}
      />
    </form>
  )
}

export default Search;

Search.propTypes = {
  search: PropTypes.string.isRequired, 
  setSearch: PropTypes.func.isRequired
}