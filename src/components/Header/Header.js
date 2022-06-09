import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <h1>NY Times News Reader</h1>
      <Link to='/'>
        <button className='home-button'>Home</button>
      </Link>
    </header>
  )
}

export default Header;