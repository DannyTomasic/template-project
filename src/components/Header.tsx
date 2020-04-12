import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Header/Search';

const Header = () => {
  return (
    <div className="Header">
      <div className="Logo mr4">LOGO</div>
      <NavLink exact to="/">Hypo Constellation</NavLink>
      <NavLink exact to="/lead-report">Lead Report</NavLink>
      <div className="ml-auto flex align-center">
        <Search />
        <div>
          adam@netengine.com.au
        </div>
      </div>
    </div>
  );
};

export default Header;
