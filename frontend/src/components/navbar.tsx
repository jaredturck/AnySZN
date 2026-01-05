import navbar_logo from '../imgs/PNG/logo_green_1.png';
import basket_icon from '../imgs/navbar_icons/basket.png';
import info_icon from '../imgs/navbar_icons/info.png';
import person_icon from '../imgs/navbar_icons/person.png';
import search_icon from '../imgs/navbar_icons/search.png';
import '../styles/navbar.scss';

import { NavLink } from 'react-router-dom';

type NavbarProps = {
  auth: {
    isAuthenticated: boolean;
    user: {
      id: number;
      username: string;
      email: string;
    } | null;
  } | null;
};

export function Navbar({ auth }: NavbarProps) {
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    `navbar__link${isActive ? ' navbar__link--selected' : ''}`;

  const isAuthenticated = auth?.isAuthenticated === true;
  const profileLink = isAuthenticated ? '/account' : '/login';
  console.log("Navbar auth prop:", profileLink);

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <NavLink to="/" className="navbar__logo-link" end>
          <img className="navbar__logo" src={navbar_logo} alt="AnySzn logo" />
        </NavLink>
      </div>
      <div className="navbar__middle">
        <NavLink to="/" className={getLinkClass} end>Home</NavLink>
        <NavLink to="/mens-clothing" className={getLinkClass}>Men</NavLink>
        <NavLink to="/womens-clothing" className={getLinkClass}>Women</NavLink>
        <NavLink to="/create" className={getLinkClass}>Create</NavLink>
      </div>
      <div className="navbar__right">
        <NavLink to="/search"><img className="navbar__icon" src={search_icon} alt="Search" /></NavLink>
        <NavLink to={profileLink}><img className="navbar__icon" src={person_icon} alt="Profile" /></NavLink>
        <NavLink to="/checkout"><img className="navbar__icon" src={basket_icon} alt="Cart" /></NavLink>
        <NavLink to="/support-centre"><img className="navbar__icon" src={info_icon} alt="Help" /></NavLink>
      </div>
    </nav>
  );
}
