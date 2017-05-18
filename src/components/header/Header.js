import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='main-header'>
      <nav className='main-header__nav'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/signin'>Signin</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
