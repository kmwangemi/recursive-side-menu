import { NavLink } from 'react-router-dom';
import NavItemHeader from './NavItemHeader.js';

import style from './navItem.module.css';

console.log({ style });

const NavItem = ({ item }) => {
   const { label, Icon, to, children } = item;

   if (children) {
      return <NavItemHeader item={item} />;
   }

   return (
      <NavLink
         exact
         to={to}
         className={style.navItem}
         activeClassName={style.activeNavItem}
      >
         <Icon className={style.navIcon} />
         <span className={style.navLabel}>{label}</span>
      </NavLink>
   )
}

export default NavItem
