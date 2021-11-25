import NavItem from '../navItem';
import { sideMenu } from './menu.config.js';

import style from './sidebar.module.css';


const Sidebar = () => {
   return (
      <nav className={style.sidebar}>
         {sideMenu.map((item, index) => {
            return <NavItem key={`${item.label}-${index}`} item={item} />;
         })}
      </nav>
   )
}

export default Sidebar
