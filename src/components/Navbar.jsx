import React from 'react'
import logo from '@/assets/logo.png'
import search_icon from '@/assets/search_icon.svg'
import bell_icon from '@/assets/bell_icon.svg'
import caret_icon from '@/assets/caret_icon.svg'
import profile_img from '@/assets/profile_img.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Languages </li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className='icons'>
          <img src={search_icon} alt="search_icon" />
        </button>
        <p>Children</p>
        <button className='icons'>
          <img src={bell_icon} alt="bell_icon" />
        </button>
        <div className="navbar-profile">
          <img src={profile_img} alt="profile_img" className='profile' />
          <img src={caret_icon} alt="caret_icon" />
          <div className="dropdown">
            <p>Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
