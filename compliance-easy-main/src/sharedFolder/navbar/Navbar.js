import React from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import Popup from 'reactjs-popup'
import logo from '../../Asset/logo.png'

import './NavbarStyle.css'

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  console.log(user)

  const handleLogout=()=>{
    window.open("http://localhost:5000/auth/logout", "_self");
  }

  const MobileMenu=()=>{
    return(
      <Popup
          trigger={
            <button type="button" className="hamburger-btn">
              <GiHamburgerMenu size={24} className="hamburger-menu" />
            </button>
          }
          position="bottom"
        >
          {close => (
            <div className="modal-container">
              <NavLink to="/" className="list-item">
                <p className="items">Built a Contract</p>
              </NavLink>
              {user ? (
          <p onClick={handleLogout} className='items'>LogOut</p>

          ):
            <NavLink to={'/login'} className="list-item"><p className='items'>Sign In</p></NavLink>

            }
            </div>
          )}
        </Popup>
    )
  }

  const DesktopView=()=>{
    return(
      <ul className='list-menu-desktop'>
            <li className='list-item'>
            <NavLink to={'/'} activeClassName='active-option'>Build a Contract</NavLink>
            </li>
            <li className='list-item'>
            
            </li>
            {user ? (<>
              <li className="listItem">
            <img
              src={user.photos[0].value}
              alt={user.displayName}
              className="avatar"
            />
          </li>
          <li onClick={handleLogout} className='logout-btn'>LogOut</li>
            </>
          ):
            <li className='list-item'>
            <NavLink to={'/login'} activeClassName='active-option'>Sign In</NavLink>
           
          </li>
            }
            
        </ul>
    )
  }

  return (
    <div className='navbar'>
      <NavLink to={'/'}><img src= {logo} alt='logo' className='logo'/></NavLink>
        <DesktopView/>
        <div className='mobile-view'>
        {user ? (<img
              src={user.photos[0].value}
              alt={user.displayName}
              className="avatar-mobile"
            />): null}
        <MobileMenu/>
        </div>
    </div>
  )
}

export default Navbar