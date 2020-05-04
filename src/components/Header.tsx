import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Header/Search';

const Header = () => {
  return (
    <div className="Header">
      <div className="Logo mr4">LOGO</div>
      <NavLink exact to="/">Landing Page</NavLink>
      <NavLink exact to="/lead-report">Maps</NavLink>
      <div className="ml-auto flex align-center">
        <Search />
        <div>
          test@netengine.com.au
        </div>
      </div>
    </div>
  );
};

export default Header;
