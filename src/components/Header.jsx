import React from 'react'
import "./Header.css"
import appLogo from "../assests/header/cryptopunk-logo.png";
import searchIcon from "../assests/header/search.png"
import themeSwitchIcon from "../assests/header/theme-switch.png";

const Header = () => {
  return (
    <div className='header'>
        <div className='logoContainer'>
            <img src={appLogo} className="appLogo" alt="app logo"/>
        </div>

        <div className='searchBar'>
            <div className='searchIconContainer'>
                <img src={searchIcon}/>
            </div>
            <input type="text" className='searchInput' placeholder='Collection, item or user...'/>
        </div>

        <div className='headerItems'>
            <p>Drop</p>
            <p>Marketplace</p>
            <p>Create</p>
        </div>

        <div className='headerActions'>
            <div className='themeSwitchIconContainer'>
                <img src={themeSwitchIcon}/>
            </div>
        </div>

        <div className='btn-login'>Get in</div>
    </div>
  )
}

export default Header