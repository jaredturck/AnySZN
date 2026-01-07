import navbar_logo from '../imgs/PNG/logo_green_1.png';
import basket_icon from '../imgs/navbar_icons/basket.png';
import info_icon from '../imgs/navbar_icons/info.png';
import person_icon from '../imgs/navbar_icons/person.png';
import search_icon from '../imgs/navbar_icons/search.png';

import { NavLink } from 'react-router-dom';

type NavbarProps = {
  auth: {
    isAuthenticated: boolean;
    user: { id: number; username: string; email: string } | null;
  } | null;
};

export function Navbar({ auth }: NavbarProps) {
  const isAuthenticated = auth?.isAuthenticated === true;
  const profileLink = isAuthenticated ? '/account' : '/login';

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative text-[0.875rem] text-white no-underline cursor-pointer transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:bottom-[-0.25rem] after:h-[2px] after:w-0 after:bg-[var(--accent-color)] after:transition-[width] after:duration-200 hover:text-[var(--accent-color)] hover:after:w-full ${isActive ? 'text-[var(--accent-color)] after:w-full' : ''}`;

  return (
    <nav className="absolute left-4 top-4 z-[100] flex h-fit min-h-16 w-[calc(100%-5rem)] flex-wrap items-center justify-between gap-4 rounded-[0.625rem] bg-black px-6">
      <div className="flex items-center">
        <NavLink to="/" end className="inline-flex items-center">
          <img src={navbar_logo} alt="AnyHJS logo" className="block h-10 transition-transform duration-200 ease-out hover:scale-[1.03]" />
        </NavLink>
      </div>

      <div className="flex items-center gap-6">
        <NavLink to="/" end className={getLinkClass}>Home</NavLink>
        <NavLink to="/mens-clothing" className={getLinkClass}>Men</NavLink>
        <NavLink to="/womens-clothing" className={getLinkClass}>Women</NavLink>
        <NavLink to="/create" className={getLinkClass}>Create</NavLink>
      </div>

      <div className="flex items-center gap-8">
        <NavLink to="/search" className="inline-flex"><img src={search_icon} alt="Search" className="h-5 w-5 object-contain cursor-pointer transition-[transform,opacity] duration-200 ease-out hover:scale-110 hover:opacity-85" /></NavLink>
        <NavLink to={profileLink} className="inline-flex"><img src={person_icon} alt="Profile" className="h-5 w-5 object-contain cursor-pointer transition-[transform,opacity] duration-200 ease-out hover:scale-110 hover:opacity-85" /></NavLink>
        <NavLink to="/checkout" className="inline-flex"><img src={basket_icon} alt="Cart" className="h-5 w-5 object-contain cursor-pointer transition-[transform,opacity] duration-200 ease-out hover:scale-110 hover:opacity-85" /></NavLink>
        <NavLink to="/support-centre" className="inline-flex"><img src={info_icon} alt="Help" className="h-5 w-5 object-contain cursor-pointer transition-[transform,opacity] duration-200 ease-out hover:scale-110 hover:opacity-85" /></NavLink>
      </div>
    </nav>
  );
}
