import { useRef, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import logo from '@/assets/logo.png'
import search_icon from '@/assets/search_icon.svg'
import bell_icon from '@/assets/bell_icon.svg'
import caret_icon from '@/assets/caret_icon.svg'
import profile_img from '@/assets/profile_img.png'

const Navbar = () => {

  const navRef = useRef();

  const navigate = useNavigate();

  const logout = () => {
    navigate("/login")
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark')
      } else {
        navRef.current.classList.remove('nav-dark')
      }
    })
  }, [])

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <Link className='link' to='/'>Home</Link>
          </li>
          <li>
            <Link className='link' to='/tv-shows'>TV Shows</Link>
          </li>
          <li>
            <Link className='link' to='/movies'>Movies</Link>
          </li>
          <li>
            <Link className='link' to="/new-popular">New & Popular</Link>
          </li>
          <li>
            <Link className='link' to="#">My List</Link>
          </li>
          <li>
            <Link className='link' to="#">Browse By Languages</Link>
          </li>
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
            <p onClick={logout}>Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
